<template>
  <div>
    <v-navigation-drawer v-model="value" left absolute>
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
 */
export default {
  name: 'CofNavMenu',
  props: {
    value: Boolean,
  },
  data: () => ({
    show: false,
    group: null,
  }),
  methods: {
    foodMenuClick(id) {
      this.$store.dispatch('SET_FOOD_NAV_MENU_SELECTION', { id });
      console.log(id);
    },
  },
  watch: {
    group() {
      this.show = false;
    },
    value() {
      this.show = this.value;
    },
    show() {
      if (this.show != this.value) {
        this.$emit('input', this.show);
      }
    },
  },
  computed: {
    foodNavMenu() {
      return this.$store.getters.FOOD_NAV_MENU;
    },
  },
};
</script>

<style lang="scss" scoped></style>
