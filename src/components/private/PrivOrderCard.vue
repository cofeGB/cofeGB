<template>
  <v-card
    outlined
    class="d-flex flex-column align-content-start justify-start"
    min-width="228px"
    max-width="228px"
    style="border: 1px solid black"
    draggable
    @dragstart="startDrag($event, privOrder)"
  >
    <v-card-actions class="pa-0">
      <v-card-title class="pa-2"> Заказ №{{ privOrder.order.orderNumber }} </v-card-title>
      <v-spacer></v-spacer>

      <v-menu v-model="showContextMenu" absolute offset-y style="max-width: 600px">
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on"
            ><v-icon>{{ mdiDotsVerticalCircleOutline }}</v-icon></v-btn
          >
        </template>

        <v-list>
          <v-list-item
            v-for="(item, index) in contextMenuItems"
            :key="index"
            v-on="item.action ? { click: item.action } : {}"
          >
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-card-actions>
    <v-divider></v-divider>
    <v-data-table
      :items="privOrder.order.list"
      :headers="headers"
      :items-per-page="-1"
      class="elevation-1"
      hide-default-footer
    ></v-data-table>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn v-if="privOrder.order.status === 'cooking'" text outlined @click="onClickClose">
        Закрыть
      </v-btn>
    </v-card-actions>
    <div class="d-flex flex-column justify-end flex-grow-1">
      <v-divider></v-divider>
      <div class="d-flex">
        <v-card-text align="left" class="pa-2"> Время заказа </v-card-text>
        <v-card-text align="right" class="pa-2">
          {{ privOrder.order.timeTo.toLocaleTimeString('ru-RU') }}
        </v-card-text>
      </div>
    </div>
  </v-card>
</template>

<script>
/// <reference path="../../typedefs.js" />
import { mdiDotsVerticalCircleOutline } from '@mdi/js';

export default {
  name: 'PrivOrderCard',
  props: {
    privOrder: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      headers: [
        {
          text: 'Блюдо',
          align: 'start',
          sortable: false,
          value: 'title',
        },
        { text: 'Кол-во', align: 'end', value: 'quantity' },
      ],
      mdiDotsVerticalCircleOutline: mdiDotsVerticalCircleOutline,
      showContextMenu: false,
      contextMenuItems: [
        { title: 'Интернет-заказ', action: undefined }, //TODO show order creator
        {
          title: 'Отказ гостя',
          action: () =>
            this.setOrderStatus({
              orderGuid: this.privOrder.order.guid,
              newStatus: 'canceled',
              initiatorCategory: 'client',
              initiator: null, //TODO
            }),
        },
        {
          title: 'Ошибка официанта',
          action: () =>
            this.setOrderStatus({
              orderGuid: this.privOrder.order.guid,
              newStatus: 'canceled',
              initiatorCategory: 'employee',
              initiator: null, //TODO
            }),
        },
      ],
    };
  },
  methods: {
    onClickClose() {
      this.$store.dispatch('priv/SET_ORDER_STATUS', {
        orderGuid: this.privOrder.order.guid,
        newStatus: 'closed',
        initiatorCategory: 'employee',
        initiator: null, //TODO
      });
    },
    startDrag(evt, privOrder) {
      // console.log('startDrag');
      evt.dataTransfer.dropEffect = 'move';
      evt.dataTransfer.effectAllowed = 'move';
      evt.dataTransfer.setData(
        'application/json',
        JSON.stringify({ objType: 'orderId', payload: privOrder.order.guid })
      );
    },
    /**
     * Dispatch SET_ORDER_STATUS action
     * @param {UpdateOrderStatus} updateOrderStatus
     */
    setOrderStatus(updateOrderStatus) {
      this.$store.dispatch('priv/SET_ORDER_STATUS', updateOrderStatus);
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
