<template>
  <div>
    <v-navigation-drawer v-model="show" left permanent>
      <v-list nav dense>
        <v-list-item-group v-model="group" active-class="deep-purple--text text--accent-4">
          <v-list-item v-for="item in foodNavMenu" :key="item.id" @click="foodMenuClick(item.id)">
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>

          <v-list-item disabled>
            <v-list-item-title>Доставка и оплата</v-list-item-title>
          </v-list-item>
          <v-list-item disabled>
            <v-list-item-title>Контакты</v-list-item-title>
          </v-list-item>
          <v-list-item disabled>
            <v-list-item-title>Акции</v-list-item-title>
          </v-list-item>
          <v-list-item disabled>
            <v-list-item-title>О нас</v-list-item-title>
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
  },
  watch: {
    group() {
      this.show = false;
    },
    navMenuVisible(val) {
      this.show = val;
    },
  },
};
</script>

<style lang="scss" scoped></style>
