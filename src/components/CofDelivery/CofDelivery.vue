<template>
  <v-navigation-drawer
    app
    dark
    right
    floating
    clipped
    temporary
    class="order"
    v-model="drawer"
    :width="mini ? 300 : 350"
    :class="{ mini: mini }"
  >
    <CofDeliveryShoppingList
      v-if="QUICK_ORDER"
      :mini="mini"
      :drawer="drawer"
      :tooltip-disabled="tooltipDisabled"
    />
    <CofDeliveryFormOrder :tooltip-disabled="tooltipDisabled" />
  </v-navigation-drawer>
</template>

<script>
import { mapGetters } from 'vuex';
import { eventBus } from '@/main';
import CofDeliveryShoppingList from './CofDeliveryShoppingList';
import CofDeliveryFormOrder from './CofDeliveryFormOrder';

export default {
  components: {
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
    ...mapGetters(['QUICK_ORDER']),
  },
  created() {
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
      if (window.innerWidth > 1800) {
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
  height: 100%;
  background: rgba(86, 71, 66, 0.97) !important;
  padding-top: 10px;
  .mini & {
    background: rgba(48, 24, 13, 0.9);
  }
}
</style>
