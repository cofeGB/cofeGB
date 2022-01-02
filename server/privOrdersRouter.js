/// <reference path="../src/typedefs.js" />
import express from 'express';
import path from 'path';
import fs from 'fs';
import { getOrderByGuid, getOrdersByStatus, setOrderStatus } from './order.js';

export const router = express.Router();

// вернуть массив PrivOrder с требуемыми значениями свойств
router.get('/get-priv-orders', (req, res) => {
  const statusListString = req.query.status + '';
  const statusList = statusListString.split(',');
  res.send(getOrdersByStatus(statusList));
});

// вернуть массив PrivOrder с требуемыми значениями свойств
router.put('/set-status', (req, res) => {
  /** @type {UpdateOrderStatus} */
  const updateOrderStatus = req.body;
  if (!updateOrderStatus || !updateOrderStatus.orderGuid || !updateOrderStatus.newStatus) {
    res.status(400).send('Bad request');
    return;
  }

  /** @type {PrivOrder} */
  const privOrder = getOrderByGuid(updateOrderStatus.orderGuid);
  setOrderStatus(privOrder, updateOrderStatus.newStatus);
  res.status(200).send('OK');
});
