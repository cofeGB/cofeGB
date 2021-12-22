<template>
  <v-system-bar window color="primary" class="status">
    <v-icon>mdi-food-fork-drink</v-icon>
    <span>Статус заказа:</span>
    <span v-if="order.length" class="ml-2" style="color: red"> Вы еще не оформили заказ </span>
    <v-spacer></v-spacer>
    <v-icon>mdi-clock-alert-outline</v-icon>
    <span>Предварительная оценка времени:</span>
    <span v-if="order.length" class="ml-2" style="color: red">1 ч.</span>
  </v-system-bar>
</template>

<script>
export default {
  props: {
    order: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss" scoped>
.status {
  @media (max-width: 760px) {
    display: none;
  }
}
</style>
