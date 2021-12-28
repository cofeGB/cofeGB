import express from 'express';
import path from 'path';
import fs from 'fs';
import { handler } from './handler.js';

export const router = express.Router();

// посмотреть заказ по номеру
router.get('/:number', (req, res) => {
  const fileName = path.resolve(`db/${req.params.number}Order.json`);
  fs.readFile(fileName, 'utf-8', (err, data) => {
    if (err) {
      console.log(err, 'read file', fileName, 'in ordersRouter');
      res.sendStatus(404, JSON.stringify({ result: 0, text: err }));
    } else {
      res.send(data);
    }
  });
});

//оформить заказ
router.post('/newOrder/:number', (req, res) => {
  const file = path.resolve(`db/${req.params.number}Order.json`);
  fs.readFile(file, 'utf-8', (err, data) => {
    if (err) {
      console.log(err, 'read file', file, 'in ordersRouter post');
    } else {
      const newFile = path.resolve(`db/${req.body.user.userPhone}-${req.params.number}Order.json`);
      const order = JSON.parse(data);
      order.user = {
        phone: req.body.user.userPhone,
        address: req.body.user.address,
        name: req.body.user.userName,
        // createAccount: req.body.user.createAccount,
      };
      order.timeTo = new Date();
      order.userMessage = req.body.user.message;
      order.paymentMethod = req.body.user.payment;
      order.backCall = req.body.user.backCall;
      order.status = 'pending';
      fs.writeFile(newFile, JSON.stringify(order, null, 4), err => {
        console.log('writing to ', newFile);
        if (err) {
          res.send('{"result": 0}');
        } else {
          console.log(newFile, 'created');
          fs.unlink(file, err => {
            if (err) {
              console.log(err);
            } else {
              console.log(`${file} was deleted`);
            }
          });
          res.send('{"result": 1}');
        }
      });
    }
  });
});
//добавить товар к заказу
router.post('/:number/:dishGuid', (req, res) => {
  const file = path.resolve(`db/${req.params.number}Order.json`);
  handler(req, res, 'add', file);
});
//изменить количество товара в заказе
router.put('/:number/:dishGuid', (req, res) => {
  const file = path.resolve(`db/${req.params.number}Order.json`);
  handler(req, res, 'change', file);
});
//удалить все товары из заказа
router.delete('/clear/:number', (req, res) => {
  const file = path.resolve(`db/${req.params.number}Order.json`);
  handler(req, res, 'clear', file);
});
//удалить товар из заказа
router.delete('/:number/:dishGuid', (req, res) => {
  const file = path.resolve(`db/${req.params.number}Order.json`);
  handler(req, res, 'del', file);
});
