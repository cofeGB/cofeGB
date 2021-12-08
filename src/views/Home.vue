<template>
  <div></div>
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
};
</script>
