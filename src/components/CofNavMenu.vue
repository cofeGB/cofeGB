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
      <v-list nav dense class="d-flex flex-column" height="100%">
        <v-list-item class="menu__title">
          <v-list-item-content>
            <v-list-item-title>
              <b class="menu__title_text">Меню</b>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item-group v-model="group" active-class="deep-purple--text text--accent-4">
          <v-list-item v-for="item in foodNavMenu" :key="item.id" @click="foodMenuClick(item.id)">
            <v-list-item-title
              ><b class="menu__item_text">{{ item.title }}</b>
            </v-list-item-title>
          </v-list-item>
          <v-spacer></v-spacer>
        </v-list-item-group>
        <v-list-item-group class="mt-auto">
          <v-list-item disabled>
            <v-list-item-title><b class="menu__item_text">Доставка и оплата</b></v-list-item-title>
          </v-list-item>
          <v-list-item disabled>
            <v-list-item-title><b class="menu__item_text">Контакты</b></v-list-item-title>
          </v-list-item>
          <v-list-item disabled>
            <v-list-item-title><b class="menu__item_text">Акции</b></v-list-item-title>
          </v-list-item>
          <v-list-item disabled>
            <v-list-item-title><b class="menu__item_text">О нас</b></v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
/**
 * Навигационное меню состоит из двух частей: продуктовой и собственно
 * навигационной.
 * Наполнение продуктового меню происходит из геттера FOOD_NAV_MENU стора.
 * При клике по пункту продуктового меню в сторе вызывается экшен
 * SET_FOOD_NAV_MENU_SELECTION, устанавливающий в сторе значение
 * foodNavMenuSelection.
 * foodNavMenuSelection доступно чтением геттера FOOD_NAV_MENU_SELECTION.
 * Показ меню производится экшеном стора SHOW_NAV_MENU с аргументом типа Boolean.
 * Состояние отображения меню в state.navMenuVisible стора.
 * Временно меню зафиксировано и не прячется.
 */
import store from '../store/index';

export default {
  name: 'CofNavMenu',
  data: () => ({
    show: store.state.navMenuVisible,
    group: null,
  }),
  methods: {
    foodMenuClick(id) {
      store.dispatch('SET_FOOD_NAV_MENU_SELECTION', { id });
      // console.log(id);
    },
  },
  computed: {
    foodNavMenu() {
      return store.getters.FOOD_NAV_MENU;
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
      this.show = val;
    },
    permanent(val) {
      store.dispatch('SHOW_NAV_MENU', val);
    },
  },
};
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Open+Sans&family=Playfair+Display:wght@700;900&display=swap');

.menu {
  padding-left: 80px;
  padding-top: 36px;
  background: rgba(48, 24, 13, 0.5);
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
  &__item_text {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 33px;
    color: #ffffff;
  }
}

.v-list--nav {
  padding: 0;
}
</style>
