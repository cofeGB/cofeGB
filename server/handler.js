import path from 'path';
import fs from 'fs';
import { add, change, del, clear } from './order.js';

const actions = {
  add: add,
  change: change,
  del: del,
  clear: clear,
};

function reWriteFile(req, res, action, file) {
  fs.readFile(file, 'utf-8', (err, data) => {
    if (err) {
      console.log(err, 'read file', file, 'in handler');
      res.status(404);
    } else {
      const order = JSON.parse(data);
      const newOrder = actions[action](order, req);
      fs.writeFile(file, newOrder, err => {
        if (err) {
          res.send('{"result": 0}');
        } else {
          res.send('{"result": 1}');
        }
      });
    }
  });
}

function createFile(req, res, action, file) {
  fs.readFile(path.resolve('db/orderPattern.json'), 'utf-8', (err, data) => {
    if (err) {
      console.log(req.params, file);
      console.log(err, 'read file orderPattern');
    } else {
      fs.writeFile(file, data, err => {
        if (err) {
          console.log(err);
        } else {
          console.log('successfully file created');
          reWriteFile(req, res, action, file);
        }
      });
    }
  });
}

export const handler = (req, res, action, file) => {
  if (fs.existsSync(file)) {
    reWriteFile(req, res, action, file);
  } else {
    createFile(req, res, action, file);
  }
};
