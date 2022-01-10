import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Delivery from '../views/Delivery.vue';
import Menu from '../views/Menu.vue';
import About from '@/views/About.vue';
import Contacts from '@/views/Contacts.vue';
import Stocks from '@/views/Stocks.vue';
import dish from '../components/CofDish/dish.vue';
import PageNotFound from '../views/PageNotFound.vue';
import Wharehouse from '../views/Wharehouse.vue';
import Stoplist from '../views/Stoplist.vue';
import AddingProduct from '../views/AddingProduct.vue';
import AddingDish from '../views/AddingDish.vue';
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
    path: '/stocks',
    name: 'Stocks',
    component: Stocks,
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
    path: '/private',
    redirect: '/private/order-desk',
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
    path: '/private/stoplist',
    name: 'Stoplist',
    component: Stoplist,
  },
  {
    path: '/private/newProduct',
    name: 'NewProduct',
    component: AddingProduct,
  },
  {
    path: '/private/newDish',
    name: 'NewDish',
    component: AddingDish,
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
  const isPrivateRoute = to.path.search(/private/) === -1 ? false : true;
  store.dispatch('SET_PRIVATE_MODE', { enable: isPrivateRoute });
  next();
});

export default router;
