import axios from 'axios';
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
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
    foodNavMenuSelection: 'SANDWICHES',
    navMenuVisible: false,
    section: [],
    categories: [],
  },
  getters: {
    GET_CATEGORIES: state => {
      return state.categories;
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
    FOOD_NAV_MENU_SELECTION: state => {
      return state.foodNavMenuSelection;
    },
    NAV_MENU_VISIBLE: state => {
      return state.navMenuVisible;
    },
  },
  mutations: {
    SET_CATEGORIES(state, data) {
      state.categories = data;
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
    SET_FOOD_NAV_MENU_SELECTION: (state, payload) => {
      state.foodNavMenuSelection = payload.id;
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
      const { data: categories } = await axios.get(`http://localhost:3000/api/loyalty/`);
      commit('SET_CATEGORIES', categories);
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
    ADD_DISH({ state, commit, dispatch }, payload) {
      let order = [...state.quickOrder];
      let find = order.find(d => d.guid == payload.dish.guid);
      if (find) {
        find.quantity += payload.inc;
      } else {
        payload.dish.quantity += payload.inc;
        order.push(payload.dish);
      }
      order.forEach((o, idx) => {
        if (o.quantity === 0) {
          order.splice(idx, 1);
        }
      });
      commit('SET_QUICK_ORDER', order);
      dispatch('GET_TOTAL_SUM');
    },
    SET_FOOD_NAV_MENU_SELECTION: ({ commit }, payload) => {
      commit('SET_FOOD_NAV_MENU_SELECTION', payload);
    },
    SHOW_NAV_MENU: ({ commit }, payload) => {
      commit('SHOW_NAV_MENU', payload);
    },
  },
});
