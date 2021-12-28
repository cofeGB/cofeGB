import express from 'express';
import path from 'path';
import fs from 'fs';

export const router = express.Router();

// вернуть массив PrivOrder с требуемыми значениями свойств
router.get('/get-priv-orders', (req, res) => {
  const dirName = path.resolve(`db`);
  const orderFiles = fs.readdirSync(dirName).filter(file => /.*Order\.json$/.test(file));

  const orders = [];
  orderFiles.forEach(filename => {
    const order = JSON.parse(
      fs.readFileSync(path.resolve(`db/${filename}`), { encoding: 'utf-8' })
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

// вернуть массив PrivOrder с требуемыми значениями свойств
router.put('/set-status', (req, res) => {
  const dirName = path.resolve(`db`);
  const orderFiles = fs.readdirSync(dirName).filter(file => /.*Order\.json$/.test(file));

  const orders = [];
  orderFiles.forEach(filename => {
    const order = JSON.parse(
      fs.readFileSync(path.resolve(`db/${filename}`), { encoding: 'utf-8' })
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
