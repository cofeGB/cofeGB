/// <reference path="../src/typedefs.js" />
import path from 'path';
import fs from 'fs';

let privateOrders = [];
let ordersFilePath = '';

/**
 * Load orders form file
 * @param {string} filePath - path to orders file
 * */
export const loadOrders = filePath => {
  const fileName = path.resolve(filePath);
  ordersFilePath = fileName;
  try {
    const fileContent = fs.readFileSync(fileName, 'utf-8');
    privateOrders = JSON.parse(fileContent);
  } catch (e) {
    console.warn(e.toString());
    privateOrders = [];
  }
};

/**
 * Save orders to file
 * @param {string} filePath - path to orders file
 * */
export const saveOrders = filePath => {
  const fileName = path.resolve(filePath);
  try {
    fs.writeFileSync(fileName, JSON.stringify(privateOrders, null, 2), 'utf-8');
  } catch (e) {
    console.warn(e.toString());
  }
};

/**
 * Save orders changes to db
 * */
export const commitOrdersChange = () => {
  saveOrders(ordersFilePath);
};

/**
 * Create new order and add into db
 * @param {PrivOrder} privOrder - private order object to add
 * */
export const createOrder = privOrder => {
  privateOrders.push(privOrder);
  commitOrdersChange();
};

/**
 * Get existing private order by number
 * @param {string} orderNumber - order number to search
 * @return {PrivOrder}
 * */
export const getOrderByNumber = orderNumber => {
  return privateOrders.find(item => item.order.orderNumber === orderNumber);
};

/**
 * Get existing private order by orger guid
 * @param {string} orderGuid
 * @return {PrivOrder}
 * */
export const getOrderByGuid = orderGuid => {
  return privateOrders.find(item => item.order.guid === orderGuid);
};

/**
 * Get existing private orders by status
 * @param {OrderStatus || OrderStatus[]} orderStatus - order status to search
 * @return {PrivOrder[]}
 * */
export const getOrdersByStatus = orderStatus => {
  if (Array.isArray(orderStatus)) {
    return privateOrders.filter(item => orderStatus.some(status => item.order.status === status));
  }
  return privateOrders.filter(item => item.order.status === orderStatus);
};

/**
 * Set existing private orders status
 * @param {PrivOrder} privOrder
 * @param {OrderStatus} orderStatus
 * */
export const setOrderStatus = (privOrder, orderStatus) => {
  privOrder.order.status = orderStatus;
  commitOrdersChange();
};

export const add = (privOrder, req) => {
  privOrder.order.orderNumber = req.params.number;
  // privOrder.order.guid = req.body.guid;
  const dish = req.body.dish;
  privOrder.order.total += dish.price;
  dish.quantity = req.body.quantity;
  privOrder.order.list.push(dish);
  return JSON.stringify(privOrder.order, null, 4);
};
export const change = (privOrder, req) => {
  const find = privOrder.order.list.find(d => d.guid === req.params.dishGuid);
  privOrder.order.total += find.price * +req.body.inc;
  find.quantity += req.body.inc;
  return JSON.stringify(privOrder.order, null, 4);
};
export const del = (privOrder, req) => {
  const find = privOrder.order.list.find(d => d.guid === req.params.dishGuid);
  privOrder.order.total -= find.price * find.quantity;
  privOrder.order.list.splice(privOrder.order.list.indexOf(find), 1);
  return JSON.stringify(privOrder.order, null, 4);
};
export const clear = privOrder => {
  privOrder.order.total = 0;
  privOrder.order.list = [];
  return JSON.stringify(privOrder.order, null, 4);
};
export const setStatus = (privOrder, req) => {
  /** @type {UpdateOrderStatus} */
  const updateOrderStatus = req.body;
  privOrder.order.status = updateOrderStatus.newStatus;
  return JSON.stringify(privOrder.order, null, 4);
};
