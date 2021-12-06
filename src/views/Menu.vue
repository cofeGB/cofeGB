<template>
  <div class="menu">
    <h1 class="brandName">СoffeeBonk</h1>
    <div class="hr"></div>
    <h3 class="menuTitle">{{ category }}</h3>
    <menuList :list="MENU" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import menuList from '../components/Menu/menuList.vue';
export default {
  name: 'Menu',
  components: {
    menuList,
  },
  computed: {
    ...mapGetters(['MENU']), // , 'CATEGORIES']),
    // menuSection() {
    //   return this.MENU.filter(item => item.category == this.category);
    // },
  },
  data() {
    return {
      category: this.$route.params.category,
      nameCategory: this.MENU, //.find(item => item.query == this.category),
      // nameCategory: this.CATEGORIES.find(item => item.query == this.category),
    };
  },
  methods: {
    ...mapActions(['GET_MENU']),
  },
  created() {
    this.GET_MENU(this.$route.params.category);
  },
};
</script>

<style lang="scss" scoped>
.brandName {
  font-family: Playfair Display;
  font-weight: bold;
  font-size: 64px;
  line-height: 85px;
  color: white;
  text-align: center;
  @media (max-width: 450px) {
    font-size: 54px;
  }
}
.menu {
  background-size: cover;
}
.menuTitle {
  color: white;
  font-family: Open Sans;
  font-weight: 400;
  font-size: 36px;
  line-height: 49px;
  text-transform: uppercase;
  text-align: center;
}
</style>
