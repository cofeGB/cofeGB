<template>
  <div>
    <CofHomeBaner />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import CofHomeBaner from '@/components/Baners/CofHomeBaner.vue';
export default {
  name: 'Home',
  components: { CofHomeBaner },
  data: () => ({
    showNavMenu: false,
  }),
  computed: {
    ...mapGetters(['FOOD_CONSTRUCTOR']),
  },
};
</script>
