/// <reference path="../typedefs.js" />

import axios from 'axios';
import { BACKEND_BASE_URL } from '../config';

export const privateStore = {
  namespaced: true,
  state: () => ({
    /** @type {PrivOrder[]} */
    privOrders: [],
  }),
  mutations: {
    SET_ORDER_STATUS(state, /** @type {UpdateOrderStatus} */ payload) {
      /** @type {PrivOrder} */
      const privOrder = state.privOrders.find(
        privOrder => privOrder.order.orderGuid === payload.orderGuid
      );
      privOrder.order.status = payload.newStatus;
    },
    SET_PRIV_ORDERS(state, /** @type {PrivOrder[]} */ privOrders) {
      state.privOrders = (privOrders || []).map(privOrder => {
        const result = privOrder;
        result.order.timeTo = new Date(Date.parse(result.order.timeTo));
        return result;
      });
    },
  },
  actions: {
    GET_PRIV_ORDERS({ commit }, { orderStatusList }) {
      axios
        .get(`${BACKEND_BASE_URL}/api/priv-order/get-priv-orders`, { orderStatusList })
        .then(({ data: privOrders }) => {
          commit('SET_PRIV_ORDERS', privOrders);
        })
        .catch(err => {
          console.error('GET_PRIV_ORDERS error. ', err.toString());
        });
    },
    SET_ORDER_STATUS(
      { commit },
      /** @type {UpdateOrderStatus} */
      payload
    ) {
      axios
        .put('http://localhost:3000/api/priv-order/set-status', payload)
        .then(() => {
          commit('SET_ORDER_STATUS', payload);
        })
        .catch(() => {
          console.error('Failed to update order status');
        });
    },
  },
  getters: {
    PENDING_ORDERS(state) {
      return state.privOrders.filter(privOrder => privOrder.order.status === 'pending');
    },
    COOKING_ORDERS(state) {
      return state.privOrders.filter(privOrder => privOrder.order.status === 'cooking');
    },
  },
};
