const add = (order, req) => {
  order.guid = req.body.guid;
  const dish = req.body.dish;
  order.total += dish.price;
  dish.quantity = req.body.quantity;
  order.list.push(dish);
  return JSON.stringify(order, null, 4);
};
const change = (order, req) => {
  const find = order.list.find(d => d.guid === req.params.dishGuid);
  order.total += find.price * +req.body.inc;
  find.quantity += req.body.inc;
  return JSON.stringify(order, null, 4);
};
const del = (order, req) => {
  const find = order.list.find(d => d.guid === req.params.dishGuid);
  order.total -= find.price * find.quantity;
  order.list.splice(order.list.indexOf(find), 1);
  return JSON.stringify(order, null, 4);
};
const clear = (order) => {
  order.total = 0;
  order.list = [];
  return JSON.stringify(order, null, 4);
};

module.exports = {
  add,
  change,
  del,
  clear,
};
