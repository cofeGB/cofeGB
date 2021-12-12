<template>
  <v-card outlined shaped>
    <v-card-title>
      {{ order.creationDateUTC }}
    </v-card-title>
    <v-card-subtitle>
      {{ order.id }}
    </v-card-subtitle>
    Детали заказа<br />
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn v-if="order.state === 'pending'" text outlined @click="onClickCook"> В работу </v-btn>
      <v-btn v-if="order.state === 'cooking'" text outlined @click="onClickClose"> Закрыть </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'PrivOrderCard',
  props: {
    order: {
      type: Object,
      required: true,
    },
  },
  methods: {
    onClickCook() {
      this.$store.dispatch('SET_ORDER_STATE', { order: this.order, orderState: 'cooking' });
    },
    onClickClose() {
      this.$store.dispatch('SET_ORDER_STATE', { order: this.order, orderState: 'closed' });
    },
  },
};
</script>

<style lang="scss" scoped>
.my-card {
  box-sizing: border-box;
  border: 1px solid red;
  background-color: #fff;
  margin: 8px;
}
</style>
