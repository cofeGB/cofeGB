const express = require('express');
const fs = require('fs');
const path = require('path');

const router = express.Router();

// вернуть массив PrivOrder с требуемыми значениями свойств
router.get('/get-priv-orders', (req, res) => {
  const dirName = path.resolve(`server/db`);
  const orderFiles = fs.readdirSync(dirName).filter(file => /.*Order\.json$/.test(file));

  const orders = [];
  orderFiles.forEach(filename => {
    const order = JSON.parse(
      fs.readFileSync(path.resolve(`server/db/${filename}`), { encoding: 'utf-8' })
    );

    if (order) {
      if (order.status === undefined) {
        order.status = 'pending';
      }
      if (order.guid === undefined) {
        order.guid = filename.substring(
          filename.indexOf('-') + 1,
          filename.lastIndexOf('Order.json')
        );
      }
      orders.push({ order });
    }
  });
  res.send(JSON.stringify(orders));
});

module.exports = router;
