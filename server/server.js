const express = require('express');
const path = require('path');
const fs = require('fs');

const { server } = require('http');

const ordersRouter = require('./ordersRouter');
const privOrdersRouter = require('./privOrdersRouter');

const app = express();

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
  fs.readFile(path.resolve('server/db/menu.json'), 'utf-8', (err, data) => {
    if (err) {
      res.send(JSON.stringify({ result: 0, text: err }));
    } else {
      res.send(JSON.parse(data).filter(el => el.category === req.params.category));
    }
  });
});
app.get('/api/categories', (req, res) => {
  fs.readFile(path.resolve('server/db/categories.json'), 'utf-8', (err, data) => {
    if (err) {
      res.send(JSON.stringify({ result: 0, text: err }));
    } else {
      res.send(data);
    }
  });
});
app.get('/api/callbacks', (req, res) => {
  fs.readFile(path.resolve('server/db/callbacks.json'), 'utf-8', (err, data) => {
    if (err) {
      res.send(JSON.stringify({ result: 0, text: err }));
    } else {
      res.send(data);
    }
  });
});
app.get('/api/employee', (req, res) => {
  fs.readFile(path.resolve('server/db/employee.json'), 'utf-8', (err, data) => {
    if (err) {
      res.send(JSON.stringify({ result: 0, text: err }));
    } else {
      res.send(data);
    }
  });
});
app.get('/api/employee-reviews', (req, res) => {
  fs.readFile(path.resolve('server/db/employee-reviews.json'), 'utf-8', (err, data) => {
    if (err) {
      res.send(JSON.stringify({ result: 0, text: err }));
    } else {
      res.send(data);
    }
  });
});
app.get('/api/globalConst', (req, res) => {
  fs.readFile(path.resolve('server/db/globalConst.json'), 'utf-8', (err, data) => {
    if (err) {
      res.send(JSON.stringify({ result: 0, text: err }));
    } else {
      res.send(data);
    }
  });
});

// app.get('/api/menu', (req, res) => {
//   fs.readFile(path.resolve('server/db/menu.json'), 'utf-8', (err, data) => {
//     if (err) {
//       res.send(JSON.stringify({ result: 0, text: err }));
//     } else {
//       res.send(data);
//     }
//   });
// });

app.get('/api/navMenu', (req, res) => {
  fs.readFile(path.resolve('server/db/navMenu.json'), 'utf-8', (err, data) => {
    if (err) {
      res.send(JSON.stringify({ result: 0, text: err }));
    } else {
      res.send(data);
    }
  });
});

app.get('/api/loyalty', (req, res) => {
  fs.readFile('./server/db/loyalty.json', 'utf-8', (err, data) => {
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
