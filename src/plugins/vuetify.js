import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: 'mdiSvg',
  },
  theme: {
    themes: {
      light: {
        primary: '#25DCD1',
        secondery: '#07948b',
      },
      darck: {
        primary: '#25DCD1',
        secondery: '#07948b',
      },
    },
  },
});
