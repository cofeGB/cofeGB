<template>
  <div>
    <h1 class="brandName">{{ GLOBAL_CONST.brandName }}</h1>
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
    ...mapGetters(['FOOD_CONSTRUCTOR', 'GLOBAL_CONST']),
  },
};
</script>
