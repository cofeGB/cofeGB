<template>
  <Modal :activator="call_back_accept">
    <template #content>
      <v-flex class="classes">
        <v-form v-model="valid" ref="call" lazy-validation class="form__main">
          <div class="form__top">
            <h2 class="form__title">Заявка принята. Ожидайте звонка</h2>
            <h2 class="form__title">Вам перезвонят в течение 3 минут!</h2>
          </div>
          <v-btn class="form__btn mt-4" @click="closemodal">Хорошо</v-btn>
        </v-form>
      </v-flex>
    </template>
  </Modal>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'callBackAccept',
  // props: ['showModal'],
  data() {
    return {
      valid: true,
      phone: '',
      clientname: '',
    };
  },
  methods: {
    ...mapActions(['CLOSE_MODAL', 'SEND_CALLBACK']),
    closemodal() {
      this.CLOSE_MODAL();
    },
  },
  computed: {
    ...mapGetters(['MODAL_NAME']),
    call_back_accept() {
      return this.MODAL_NAME === 'callBackAccept';
    },
  },
};
</script>

<style lang="scss" scoped>
.classes {
  background: rgba(86, 71, 66, 0.95) !important;
  min-height: 100% !important;
  display: flex !important;
  justify-content: center;
  align-items: center;
}
.form__main {
  background: rgba(240, 237, 237, 0.95) !important;
  min-height: 100% !important;
  // height: 100vh !important;
  padding: 30px;
  margin: 10vh auto;
  max-width: 800px;
  backdrop-filter: blur(100px);
  display: flex;
  flex-direction: column;
  align-items: center;
}
.form__title {
  color: rgb(16, 121, 25);
  text-align: center;
  display: block;
}
</style>
