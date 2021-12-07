const fs = require('fs');
const path = require('path');
const order = require('./order');

const actions = {
  add: order.add,
  change: order.change,
  del: order.del,
};

function reWriteFile(req, res, action, file) {
  fs.readFile(file, 'utf-8', (err, data) => {
    if (err) {
      console.log(err);
      res.status(404);
    } else {
      const order = JSON.parse(data);
      const newOrder = actions[action](order, req);
      fs.writeFile(file, newOrder, (err) => {
        if (err) {
          res.send('{"result": 0}');
        } else {
          res.send('{"result": 1}');
        }
      })
    }
  });
}

function createFile(file) {
  fs.readFile(path.resolve('server/db/orderPattern.json'), 'utf-8', (err, data) => {
    if (err) {
      console.log(err);
    } else {
      fs.writeFileSync(file, data);
    }
  })
}

const handler = (req, res, action, file) => {
  if (fs.existsSync(file)) {
    reWriteFile(req, res, action, file);
  } else {
    createFile(file)
    reWriteFile(req, res, action, file);
  }
};

module.exports = handler;