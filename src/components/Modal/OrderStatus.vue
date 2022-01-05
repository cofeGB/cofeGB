<template>
  <Modal :activator="orderStatus">
    <template #content>
      <div class="overlay" @click.self="CLOSE_MODAL()">
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
          <div class="mt-4 status">{{ ORDER_STATUS() }}</div>
          <div class="popup__footer mt-4">
            <button @click="CLOSE_MODAL()" class="ok_btn">Ok</button>
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
        value => !!value || 'Необходио заполнить.',
        value => (value && value.length === 11) || 'Необходио заполнить.',
      ],
    };
  },
  computed: {
    ...mapActions(['GET_ORDER_BY_PHONE']),
    ...mapGetters(['MODAL_NAME']),
    disabled() {
      return this.tooltipDisabled;
    },
    orderStatus() {
      return this.MODAL_NAME === 'orderStatus';
    },
  },
  methods: {
    ...mapActions(['CLOSE_MODAL']),
    ...mapGetters(['ORDER_STATUS']),
    findOrder() {
      console.log('in findOrder modal window');
      this.$store.dispatch('GET_ORDER_BY_PHONE', this.userPhone);
    },
  },
  close() {
    this.CLOSE_MODAL();
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
