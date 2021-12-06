const fs = require('fs');
const order = require('./order');

const actions = {
  add: order.add,
  change: order.change,
  del: order.del,
};

const handler = (req, res, action, file) => {
  fs.readFile(file, 'utf-8', (err, data) => {
    if (err) {
      res.sendStatus(404, JSON.stringify({result: 0, text: err}));
    } else {
      let orders = JSON.parse(data);
      const order = orders.find(o => o.guid === req.params.guid); //объект заказа
      const newOrder = actions[action](order, req);
      orders = orders.splice(order.list.indexOf(order), 1);
      fs.writeFile(file, orders.push(newOrder), (err) => {
        if (err) {
          res.send('{"result": 0}');
        } else {
          res.send('{"result": 1}');
        }
      })
    }
  });
};

module.exports = handler;