<template>
  <div>
    <h3>Блюда</h3>
    <menuList :list="menuSection" />
    <h3>Напитки</h3>
    <menuList :list="barMenuSection" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import menuList from '../components/Menu/menuList.vue';
export default {
  name: 'Menu',
  components: {
    menuList,
  },
  computed: {
    ...mapGetters(['MENU', 'BAR_MENU']),
    menuSection: function () {
      return this.MENU[this.nameSection];
    },
    barMenuSection: function () {
      return this.BAR_MENU[this.nameBarSection];
    },
  },
  data() {
    return {
      nameSection: 'starters',
      nameBarSection: 'coffee',
    };
  },
};
</script>

<style lang="scss" scoped></style>
