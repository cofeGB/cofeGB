<template>
  <v-app-bar app flat class="header" clipped-right clipped-left>
    <v-btn
      v-if="vis"
      @click="$store.dispatch('SHOW_NAV_MENU', !$store.state.navMenuVisible)"
      color="primary"
      class="header-btn"
    >
      Меню
    </v-btn>

    <v-spacer></v-spacer>
    <v-img
      class="d-inline-block text-center bordered"
      height="90"
      width="100"
      contain
      :src="require('../assets/img/logo.png')"
    ></v-img>
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
      if (window.innerWidth > 1265) {
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
  background: rgba(48, 24, 13, 0.5) !important;
  &-btn {
    color: #000 !important;
  }
}
</style>
