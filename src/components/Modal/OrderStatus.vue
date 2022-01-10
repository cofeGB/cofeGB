<template>
  <Modal :activator="orderStatus">
    <template #content>
      <div class="overlay" @click.self="close()">
        <div class="wrapper">
          <div class="popup__content">
            <h3 class="mb-4">Узнать статус заказа</h3>
            <p>Введите номер телефона, на который был оформлен заказ</p>
            <div class="popup__content_block">
              <v-form ref="form" v-model="valid" class="h-100" lazy-validation>
                <v-text-field
                  v-model="userPhone"
                  class="my-2"
                  loading="false"
                  label="Ваш номер телефона"
                  hide-details="auto"
                  clearable
                  outlined
                  dense
                  light
                  :rules="rules"
                ></v-text-field>
              </v-form>
              <button @click="findOrder" class="ok_btn">Найти</button>
            </div>
          </div>
          <div class="mt-4 status" v-for="{ order, index } in getList" :key="index">
            <h3>Заказ № {{ order.orderNumber }}</h3>
            <div>На сумму {{ order.total }} &#x20bd;</div>
            <div>
              Оформлен {{ new Date(order.timeTo).getDate() }} /
              {{ new Date(order.timeTo).getMonth() + 1 }} /
              {{ new Date(order.timeTo).getFullYear() }}
              в
              {{ new Date(order.timeTo).getHours() }} : {{ new Date(order.timeTo).getMinutes() }}
            </div>
            <h3>{{ status(order.status) }}</h3>
          </div>
          <div v-if="notFound">Ничего не найдено</div>
          <div class="popup__footer mt-4">
            <button @click="close()" class="ok_btn">Ok</button>
          </div>
        </div>
      </div>
    </template>
  </Modal>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  name: 'OrderStatus',
  data() {
    return {
      valid: true,
      userPhone: null,
      rules: [
        value => !!value || 'Необходимо заполнить.',
        value => (value && value.length === 11) || 'Необходимо заполнить.',
      ],
    };
  },
  computed: {
    ...mapGetters(['MODAL_NAME', 'USER_ORDERS']),
    disabled() {
      return this.tooltipDisabled;
    },
    orderStatus() {
      return this.MODAL_NAME === 'orderStatus';
    },
    getList() {
      return this.USER_ORDERS;
    },
    notFound() {
      let list = this.USER_ORDERS;
      if (!list || list.length !== 0) {
        return false;
      }
      return true;
    },
  },
  methods: {
    ...mapActions(['CLOSE_MODAL', 'CLEAN_USER_ORDERS', 'GET_ORDER_BY_PHONE']),
    findOrder() {
      this.$store.dispatch('GET_ORDERS_BY_PHONE', this.userPhone);
    },
    status(str) {
      switch (str) {
        case 'pending':
          return 'В ожидании';
        case 'cooking':
          return 'Готовится';
        case 'ready':
          return 'Готов';
        case 'canceled':
          return 'Отменен';
        case 'paused':
          return 'Приостановлен';
        case 'closed':
          return 'Заказ выдан';
        default:
          return 'Не найдено';
      }
    },
    close() {
      this.userPhone = '';
      this.CLOSE_MODAL();
      this.CLEAN_USER_ORDERS();
    },
  },
};
</script>
<style lang="scss" scoped>
.overlay {
  position: absolute;
  height: 100vh;
  width: 100%;
  background-color: rgba(170, 170, 170, 0.5);
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.wrapper {
  position: absolute;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 300px;
  width: 600px;
  background-color: white;
  padding: 32px;
}
.popup__content {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.popup__content_block {
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: baseline;
}
.ok_btn {
  background-color: #25dcd1;
  border: 1px solid #23c9be;
  width: 120px;
  height: 40px;
  transition: background-color, 0.5s;
  &:hover {
    background-color: #1bc2b7;
  }
}
.status {
  font-size: 22px;
}
</style>
