const express = require('express');
const fs = require('fs');
const path = require('path');
const handler = require('./handler');

const router = express.Router();

//заказ по guid
router.get('/:number', (req, res) => {
  const fileName = path.resolve(`server/db/${req.params.number}Order.json`);
  fs.readFile(fileName, 'utf-8', (err, data) => {
    if (err) {
      res.sendStatus(404, JSON.stringify({ result: 0, text: err }));
    } else {
      res.send(data);
    }
  });
 
});
          
router.post('/:number/:dishGuid', (req, res) => {
  const file = path.resolve(`server/db/${req.params.number}Order.json`);
  handler(req, res, 'add', file);
});
router.put('/:number/:dishGuid', (req, res) => {
  const file = path.resolve(`server/db/${req.params.number}Order.json`);
  handler(req, res, 'change', file);
});

router.delete('/:number/:dishGuid', (req, res) => {
  const file = path.resolve(`server/db/${req.params.number}Order.json`);
  handler(req, res, 'del', file);
});

module.exports = router;