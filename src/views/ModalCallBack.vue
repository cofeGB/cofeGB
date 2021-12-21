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
        <h1 class="form__title">Обратный звонок</h1>
        <v-tooltip top class="form__btn">
          <template v-slot:activator="{ on, attrs }">
            <v-btn icon @click="closemodal" v-bind="attrs" v-on="on">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </template>
          <span>Закрыть форму</span>
        </v-tooltip>
      </div>
      <v-text-field
        v-model="phone"
        type="text"
        class="my-2"
        loading="false"
        label="Ваш номер телефона"
        clearable
        outlined
        dense
        return-masked-value
        :placeholder="mask"
        :rules="phonerule"
      ></v-text-field>

      <v-text-field
        v-model="clientname"
        class="my-2"
        loading="false"
        label="Ваше имя"
        clearable
        outlined
        dense
        :rules="namerule"
      ></v-text-field>
      <v-btn @click="send_callback">Отправить</v-btn>
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
      datetime_order: new Date().toLocaleString(),
      mask: '+7(000)000-00-00',
      phonerule: [
        value => (value && /^\+7\(\d{3}\)\d{3}-\d{2}-\d{2}$/.test(value)) || 'Необходио заполнить.',
      ],
      namerule: [value => !!value || 'Необходио заполнить.'],
      isValid: false,
    };
  },
  methods: {
    ...mapActions(['CLOSE_MODAL', 'SEND_CALLBACK']),
    ...mapGetters(['MODAL_NAME']),
    closemodal() {
      this.CLOSE_MODAL();
    },
    send_callback() {
      if (!this.isValid || !(this.phone && this.clientname)) {
        alert('Некорректный ввод данных');
        return false;
      }
      let { datetime_order, clientname, phone, user = '', datetime_callback = '' } = this;
      const callback = [{ datetime_order, clientname, phone, user, datetime_callback }];
      this.SEND_CALLBACK(callback);
      this.closemodal();
    },
    checkform() {
      console.log(this.phone);
      console.log(this.clientname);
      return this.phone && this.clientname;
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
template {
  display: flex !important;
  justify-content: center;
  align-items: center;
}
.v-dialog {
  display: flex !important;
  justify-content: center;
  align-items: center;
  // position: relative;
  background: rgba(0, 0, 0, 0.9) !important;
  backdrop-filter: blur(100px);
}
.form__top {
  width: 100%;
  display: flex;
  align-items: start;
  justify-content: space-between;
}
.form__title {
  display: inline-block;
}
.form__main {
  background: rgb(255, 255, 255) !important;
  // height: 100vh !important;
  padding: 30px;
  margin: 10vh auto;
  align-self: center;
  max-width: 800px;
  backdrop-filter: blur(100px);
}
</style>
