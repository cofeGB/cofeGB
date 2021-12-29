import express from 'express';
import { handler } from './handler.js';
import { commitOrdersChange, getOrderByNumber } from './order.js';

export const router = express.Router();

// посмотреть заказ по номеру
router.get('/:number', (req, res) => {
  const privOrder = getOrderByNumber(req.params.number);
  if (privOrder) {
    res.send(JSON.stringify(privOrder.order));
  } else {
    res.sendStatus(404, JSON.stringify({ result: 0, text: 'Order do not exist' }));
  }
});

//оформить заказ
router.post('/newOrder/:number', (req, res) => {
  const privOrder = getOrderByNumber(req.params.number);
  privOrder.order.user = {
    phone: req.body.user.userPhone,
    address: req.body.user.address,
    name: req.body.user.userName,
    // createAccount: req.body.user.createAccount,
  };
  privOrder.order.timeTo = new Date();
  privOrder.order.userMessage = req.body.user.message;
  privOrder.order.paymentMethod = req.body.user.payment;
  privOrder.order.backCall = req.body.user.backCall;
  privOrder.order.status = 'pending';
  commitOrdersChange();
  res.send('{"result": 1}');
});
//добавить товар к заказу
router.post('/:number/:dishGuid', (req, res) => {
  const privOrder = getOrderByNumber(req.params.number);
  handler(req, res, 'add', privOrder);
});
//изменить количество товара в заказе
router.put('/:number/:dishGuid', (req, res) => {
  const privOrder = getOrderByNumber(req.params.number);
  handler(req, res, 'change', privOrder);
});
//удалить все товары из заказа
router.delete('/clear/:number', (req, res) => {
  const privOrder = getOrderByNumber(req.params.number);
  handler(req, res, 'clear', privOrder);
});
//удалить товар из заказа
router.delete('/:number/:dishGuid', (req, res) => {
  const privOrder = getOrderByNumber(req.params.number);
  handler(req, res, 'del', privOrder);
});
