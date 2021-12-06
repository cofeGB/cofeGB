const express = require('express');
const fs = require('fs');
const handler = require('./handler');

const router = express.Router();

//список всех заказов
router.get('/', (req, res) => {
  console.log('orders');
  fs.readFile('./server/db/orders.json', 'utf-8', (err, data) => {
    if (err) {
      res.sendStatus(404, JSON.stringify({ result: 0, text: err }));
    } else {
      res.send(data);
    }
  });
});

//заказ по guid
router.get('/:guid', (req, res) => {
  fs.readFile('./server/db/orders.json', 'utf-8', (err, data) => {
    if (err) {
      res.sendStatus(404, JSON.stringify({ result: 0, text: err }));
    } else {
      res.send(JSON.stringify(JSON.parse(data).find(o => o.guid === req.params.guid)));
    }
  });
});

//to do
router.post('/:guid', (req, res) => {
  fs.readFile('./server/db/orders.json', 'utf-8', (err, data) => {
    if (err) {
      res.sendStatus(404, JSON.stringify({ result: 0, text: err }));
    } else {
      console.log(req.body);
      const order = JSON.parse(data).find(o => o.guid === req.params.guid);
      res.send(JSON.stringify(order.list.find(d => d.guid === req.params.dishGuid )));
    }
  });
});

router.post('/:guid/:dishGuid', (req, res) => {
  handler(req, res, 'add', './server/db/orders.json');
});
router.put('/:guid/:dishGuid', (req, res) => {
  handler(req, res, 'change', './server/db/orders.json');
});
 
router.delete('/:guid/:dishGuid', (req, res) => {
  handler(req, res, 'del', './server/db/orders.json');
});

module.exports = router;