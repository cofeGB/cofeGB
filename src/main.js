import Vue from 'vue';
import axios from 'axios';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import components from '@/components';

Vue.config.productionTip = false;

export const eventBus = new Vue();
Vue.prototype.$axios = axios;
Vue.use(components);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
}).$mount('#app');
