<template>
  <v-dialog
    v-model="call_back"
    fullscreen
    transition="dialog-bottom-transition"
    @close="closemodal"
    class="dialog"
    background="#fff"
  >
    <v-form v-model="isValid" ref="call" lazy-validation class="form__main">
      <div class="form__top">
        <h1 class="form__title">Ваша заявка принята. Ожидайте звонка</h1>
        <h1 class="form__title">Вам перезвонт в тчение 3 минут!</h1>
      </div>
      <v-btn @click="closemodal">Хорошо}</v-btn>
    </v-form>
  </v-dialog>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  props: ['showModal'],
  data() {
    return {
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
    call_back() {
      return this.MODAL_NAME === 'callBackAccept';
    },
  },
};
</script>

<style lang="scss" scoped></style>
