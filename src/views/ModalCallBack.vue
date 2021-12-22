<template>
  <v-dialog
    v-model="call_back"
    fullscreen
    hide-overlay
    transition="dialog-bottom-transition"
    @close="showmodal"
    class="dialog"
  >
    <v-form ref="call" lazy-validation class="form__main">
      <h1>Обратный звонок</h1>

      <v-text-field
        v-model="userPhone"
        class="my-2"
        loading="false"
        label="Ваш номер телефона"
        hide-details="auto"
        clearable
        outlined
        dense
        return-masked-value
        mask="+7(ddd)ddd-dd-dd"
        :rules="rules"
      ></v-text-field>

      <v-text-field
        v-model="userName"
        class="my-2"
        loading="false"
        label="Ваше имя"
        hide-details="auto"
        clearable
        outlined
        dense
      ></v-text-field>
      <v-btn @click="showmodal">Close</v-btn>

      <!-- <tooltip
        right
        :disabled="disabled"
        content="Если вы уверены в своем заказе и указанном адресе, вы можете отказаться от обратного звонка нашего оператора."
      >
        <v-checkbox
          v-model="user.backCall"
          hide-details="auto"
          color="primary"
          label="Не звонить для проверки заказа"
          class="ma-0"
        ></v-checkbox>
      </tooltip> -->
    </v-form>
  </v-dialog>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  props: ['showModal'],
  data() {
    return {
      userPhone: '',
      userName: '',
      rules: [
        value => !!value || 'Необходио заполнить.',
        value => (value && value.length === 11) || 'Необходио заполнить.',
      ],
    };
  },
  methods: {
    ...mapActions(['CLOSE_MODAL']),
    ...mapGetters(['MODAL_NAME']),
    showmodal() {
      this.CLOSE_MODAL();
    },
  },
  computed: {
    call_back() {
      return this.MODAL_NAME() === 'callBack';
    },
  },
};
</script>

<style lang="scss" scoped>
v-dialog {
  display: flex !important;
  justify-content: center;
  align-items: center;
  // position: relative;
  background: rgba(0, 0, 0, 0.9) !important;
  backdrop-filter: blur(100px);
}
.form__main {
  background: rgb(255, 255, 255) !important;
  // height: 100vh !important;
  padding: 30px;
  margin: auto auto;
  align-self: center;
  max-width: 800px;
  backdrop-filter: blur(100px);
}
</style>
