<template>
  <div class="menu">
    <!-- <h1 class="brandName">СoffeeBonk</h1> -->
    <h1 class="brandName">{{ globalName }}</h1>
    <div class="hr"></div>
    <h3 v-if="category" class="menuTitle">{{ category.title }}</h3>
    <div class="preloader" v-show="showPreloader">
      <v-progress-circular :size="70" :width="7" color="white" indeterminate></v-progress-circular>
    </div>
    <menuList v-show="!showPreloader" :list="MENU" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import menuList from '../components/Menu/menuList.vue';
import store from '../store/index';

export default {
  name: 'Menu',
  components: {
    menuList,
  },
  data() {
    return {
      showPreloader: true,
      globalName: store.state.globalConst.brandName,
    };
  },
  computed: {
    ...mapGetters(['MENU', 'CATEGORIES']),
    category() {
      return this.CATEGORIES.find(c => c.query == this.$route.params.category);
    },
  },
  methods: {
    ...mapActions(['GET_MENU', 'GET_CATEGORIES']),
  },
  created() {
    this.GET_MENU(this.$route.params.category);
  },
  mounted() {
    if (!this.MENU.length) {
      setTimeout(() => {
        this.showPreloader = false;
      }, 2000);
    } else {
      this.showPreloader = false;
    }
  },
};
</script>

<style lang="scss" scoped>
.preloader {
  display: flex;
  justify-content: center;
  height: 300px;
  align-items: center;
}
.v-progress-circular {
  margin: 1rem;
}
// .brandName {
//   font-family: Playfair Display;
//   font-weight: bold;
//   font-size: 64px;
//   line-height: 85px;
//   color: white;
//   text-align: center;
//   @media (max-width: 450px) {
//     font-size: 54px;
//   }
// }
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
