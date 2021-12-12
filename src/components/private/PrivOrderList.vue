<template>
  <v-card
    class="d-flex flex-row align-content-start justify-start flex-wrap"
    color="grey lighten-2"
    flat
    tile
  >
    <PrivOrderCard
      class="flex-grow-1 ma-8px"
      v-for="order in orders"
      :key="order.id"
      :order="order"
    />
  </v-card>
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
