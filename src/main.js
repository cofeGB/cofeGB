import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';

import tooltip from '@/components/tooltip.vue';

Vue.config.productionTip = false;

export const eventBus = new Vue();
Vue.component('tooltip', tooltip);
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
}).$mount('#app');
