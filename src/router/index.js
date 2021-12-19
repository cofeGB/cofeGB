import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Delivery from '../views/Delivery.vue';
import Menu from '../views/Menu.vue';
import About from '../views/About.vue';
import Contacts from '../views/Contacts.vue';
import dish from '../components/dish.vue';
import PageNotFound from '../views/PageNotFound.vue';
import Wharehouse from '../views/Wharehouse.vue';
import store from '../store/index';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/contacts',
    name: 'Contacts',
    component: Contacts,
  },
  {
    path: '/delivery',
    name: 'Delivery',
    component: Delivery,
  },
  {
    path: '/menu/:category',
    name: 'Menu',
    component: Menu,
  },
  {
    path: '/menu/:category/:id',
    name: 'dish',
    component: dish,
  },
  {
    path: '/private/order-desk',
    name: 'PrivateOrderDesk',
    component: () => import('../views/PrivOrderDesk.vue'),
  },
  {
    path: '/private/wharehouse',
    name: 'Wharehouse',
    component: Wharehouse,
  },
  {
    path: '*',
    name: 'PageNotFound',
    component: PageNotFound,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const isPrivateRoute = to.name === 'PrivateOrderDesk' || to.name === 'Wharehouse';
  store.dispatch('SET_PRIVATE_MODE', { enable: isPrivateRoute });
  next();
});

export default router;
