<template>
  <div class="header">
    <v-btn
      v-if="vis"
      @click="$store.dispatch('SHOW_NAV_MENU', !$store.state.navMenuVisible)"
      color="primary"
      class="header--btn"
    >
      Меню
    </v-btn>
    <v-img
      class="d-inline-block text-center bordered header--img"
      height="90"
      width="100"
      contain
      :src="require('../assets/img/logo.png')"
    ></v-img>
    <CofDeliveryHeader
      :tooltip-disabled="tooltipDisabled"
      @openOrder="openOrder"
      class="header--cart"
    />
  </div>
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
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  // grid-template-columns: repeat(3, 1fr);
  width: 100%;
  // &--btn {
  //   color: #000 !important;
  //   grid-column: 1 / 2;
  // }
  // &--img {
  //   grid-column: 2 / 3;
  //   justify-self: center;
  // }
  // &--cart {
  //   grid-row: 1;
  //   grid-column: 3 / 4;
  //   justify-self: end;
  // }
}
</style>
