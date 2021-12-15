<template>
  <v-card outlined shaped class="d-flex flex-column align-content-start justify-start">
    <v-card-title>
      {{ order.creationDate.toLocaleTimeString('ru-RU') }}
      {{ order.creationDate.toLocaleDateString('ru-RU') }}
      <br />
      №{{ order.id }} <br />
    </v-card-title>
    <v-treeview dense :items="dishes" class="flex-grow-1"></v-treeview>
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
    dishToTreeviewItem(dish, id) {
      return {
        id,
        name: dish.title,
      };
    },
  },
  computed: {
    dishes() {
      const items = [];
      for (let i = 0; i < this.order.dishList.length; i++) {
        items.push(this.dishToTreeviewItem(this.order.dishList[i], i + 1));
      }
      return items;
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
