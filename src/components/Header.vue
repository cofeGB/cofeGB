<template>
  <v-app-bar app dark class="header">
    <v-btn text @click="openNavMenu" color="primary" class="header--btn">
      <svg
        width="30"
        height="30"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 9.966C11.4696 9.966 10.9609 10.1767 10.5858 10.5518C10.2107 10.9269 10 11.4356 10 11.966C10 12.4964 10.2107 13.0051 10.5858 13.3802C10.9609 13.7553 11.4696 13.966 12 13.966H28C28.5304 13.966 29.0391 13.7553 29.4142 13.3802C29.7893 13.0051 30 12.4964 30 11.966C30 11.4356 29.7893 10.9269 29.4142 10.5518C29.0391 10.1767 28.5304 9.966 28 9.966H12Z"
          fill="#25DCD1"
        />
        <path
          d="M10 20C10 19.4696 10.2107 18.9609 10.5858 18.5858C10.9609 18.2107 11.4696 18 12 18H28C28.5304 18 29.0391 18.2107 29.4142 18.5858C29.7893 18.9609 30 19.4696 30 20C30 20.5304 29.7893 21.0391 29.4142 21.4142C29.0391 21.7893 28.5304 22 28 22H12C11.4696 22 10.9609 21.7893 10.5858 21.4142C10.2107 21.0391 10 20.5304 10 20Z"
          fill="#25DCD1"
        />
        <path
          d="M12 26.034C11.4696 26.034 10.9609 26.2447 10.5858 26.6198C10.2107 26.9949 10 27.5036 10 28.034C10 28.5644 10.2107 29.0731 10.5858 29.4482C10.9609 29.8233 11.4696 30.034 12 30.034H28C28.5304 30.034 29.0391 29.8233 29.4142 29.4482C29.7893 29.0731 30 28.5644 30 28.034C30 27.5036 29.7893 26.9949 29.4142 26.6198C29.0391 26.2447 28.5304 26.034 28 26.034H12Z"
          fill="#25DCD1"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M40 20C40 31.046 31.046 40 20 40C8.954 40 0 31.046 0 20C0 8.954 8.954 0 20 0C31.046 0 40 8.954 40 20ZM36 20C36 24.2435 34.3143 28.3131 31.3137 31.3137C28.3131 34.3143 24.2435 36 20 36C15.7565 36 11.6869 34.3143 8.68629 31.3137C5.68571 28.3131 4 24.2435 4 20C4 15.7565 5.68571 11.6869 8.68629 8.68629C11.6869 5.68571 15.7565 4 20 4C24.2435 4 28.3131 5.68571 31.3137 8.68629C34.3143 11.6869 36 15.7565 36 20Z"
          fill="#25DCD1"
        />
      </svg>
      <span class="ml-2"> Меню </span>
    </v-btn>

    <v-spacer></v-spacer>
    <img class="header--img" contain :src="require('../assets/img/logo.png')" />
    <v-spacer></v-spacer>
    <CofDeliveryHeader
      :tooltip-disabled="tooltipDisabled"
      @openOrder="openOrder"
      :classes="'tooltip-width'"
      class="header--cart"
    />
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
      if (window.innerWidth < 1010) {
        this.tooltipDisabled = true;
      }
    },
    openOrder() {
      eventBus.$emit('openOrder');
    },
    openNavMenu() {
      eventBus.$emit('openNavMenu');
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  background: rgba(5, 4, 3, 0.863) !important;
  &--img {
    height: 70px;
    .v-image {
      position: static !important;
    }
  }
  .tooltip-width {
    width: 70px;
  }
}
</style>
