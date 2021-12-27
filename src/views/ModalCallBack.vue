<template>
  <Modal :activator="call_back">
    <template #content>
      <v-flex class="classes">
        <v-form ref="form" v-model="valid" lazy-validation class="form__main h-100">
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
          <CallBackAccept />
        </v-form>
      </v-flex>
    </template>
  </Modal>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import CallBackAccept from './CallBackAccept.vue';
export default {
  name: 'modalCallBack',
  // props: ['showModal'],
  data() {
    return {
      valid: true,
      phone: '',
      clientname: '',
      datetime_order: new Date().toLocaleString(),
      mask: '+7(000)000-00-00',
      phonerule: [
        value => !!value || 'Необходио заполнить.',
        value =>
          (value &&
            (/^\+7\(\d{3}\)\d{3}-\d{2}-\d{2}$/.test(value) ||
              /^9\d{9}$/.test(value) ||
              /^8\d{10}$/.test(value) ||
              /^\+7\d{10}$/.test(value))) ||
          'Необходио заполнить.',
      ],
      namerule: [value => !!value || 'Необходио заполнить.'],
      // agreRules: value => !!value,
    };
  },
  components: {
    CallBackAccept,
  },
  methods: {
    ...mapActions(['CLOSE_MODAL', 'SEND_CALLBACK', 'OPEN_MODAL']),
    closemodal() {
      this.CLOSE_MODAL();
    },
    send_callback() {
      this.$refs.form.validate();
      // if (!this.isValid || !(this.phone && this.clientname)) {
      //   alert('Некорректный ввод данных');
      //   return false;
      // }
      let { datetime_order, clientname, phone, user = '', datetime_callback = '' } = this;
      const callback = [{ datetime_order, clientname, phone, user, datetime_callback }];
      this.SEND_CALLBACK(callback);
      // this.closemodal();
      this.showmodal('callBackAccept');
    },
    checkform() {
      return this.phone && this.clientname;
    },
    showmodal(modal_name) {
      this.closemodal();
      console.log(modal_name);
      this.OPEN_MODAL(modal_name);
    },
  },
  computed: {
    ...mapGetters(['MODAL_NAME']),
    call_back() {
      return this.MODAL_NAME === 'modalCallBack';
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/css/variables.scss';
.classes {
  background: rgba(86, 71, 66, 0.95) !important;
  min-height: 100% !important;
  display: flex !important;
  justify-content: center;
  align-items: center;
}
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
  background: rgba(86, 71, 66, 0.8) !important;
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
  background: rgba(240, 237, 237, 0.95) !important;
  min-height: 100% !important;
  // height: 100vh !important;
  padding: 30px;
  margin: 10vh auto;
  align-self: center;
  max-width: 800px;
  backdrop-filter: blur(100px);
}
</style>
