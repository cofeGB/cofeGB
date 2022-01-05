import express from 'express';
import path from 'path';
import fs from 'fs';
// import { server } from 'http';

import { router as ordersRouter } from './ordersRouter.js';
import { router as privOrdersRouter } from './privOrdersRouter.js';
import { loadOrders, getOrderByPhoneNumber } from './order.js';

const app = express();
loadOrders('db/orders.json');

app.use(express.json());
app.use('/', express.static('../public'));
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  next();
});
app.use('/api/order', ordersRouter);
app.use('/api/priv-order', privOrdersRouter);

app.get('/api/menu/:category', (req, res) => {
  fs.readFile(path.resolve('db/menu.json'), 'utf-8', (err, data) => {
    if (err) {
      res.send(JSON.stringify({ result: 0, text: err }));
    } else {
      res.send(JSON.parse(data).filter(el => el.category === req.params.category));
    }
  });
});
app.get('/api/categories', (req, res) => {
  fs.readFile(path.resolve('db/categories.json'), 'utf-8', (err, data) => {
    if (err) {
      res.send(JSON.stringify({ result: 0, text: err }));
    } else {
      res.send(data);
    }
  });
});
app.get('/api/callbacks', (req, res) => {
  fs.readFile(path.resolve('db/callbacks.json'), 'utf-8', (err, data) => {
    if (err) {
      res.send(JSON.stringify({ result: 0, text: err }));
    } else {
      res.send(data);
    }
  });
});
app.get('/api/orders/:phone', (req, res) => {
  res.send(getOrderByPhoneNumber(req.params.phone));
});
app.get('/api/employee', (req, res) => {
  fs.readFile(path.resolve('db/employee.json'), 'utf-8', (err, data) => {
    if (err) {
      res.send(JSON.stringify({ result: 0, text: err }));
    } else {
      res.send(data);
    }
  });
});
app.get('/api/employee-reviews', (req, res) => {
  fs.readFile(path.resolve('db/employee-reviews.json'), 'utf-8', (err, data) => {
    if (err) {
      res.send(JSON.stringify({ result: 0, text: err }));
    } else {
      res.send(data);
    }
  });
});
app.get('/api/globalConst', (req, res) => {
  fs.readFile(path.resolve('db/globalConst.json'), 'utf-8', (err, data) => {
    if (err) {
      res.send(JSON.stringify({ result: 0, text: err }));
    } else {
      res.send(data);
    }
  });
});

// app.get('/api/menu', (req, res) => {
//   fs.readFile(path.resolve('db/menu.json'), 'utf-8', (err, data) => {
//     if (err) {
//       res.send(JSON.stringify({ result: 0, text: err }));
//     } else {
//       res.send(data);
//     }
//   });
// });

app.get('/api/navMenu', (req, res) => {
  fs.readFile(path.resolve('db/navMenu.json'), 'utf-8', (err, data) => {
    if (err) {
      res.send(JSON.stringify({ result: 0, text: err }));
    } else {
      res.send(data);
    }
  });
});

app.get('/api/loyalty', (req, res) => {
  fs.readFile('.//db/loyalty.json', 'utf-8', (err, data) => {
    if (err) {
      res.send(JSON.stringify({ result: 0, text: err }));
      // res.sendStatus(404, JSON.stringify({result: 0, text: err}));
    } else {
      res.send(data);
    }
  });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening ${port} port`);
});
