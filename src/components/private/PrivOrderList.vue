<template>
  <div>
    <PrivOrderCard v-for="order in orders" :key="order.id" :order="order" />
  </div>
</template>

<script>
export default {
  name: 'PrivOrderList',
  components: {
    PrivOrderCard: () => import('./PrivOrderCard.vue'),
  },
  props: {
    orderType: {
      type: String,
      required: true,
    },
  },
  computed: {
    orders() {
      switch (this.orderType) {
        case 'cooking':
          return this.$store.getters.COOKING_ORDERS;
        case 'closed':
          return this.$store.getters.CLOSED_ORDERS;
        case 'pending':
        default:
          return this.$store.getters.PENDING_ORDERS;
      }
    },
  },
};
</script>
