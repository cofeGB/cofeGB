<template>
  <v-card
    class="d-flex flex-row align-content-start justify-left flex-wrap fill-height"
    color="grey lighten-2"
    flat
    tile
    @drop="dragDrop"
    @dragenter.prevent
    @dragover.prevent
  >
    <PrivOrderCard
      class="flex-grow-1 ma-4"
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
  methods: {
    dragDrop(evt) {
      console.log('dragDrop', evt);
      // evt.dataTransfer.dropEffect = 'move';
      // evt.dataTransfer.effectAllowed = 'move';
      // evt.dataTransfer.setData('orderId', order.id);
    },
  },
  computed: {
    orders() {
      let orders = [];
      switch (this.orderType) {
        case 'cooking':
          orders = Array.from(this.$store.getters.COOKING_ORDERS);
          break;
        case 'closed':
          orders = Array.from(this.$store.getters.CLOSED_ORDERS);
          break;
        case 'pending':
        default:
          orders = Array.from(this.$store.getters.PENDING_ORDERS);
          break;
      }
      orders.sort((a, b) => a.creationDate.getTime() - b.creationDate.getTime());
      return orders;
    },
  },
};
</script>
