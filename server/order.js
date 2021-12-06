const add = (order, req) => {
  order.total += req.body.price;
  order.list.push(req.body);
  return JSON.stringify(order, null, 4);
};
const change = (order, req) => {
  const find = order.list.find(d => d.guid === req.params.dishGuid);
  order.total += find.price * +req.body.quantity;
  find.quantity += req.body.quantity;
  return JSON.stringify(order, null, 4);
};
const del = (order, req) => {
  const find = order.list.find(d => d.guid === req.params.dishGuid);
  order.totalSum -= find.price * find.quantity;
  order.list.splice(order.list.indexOf(find), 1);
  return JSON.stringify(order, null, 4);
};

module.exports = {
  add,
  change,
  del,
};