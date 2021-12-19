<template>
  <div>
    <h1 class="brandName">{{ globalName }}</h1>
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
    globalName() {
      return this.$store.state.globalConst.brandName;
    },
  },
};
</script>
