<template>
  <v-app-bar app flat class="header">
    <v-btn
      v-if="vis"
      @click="$store.dispatch('SHOW_NAV_MENU', !$store.state.navMenuVisible)"
      color="primary"
      class="header-btn"
    >
      Меню
    </v-btn>

    <v-spacer></v-spacer>

    <CofDeliveryHeader :tooltip-disabled="tooltipDisabled" @openOrder="openOrder" />
  </v-app-bar>
</template>

<script>
import { eventBus } from '@/main';
import CofDeliveryHeader from './CofDelivery/CofDeliveryHeader';
export default {
  name: 'Header',
  components: {
    CofDeliveryHeader,
  },
  data() {
    return {
      vis: null,
      tooltipDisabled: null,
    };
  },
  created() {
    this.handleResize();
    window.addEventListener('resize', this.handleResize);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize);
  },
  methods: {
    handleResize() {
      this.vis = true;
      if (window.innerWidth > 1800) {
        this.vis = false;
      }
      if (window.innerWidth < 1010) {
        this.tooltipDisabled = true;
      }
    },
    openOrder() {
      eventBus.$emit('openOrder');
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  background: none !important;
  &-btn {
    color: #000 !important;
  }
}
</style>
