import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Delivery from '../views/Delivery.vue';
import Menu from '../views/Menu.vue';
import About from '../views/About.vue';
import Contacts from '../views/Contacts.vue';
import dish from '../components/dish.vue';
import PageNotFound from '../views/PageNotFound.vue';

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

export default router;
