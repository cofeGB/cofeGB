<template>
  <v-navigation-drawer
    app
    dark
    right
    class="order"
    v-model="drawer"
    :width="mini ? 250 : 350"
    :class="{ mini: mini }"
  >
    <CofDeliveryHeader :basket="basket" :tooltip-disabled="tooltipDisabled" />
    <CofDeliveryShoppingList
      :basket="basket"
      :mini="mini"
      :drawer="drawer"
      :tooltip-disabled="tooltipDisabled"
    />
    <CofDeliveryFormOrder :tooltip-disabled="tooltipDisabled" />
  </v-navigation-drawer>
</template>

<script>
import { eventBus } from '@/main';
import CofDeliveryHeader from './CofDeliveryHeader';
import CofDeliveryShoppingList from './CofDeliveryShoppingList';
import CofDeliveryFormOrder from './CofDeliveryFormOrder';

export default {
  components: {
    CofDeliveryHeader,
    CofDeliveryShoppingList,
    CofDeliveryFormOrder,
  },
  data() {
    return {
      drawer: false,
      mini: false,
      tooltipDisabled: false,
      window: {
        width: 0,
      },
    };
  },
  computed: {
    basket() {
      return this.$store.state.demobasket;
    },
  },
  created() {
    this.list = this.basket.dish;
    eventBus.$on('openOrder', () => {
      this.drawer = !this.drawer;
    });
    this.handleResize();
    window.addEventListener('resize', this.handleResize);
  },
  beforeDestroy() {
    eventBus.$off('openOrder');
    window.removeEventListener('resize', this.handleResize);
  },
  methods: {
    handleResize() {
      this.window.width = window.innerWidth;
      this.mini = true;
      if (window.innerWidth > 1400) {
        this.drawer = true;
        this.mini = false;
      }
      if (window.innerWidth < 1010) {
        this.tooltipDisabled = true;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.order {
  background: rgba(48, 24, 13, 0.5) !important;
  .mini & {
    background: rgba(48, 24, 13, 0.9);
  }
}
</style>
