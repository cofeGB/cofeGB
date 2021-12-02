<template>
  <div class="menu">
    <h1 class="brandName">СoffeeBonk</h1>
    <div class="hr"></div>
    <h3 class="menuTitle">Закуски</h3>
    <menuList :list="menuSection" />
    <h3 class="menuTitle">Напитки</h3>
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
    menuSection() {
      return this.MENU[this.nameSection];
    },
    barMenuSection() {
      return this.BAR_MENU[this.nameBarSection];
    },
  },
  data() {
    return {
      nameSection: 'sandwich',
      nameBarSection: 'coffee',
    };
  },
};
</script>

<style lang="sass" scoped>
.brandName
  font-family: Playfair Display
  font-weight: bold
  font-size: 64px
  line-height: 85px
  color: white
  text-align: center
.menu
  background-size: cover
  background-image: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url('../assets/img/backgroundImage.png')
.menuTitle
  color: white
  font-family: Open Sans
  font-weight: 400
  font-size: 36px
  line-height: 49px
  text-transform: uppercase
  text-align: center
</style>
