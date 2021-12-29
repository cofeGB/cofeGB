import { add, change, del, clear, commitOrdersChange, createOrder } from './order.js';

const actions = {
  add,
  change,
  del,
  clear,
};

function reWriteFile(req, res, action, privOrder) {
  actions[action](privOrder, req);
  commitOrdersChange();
  res.send('{"result": 1}');
}

export const handler = (req, res, action, privOrder) => {
  let _privOrder = privOrder;
  if (!_privOrder) {
    _privOrder = {
      order: {
        list: [],
        guid: '',
        user: {
          phone: '',
          addres: {},
          name: '',
          createAcount: false,
        },
        total: 0,
        timeTo: '',
        timeConfirmation: '',
        userMessage: '',
        paymentMethod: '',
        backCall: true,
        status: 'draft',
      },
    };
  }
  createOrder(_privOrder);
  reWriteFile(req, res, action, _privOrder);
};
