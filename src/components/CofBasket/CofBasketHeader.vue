<template>
  <v-toolbar dark color="secondery">
    <div>
      <div class="d-flex align-center">
        <v-icon class="mr-2 my-1">mdi-food-fork-drink</v-icon>
        <span>Статус заказа:</span>
        <span v-if="order.length" class="ml-2" style="color: red"> ждет оформления </span>
      </div>
      <div class="d-flex align-center">
        <v-icon class="mr-2 my-1">mdi-clock-alert-outline</v-icon>
        <span>Предварительная оценка времени:</span>
        <span v-if="order.length" class="ml-2" style="color: red">1 ч.</span>
      </div>
    </div>
    <v-spacer></v-spacer>
    <v-btn icon dark @click="CLOSE_MODAL()">
      <v-icon>mdi-close</v-icon>
    </v-btn>
  </v-toolbar>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  props: {
    order: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    ...mapActions(['CLOSE_MODAL']),
  },
};
</script>

<style lang="scss" scoped>
.log {
  @media (max-width: 760px) {
    display: none;
  }
}
</style>
