import axios from 'axios';
import Vue from 'vue';
import Vuex from 'vuex';
import { BACKEND_BASE_URL } from '../config';
import { getRandomPrivOrderArray } from '../mockdata/priv-order';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    globalConst: {},
    employee: [],
    reviewsList: [],
    modal: false,
    modalName: '',
    quickOrder: [],
    total: {
      totalPrice: 0,
      loyalty: [],
    },
    loyalty: [],
    access: {
      DEV: {
        site: true,
        newMenu: true,
        schedule: true,
        stopList: true,
        inventory: true,
        siteUpdate: true,
        createAccount: true,
      },
      ADMIN: {
        site: true,
        newMenu: true,
        schedule: true,
        stopList: true,
        inventory: true,
        siteUpdate: true,
        createAccount: true,
      },
      DEMI_ADMIN: {
        site: true,
        newMenu: true,
        schedule: true,
        stopList: true,
        inventory: true,
        siteUpdate: false,
        createAccount: true,
      },
      BARTENDER: {
        site: true,
        newMenu: true,
        schedule: false,
        stopList: true,
        inventory: true,
        siteUpdate: false,
        createAccount: false,
      },
    },
    foodNavMenu: [],
    navMenuVisible: false,
    section: [],
    categories: [],
    result: {},
    /** @type {PrivOrder[]} */
    pendingOrders: getRandomPrivOrderArray(10),

    /** @type {PrivOrder[]} */
    cookingOrders: [],

    /** @type {PrivOrder[]} */
    closedOrders: [],

    /** @type {boolean} */
    privateMode: false,
    products: [
      {
        title: 'Кофе',
        guid: 'xcgbhj',
        weight: 0,
        weightPack: 0,
        quantity: 22,
        packQuantity: 2,
        quantityInPack: 10,
        protein: 0,
        fats: 0,
        carbohydrates: 0,
        calories: 0,
        price: 0,
        priceByKg: 0,
        pricePack: 500,
        dataRelice: '17-11-2021',
        dataLive: '12 месяцев',
        dateBuy: '1-12-2021',
        dateCreate: '17-11-2022',
        category: 'drink',
        provider: 'ООО "поставщик"',
        warnMsg: 'содержит кофеин',
        warnIcon: '',
        composition: 'кофе',
        warn: true,
      },
      {
        title: 'Чай',
        guid: 'xhcnvj45',
        weight: 0,
        weightPack: 0,
        quantity: 22,
        packQuantity: 2,
        quantityInPack: 10,
        protein: 0,
        fats: 0,
        carbohydrates: 0,
        calories: 0,
        price: 0,
        priceByKg: 0,
        pricePack: 500,
        dataRelice: '17-11-2021',
        dataLive: '12 месяцев',
        dateBuy: '1-12-2021',
        dateCreate: '17-11-2022',
        category: 'drink',
        provider: 'ООО "поставщик"',
        warnMsg: '',
        warnIcon: '',
        composition: 'чай',
        warn: false,
      },
    ],
  },
  getters: {
    PRODUCTS: state => {
      return state.products;
    },
    MODAL: state => {
      return state.modal;
    },
    MODAL_NAME: state => {
      return state.modalName;
    },
    CATEGORIES: state => {
      return state.categories;
    },
    GLOBAL_CONST: state => {
      return state.globalConst;
    },
    EMPLOYEE: state => {
      return state.employee;
    },
    EMPLOYEE_REVIEWS: state => {
      return state.reviewsList;
    },
    TOTAL_SUM: state => {
      return state.total;
    },
    QUICK_ORDER: state => {
      return state.quickOrder;
    },
    FOOD_CONSTRUCTOR: state => {
      return state.foodConstructor;
    },
    BAR_CONSTRUCTOR: state => {
      return state.barConstructor;
    },
    FOOD_CONSTRUCTOR_PATERN: state => {
      return state.foodConstructorPatern;
    },
    BAR_CONSTRUCTOR_PATERN: state => {
      return state.barConstructorPatern;
    },
    ACCESS: state => {
      return state.access;
    },
    MENU: state => {
      return state.section;
    },
    FOOD_NAV_MENU: state => {
      return state.foodNavMenu;
    },
    NAV_MENU_VISIBLE: state => {
      return state.navMenuVisible;
    },
    STATUS: state => {
      return state.result;
    },
    PENDING_ORDERS: state => {
      return state.pendingOrders || [];
    },
    COOKING_ORDERS: state => {
      return state.cookingOrders || [];
    },
    CLOSED_ORDERS: state => {
      return state.closedOrders || [];
    },
    PRIVATE_MODE: state => {
      return !!state.privateMode;
    },
  },
  mutations: {
    SET_PRODUCTS_LIST(state, data) {
      state.products = data;
    },
    OPEN_CLOSE_MODAL(state, data) {
      state.modal = !state.modal;
      state.modalName = data;
    },
    SET_OPEN_MODAL(state, data) {
      state.modal = true;
      state.modalName = data;
    },
    SET_CLOSE_MODAL(state) {
      state.modal = false;
      state.modalName = '';
    },
    SET_CATEGORIES(state, data) {
      state.categories = data;
    },
    SET_GLOBAL_CONST(state, data) {
      state.globalConst = data;
    },
    SET_EMPLOYEE(state, data) {
      state.employee = data;
    },
    SET_EMPLOYEE_RATING(state, data) {
      state.employee = data;
    },
    SET_EMPLOYEE_REVIEWS_LIST(state, data) {
      state.reviewsList = data;
    },
    SET_MENU(state, data) {
      state.section = data;
    },
    SET_NAV_MENU(state, data) {
      state.foodNavMenu = data;
    },
    DELETE_ALL_IN_ORDER(state) {
      state.quickOrder = [];
      state.total.totalPrice = 0;
      state.total.loyalty = [];
    },
    SET_QUICK_ORDER(state, data) {
      state.quickOrder = data;
    },
    SHOW_NAV_MENU: (state, payload) => {
      state.navMenuVisible = !!payload;
    },
    SET_LOYALTY(state, data) {
      state.quickOrder.loyalty.push(data);
    },
    INIT_LOYALTY(state, data) {
      state.loyalty = data;
    },
    GET_TOTAL_SUM(state, total) {
      state.total.totalPrice = total;
    },
    SET_STATUS(state, data) {
      state.result = data;
    },
    SET_PRIVATE_MODE(state, payload) {
      state.privateMode = !!payload.enable;
    },
    SET_ORDER_STATE(state, { orderId, orderState }) {
      let order = state.pendingOrders.find(item => item.id == orderId);
      if (order && order.state === 'pending' && orderState === 'cooking') {
        state.pendingOrders = state.pendingOrders.filter(orderItem => orderItem != order);
        order.state = 'cooking';
        state.cookingOrders.push(order);
        return;
      }

      order = state.cookingOrders.find(item => item.id == orderId);
      if (order && order.state === 'cooking' && orderState === 'closed') {
        state.cookingOrders = state.cookingOrders.filter(orderItem => orderItem != order);
        order.state = 'closed';
        state.closedOrders.push(order);
        return;
      }
    },
  },
  actions: {
    async POST_ORDER({ commit }, payload) {
      // payload.numberOrder взять из localStore
      await axios
        .post(`http://localhost:3000/api/order/newOrder/${payload.numberOrder}`, {
          user: payload.user,
        })
        .then(() => {
          commit('SET_STATUS', { status: 1, text: 'Заказ успешно создан!' });
          localStorage.removeItem('numberOrder');
          localStorage.removeItem('guid');
        })
        .catch(() => {
          commit('SET_STATUS', { status: 0, text: 'Что-то пошло не так :(' });
        });
    },
    async GET_MENU({ commit }, category) {
      const { data: section } = await axios.get(`http://localhost:3000/api/menu/${category}`);
      commit('SET_MENU', section);
    },
    async GET_NAV_MENU({ commit }) {
      const { data: navMenu } = await axios.get(`${BACKEND_BASE_URL}/api/navMenu`);
      // const data = JSON.parse(
      //   '[{"title":"Закуски","path":"/menu/starters","itemOrder":0},{"title":"Сендвичи","path":"/menu/sandwich","itemOrder":1},{"title":"Салаты","path":"/menu/salad","itemOrder":2},{"title":"Десерты","path":"/menu/desserts","itemOrder":3},{"title":"Кофе","path":"/menu/coffee","itemOrder":4},{"title":"Чай","path":"/menu/tea","itemOrder":5}]'
      // );
      commit('SET_NAV_MENU', navMenu);
    },
    async GET_LOYALTY({ commit }) {
      const { data: loyalty } = await axios.get(`http://localhost:3000/api/loyalty/`);
      commit('INIT_LOYALTY', loyalty);
    },
    async GET_CATEGORIES({ commit }) {
      const { data: categories } = await axios.get(`http://localhost:3000/api/categories/`);
      commit('SET_CATEGORIES', categories);
    },
    async GET_EMPLOYEE({ commit }) {
      const { data: employee } = await axios.get(`http://localhost:3000/api/employee/`);
      commit('SET_EMPLOYEE', employee);
    },
    async GET_EMPLOYEE_REVIEWS_LIST({ commit }) {
      const { data: reviewsList } = await axios.get(`http://localhost:3000/api/employee-reviews/`);
      commit('SET_EMPLOYEE_REVIEWS_LIST', reviewsList);
    },
    async GET_GLOBAL_CONST({ commit }) {
      const { data: globalConst } = await axios.get(`http://localhost:3000/api/globalConst/`);
      commit('SET_GLOBAL_CONST', globalConst);
    },
    OPEN_CLOSE_MODAL({ commit, state }) {
      commit('OPEN_CLOSE_MODAL', state);
    },

    GET_TOTAL_SUM({ commit, state }) {
      const basket = state.quickOrder;
      let total = 0;
      basket.forEach(el => {
        total = total + el.price * el.quantity;
        return total;
      });
      commit('GET_TOTAL_SUM', total);
    },
    async DELETE_ALL_IN_ORDER_ACTION({ dispatch }, payload) {
      await axios.delete(`http://localhost:3000/api/order/clear/${payload.numberOrder}`);
      dispatch('GET_ORDER_LIST', payload.numberOrder);
    },
    ADD_LOYALTY({ commit, state }, payload) {
      const exist = state.quickOrder.loyalty.find(el => el.guid === payload);
      if (exist) {
        commit('SET_LOYALTY', exist);
      }
    },
    async GET_ORDER_LIST({ commit }, numberOrder) {
      const { data: order } = await axios.get(`http://localhost:3000/api/order/${numberOrder}`);
      commit('SET_QUICK_ORDER', order.list);
      commit('GET_TOTAL_SUM', order.total);
    },
    async ADD_DISH({ dispatch }, payload) {
      if (!payload.dish.quantity) {
        await axios.post(
          `http://localhost:3000/api/order/${payload.numberOrder}/${payload.dish.guid}`,
          {
            dish: payload.dish,
            quantity: 1,
          }
        );
        dispatch('GET_ORDER_LIST', payload.numberOrder);
      }

      if (payload.dish.quantity > 1) {
        await axios.put(
          `http://localhost:3000/api/order/${payload.numberOrder}/${payload.dish.guid}`,
          {
            dish: payload.dish,
            inc: payload.inc,
          }
        );
        dispatch('GET_ORDER_LIST', payload.numberOrder);
      }
      if (payload.dish.quantity == 1) {
        if (payload.inc < 0) {
          await axios.delete(
            `http://localhost:3000/api/order/${payload.numberOrder}/${payload.dish.guid}`,
            payload.dish
          );
          dispatch('GET_ORDER_LIST', payload.numberOrder);
        }
        if (payload.inc > 0) {
          await axios.put(
            `http://localhost:3000/api/order/${payload.numberOrder}/${payload.dish.guid}`,
            {
              dish: payload.dish,
              inc: payload.inc,
            }
          );
          dispatch('GET_ORDER_LIST', payload.numberOrder);
        }
      }
    },
    SHOW_NAV_MENU: ({ commit }, payload) => {
      commit('SHOW_NAV_MENU', payload);
    },
    SET_PRIVATE_MODE: ({ commit }, payload) => {
      commit('SET_PRIVATE_MODE', payload);
    },
    SET_ORDER_STATE: ({ commit }, { orderId, orderState }) => {
      // console.log({ orderId, orderState });
      commit('SET_ORDER_STATE', { orderId, orderState });
    },
    ADD_REVIEW({ commit }, payload) {
      commit('SET_EMPLOYEE_REVIEWS_LIST', this.state.reviewsList.concat(payload));
    },
    OPEN_MODAL({ commit }, payload) {
      commit('SET_OPEN_MODAL', payload);
    },
    CLOSE_MODAL({ commit }) {
      commit('SET_CLOSE_MODAL');
    },
  },
});
