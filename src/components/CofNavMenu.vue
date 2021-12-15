<template>
  <div>
    <v-navigation-drawer class="menu" v-model="show" app left :permanent="permanent" width="360">
      <div class="menu__logo">
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 9.966C11.4696 9.966 10.9609 10.1767 10.5858 10.5518C10.2107 10.9269 10 11.4356 10 11.966C10 12.4964 10.2107 13.0051 10.5858 13.3802C10.9609 13.7553 11.4696 13.966 12 13.966H28C28.5304 13.966 29.0391 13.7553 29.4142 13.3802C29.7893 13.0051 30 12.4964 30 11.966C30 11.4356 29.7893 10.9269 29.4142 10.5518C29.0391 10.1767 28.5304 9.966 28 9.966H12Z"
            fill="white"
          />
          <path
            d="M10 20C10 19.4696 10.2107 18.9609 10.5858 18.5858C10.9609 18.2107 11.4696 18 12 18H28C28.5304 18 29.0391 18.2107 29.4142 18.5858C29.7893 18.9609 30 19.4696 30 20C30 20.5304 29.7893 21.0391 29.4142 21.4142C29.0391 21.7893 28.5304 22 28 22H12C11.4696 22 10.9609 21.7893 10.5858 21.4142C10.2107 21.0391 10 20.5304 10 20Z"
            fill="white"
          />
          <path
            d="M12 26.034C11.4696 26.034 10.9609 26.2447 10.5858 26.6198C10.2107 26.9949 10 27.5036 10 28.034C10 28.5644 10.2107 29.0731 10.5858 29.4482C10.9609 29.8233 11.4696 30.034 12 30.034H28C28.5304 30.034 29.0391 29.8233 29.4142 29.4482C29.7893 29.0731 30 28.5644 30 28.034C30 27.5036 29.7893 26.9949 29.4142 26.6198C29.0391 26.2447 28.5304 26.034 28 26.034H12Z"
            fill="white"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M40 20C40 31.046 31.046 40 20 40C8.954 40 0 31.046 0 20C0 8.954 8.954 0 20 0C31.046 0 40 8.954 40 20ZM36 20C36 24.2435 34.3143 28.3131 31.3137 31.3137C28.3131 34.3143 24.2435 36 20 36C15.7565 36 11.6869 34.3143 8.68629 31.3137C5.68571 28.3131 4 24.2435 4 20C4 15.7565 5.68571 11.6869 8.68629 8.68629C11.6869 5.68571 15.7565 4 20 4C24.2435 4 28.3131 5.68571 31.3137 8.68629C34.3143 11.6869 36 15.7565 36 20Z"
            fill="white"
          />
        </svg>
      </div>
      <div class="menu__container d-flex flex-column">
        <v-list nav dense>
          <v-list-item class="menu__title">
            <v-list-item-content>
              <v-list-item-title>
                <b class="menu__title_text">Меню</b>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <router-link
            class="menu__item_link"
            v-for="item in foodNavMenu"
            :key="item.path"
            :to="{ path: item.path }"
          >
            <v-list-item :class="{ menu__item_active: $route.path == item.path }">
              <v-list-item-title
                ><b class="menu__item_text">{{ item.title }}</b>
              </v-list-item-title>
            </v-list-item>
          </router-link>
        </v-list>
        <v-list nav dense class="mt-auto">
          <router-link
            class="menu__item_link"
            v-for="(item, index) in infoNavMenu"
            :key="index"
            :to="{ path: item.path }"
          >
            <v-list-item :class="{ menu__item_active: $route.path == item.path }">
              <v-list-item-title
                ><b class="menu__item_text">{{ item.title }}</b>
              </v-list-item-title>
            </v-list-item>
          </router-link>
        </v-list>
      </div>
    </v-navigation-drawer>
  </div>
</template>

<script>
/**
 * Меню использует роуты.
 * Для еды '/menu-by-category/:id'.
 * Для других страниц из INFO_NAV_MENU[n].route.
 */
import store from '../store/index';

const INFO_NAV_MENU = [
  {
    title: 'Доставка и оплата',
    path: '/delivery',
  },
  {
    title: 'Контакты',
    path: '/contacts',
  },
  {
    title: 'Акции',
    path: '/promo',
  },
  {
    title: 'О нас',
    path: '/about',
  },
];

export default {
  name: 'CofNavMenu',
  data: () => ({
    show: store.state.navMenuVisible,
    group: null,
    infoNavMenu: INFO_NAV_MENU,
  }),
  methods: {},
  computed: {
    foodNavMenu() {
      return store.getters.FOOD_NAV_MENU.map(item => ({
        title: item.title,
        path: `/menu/${item.query}`,
      }));
    },
    navMenuVisible() {
      return store.getters.NAV_MENU_VISIBLE;
    },
    permanent() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return false;
        case 'sm':
          return false;
        case 'md':
          return false;
        case 'lg':
          return true;
        case 'xl':
          return true;
        default:
          return true;
      }
    },
    theme() {
      return this.$vuetify.theme.dark ? 'dark' : 'light';
    },
  },
  watch: {
    group() {
      this.show = false;
    },
    navMenuVisible(val) {
      // console.log('S2C');
      if (this.show != val) {
        this.show = val;
      }
    },
    permanent(val) {
      store.dispatch('SHOW_NAV_MENU', val);
    },
    show(val) {
      // console.log('C2S');
      if (!val) {
        if (store.getters.NAV_MENU_VISIBLE) {
          store.dispatch('SHOW_NAV_MENU', false);
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Open+Sans&family=Playfair+Display:wght@700;900&display=swap');

.menu {
  padding-left: 80px;
  padding-top: 25px;
  background: rgba(48, 24, 13, 0.5);
  &__container {
    height: 100%;
  }
  &__logo {
    position: absolute;
    left: 24px;
    top: 57px;
  }
  &__title {
    display: block;
    flex: none;
  }
  &__title_text {
    font-family: 'Playfair Display';
    font-style: normal;
    font-weight: bold;
    font-size: 48px;
    line-height: 64px;
    color: #ffffff;
  }
  &__item_link {
    text-decoration: none;
  }
  &__item_text {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 33px;
    color: #ffffff;

    &:hover {
      color: rgba(37, 220, 209, 1);
    }
  }
  .v-list-item {
    padding-top: 12px;
    padding-right: 8px;
    padding-bottom: 12px;
    padding-left: 8px;
  }
  &__item_active {
    border-radius: 0;
    border-top: 1px solid rgba(255, 255, 255, 1);
    border-bottom: 1px solid rgba(255, 255, 255, 1);
    background: none;
    padding-top: 24px !important;
    padding-bottom: 24px !important;
  }
  .v-list--nav {
    padding: 0;
  }
}
</style>
