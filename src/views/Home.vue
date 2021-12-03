<template>
  <div>
    <CofNavMenu />
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
