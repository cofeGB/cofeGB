<template>
  <tooltip
    :content="QUICK_ORDER.length ? 'У вас есть заказ' : 'Корзина пуста'"
    :disabled="disabled"
    :class="classes"
  >
    <v-btn icon dark color="primary" outlined @click="$emit('openOrder')">
      <v-badge :content="orderList" :value="orderList" color="primary" overlap>
        <v-icon fab> mdi-cart-outline </v-icon>
      </v-badge>
    </v-btn>
  </tooltip>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'delivery-header',
  props: {
    tooltipDisabled: {
      type: Boolean,
      default: false,
    },
    classes: {
      type: String,
      default: '',
    },
  },
  computed: {
    ...mapGetters(['QUICK_ORDER']),
    disabled() {
      return this.tooltipDisabled;
    },
    orderList() {
      return this.$store.state.quickOrder.length;
    },
  },
};
</script>

<style lang="scss" scoped>
.order-logo {
  color: #fff !important;
}
</style>
