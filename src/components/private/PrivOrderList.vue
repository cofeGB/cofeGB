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
      v-for="privOrder in privOrders"
      :key="privOrder.id"
      :privOrder="privOrder"
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
      if (!evt) {
        return;
      }
      const dragData = JSON.parse(evt.dataTransfer.getData('application/json') || '');
      if (dragData.objType != 'orderId') {
        return;
      }
      this.$store.dispatch('SET_ORDER_STATE', { orderId: dragData.payload, orderState: 'cooking' });
    },
  },
  computed: {
    privOrders() {
      let privOrders = [];
      switch (this.orderType) {
        case 'cooking':
          privOrders = Array.from(this.$store.getters['priv/COOKING_ORDERS']);
          break;
        case 'pending':
        default:
          privOrders = Array.from(this.$store.getters['priv/PENDING_ORDERS']);
          break;
      }
      privOrders.sort((a, b) => a.order.timeTo.getTime() - b.order.timeTo.getTime());
      return privOrders;
    },
  },
};
</script>
