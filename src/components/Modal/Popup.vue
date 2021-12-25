<template>
  <div>
    <Modal :activator="orderCreated" @close="close">
      <template #content>
        <div class="overlay">
          <div class="wrapper">
            <div class="popup__content">
              <h3>Ваш заказ оформлен!</h3>
              <div v-for="(el, i) in QUICK_ORDER" :key="i" :value="el" class="popup__content_block">
                <div>
                  {{ el.title }}
                </div>
                <div>{{ el.quantity }} х {{ el.price }} &#x20bd;</div>
              </div>
              <div class="popup__content_total">
                <span>К оплате:</span>
                <div>{{ TOTAL_SUM.totalPrice }} &#x20bd;</div>
              </div>
            </div>
            <div class="popup__footer">
              <button @click="close" class="ok_btn">Ok</button>
              <button @click="close" class="ok_btn">Добавить в меню</button>
            </div>
          </div>
        </div>
      </template>
    </Modal>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'Popup',
  methods: {
    ...mapActions(['CLOSE_MODAL']),
    close() {
      return this.CLOSE_MODAL();
    },
  },
  computed: {
    ...mapGetters(['QUICK_ORDER', 'MODAL_NAME', 'TOTAL_SUM']),
    orderCreated() {
      return this.MODAL_NAME === 'orderCreated';
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
  width: 500px;
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
  justify-content: space-between;
  align-content: flex-start;
  margin-top: 16px;
}
.popup__content_total {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-content: flex-start;
  margin-top: 32px;
  font-weight: 800;
  font-size: 22px;
}
.popup__footer {
  width: 100%;
  margin: 32px 0;
  display: flex;
  justify-content: space-evenly;
}
.ok_btn {
  background-color: #25dcd1;
  border: 1px solid #23c9be;
  width: 120px;
  height: 50px;
  transition: background-color, 0.5s;
  &:hover {
    background-color: #1bc2b7;
  }
}
</style>
