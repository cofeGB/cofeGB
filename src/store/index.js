import axios from 'axios';
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    globalName: 'СoffeeBonk',
    globalConst: {},
    employee: [],
    modal: false,
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
  },
  getters: {
    MODAL: state => {
      return state.modal;
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
  },
  mutations: {
    OPEN_CLOSE_MODAL(state) {
      state.modal = !state.modal;
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
  },
  actions: {
    async GET_MENU({ commit }, category) {
      const { data: section } = await axios.get(`http://localhost:3000/api/menu/${category}`);
      commit('SET_MENU', section);
    },
    async GET_NAV_MENU({ commit }) {
      const { data: menu } = await axios.get(`http://localhost:3000/api/navMenu/`);
      commit('SET_NAV_MENU', menu);
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
    async GET_GLOBAL_CONST({ commit }) {
      const { data: globalConst } = await axios.get(`http://localhost:3000/api/globalConst/`);
      commit('SET_GLOBAL_CONST', globalConst);
    },

    OPEN_CLOSE_MODAL({ commit }) {
      commit('OPEN_CLOSE_MODAL');
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
    DELETE_ALL_IN_ORDER_ACTION({ commit }) {
      commit('DELETE_ALL_IN_ORDER');
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
      // commit('SET_AMOUNT', cartList.amount);
    },

    async ADD_DISH({ dispatch }, payload) {
      // console.log(payload.dish.quantity);
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
  },
});
