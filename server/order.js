const add = (order, req) => {
  order.guid =('xxxxxxxx').replace(/[x]/g, c => {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  })
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
  console.log(find);
  order.total -= find.price * find.quantity;
  order.list.splice(order.list.indexOf(find), 1);
  return JSON.stringify(order, null, 4);
};

module.exports = {
  add,
  change,
  del,
};