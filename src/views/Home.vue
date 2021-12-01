<template>
  <div>
    <v-app-bar-nav-icon @click.stop="showNavMenu = !showNavMenu"></v-app-bar-nav-icon>
    <CofNavMenu v-model="showNavMenu" />
    {{ FOOD_CONSTRUCTOR }}
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'Home',
  data: () => ({
    showNavMenu: false,
  }),
  computed: {
    ...mapGetters(['FOOD_CONSTRUCTOR']),
  },
  components: {
    CofNavMenu: () => import('../components/CofNavMenu.vue'),
  },
};
</script>
