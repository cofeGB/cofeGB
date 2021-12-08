<template>
  <div class="menu">
    <h1 class="brandName">СoffeeBonk</h1>
    <div class="hr"></div>
    <h3 v-if="category" class="menuTitle">{{ category.title }}</h3>
    <v-progress-circular
      v-if="showPreloader"
      :size="70"
      :width="7"
      color="white"
      indeterminate
    ></v-progress-circular>
    <menuList v-else :list="MENU" />
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
  data() {
    return {
      showPreloader: true,
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
    if (this.MENU.length == 0) {
      setTimeout(() => {
        this.showPreloader = false;
      }, 2000);
    }
  },
};
</script>

<style lang="scss" scoped>
.v-progress-circular {
  margin: 1rem;
}
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
