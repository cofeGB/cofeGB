<template>
  <v-container class="px-2 h-100">
    <v-form ref="form" v-model="valid" class="h-100" lazy-validation>
      <v-text-field
        v-model="user.userPhone"
        class="my-2"
        loading="false"
        label="Ваш номер телефона"
        hide-details="auto"
        clearable
        outlined
        dense
        dark
        :rules="rules"
      ></v-text-field>

      <v-text-field
        v-model="user.userName"
        class="mt-2"
        loading="false"
        label="Ваше имя"
        hide-details="auto"
        clearable
        outlined
        dense
        dark
      ></v-text-field>

      <tooltip
        left
        :disabled="disabled"
        content="Если вы уверены в своем заказе и указанном адресе, вы можете отказаться от обратного звонка нашего оператора."
      >
        <v-checkbox
          v-model="user.backCall"
          hide-details="auto"
          color="primary"
          label="Не звонить для проверки заказа"
          class="my-1"
          dark
        ></v-checkbox>
      </tooltip>

      <v-row>
        <v-col cols="12" class="py-0 mt-2">
          <v-text-field
            v-model="user.address.strit"
            class="py-1"
            loading="false"
            label="Адрес доставки"
            hide-details="auto"
            clearable
            outlined
            dense
            dark
            :rules="[v => !!v || 'Доставка не осуществляется без адреса!']"
          ></v-text-field>
        </v-col>
        <v-col cols="12" lg="4" sm12 class="py-1">
          <v-text-field
            v-model="user.address.ofice"
            loading="false"
            label="Кв.\Офис"
            hide-details="auto"
            clearable
            outlined
            dense
            dark
          ></v-text-field>
        </v-col>
        <v-col cols="12" lg="4" sm12 class="py-1">
          <v-text-field
            v-model="user.address.home"
            loading="false"
            label="Подъезд"
            hide-details="auto"
            clearable
            outlined
            dense
            dark
          ></v-text-field>
        </v-col>
        <v-col cols="12" lg="4" sm12 class="py-1">
          <v-text-field
            v-model="user.address.flore"
            loading="false"
            label="Этаж"
            hide-details="auto"
            clearable
            outlined
            dense
            dark
          ></v-text-field>
        </v-col>
      </v-row>

      <v-subheader dark class="body-1 pl-0">Оплата:</v-subheader>

      <v-radio-group v-model="user.payment" row class="ma-0 pa-0">
        <v-radio
          hide-details="auto"
          color="primary"
          dark
          v-for="n in payment"
          :key="n.value"
          :label="n.title"
          :value="n.value"
          class="mx-auto my-0"
          :rules="[v => !!v || 'Доставка не осуществляется без оплаты!']"
        ></v-radio>
      </v-radio-group>

      <v-textarea
        hide-details="auto"
        label="Text"
        no-resize
        outlined
        clearable
        dense
        dark
        :value="user.massage"
      ></v-textarea>

      <v-checkbox
        v-model="user.agree"
        required
        dark
        :rules="[v => !!v || 'Доставка не осуществляется без согласия!']"
        hide-details="auto"
        color="primary"
        class="ma-0"
      >
        <template v-slot:label>
          <tooltip
            right
            :disabled="disabled"
            content="Если вы уверены в своем заказе и указанном адресе, вы можете отказаться от обратного звонка нашего оператора."
          >
            <div>
              Соглашаюсь с
              <a target="_blank" href="https://vuetifyjs.com" @click.stop>
                Политикой обработки персональных данных и условиями доставки.
              </a>
            </div>
          </tooltip>
        </template>
      </v-checkbox>

      <v-btn text dark outlined class="title btn-buy" @click="buyOrder">Заказать</v-btn>
      <v-btn
        v-if="hideBtn !== 'basket'"
        color="secondery"
        class="title btn-buy"
        @click="openBasket"
        dark
      >
        Открыть корзину
      </v-btn>

      <v-btn text outlined class="mt-2 btn-buy">
        <span class="title">Вход или Регистрация</span>
        <v-icon class="ml-2">mdi-account-arrow-left-outline</v-icon>
      </v-btn>
    </v-form>
  </v-container>
</template>

<script>
import { eventBus } from '@/main';
import { mapActions } from 'vuex';

export default {
  name: 'colDeliveryFormOrder',
  props: {
    tooltipDisabled: {
      type: Boolean,
      default: false,
    },
    hideBtn: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      valid: true,
      user: {
        userPhone: null,
        userName: '',
        backCall: true,
        address: {
          strit: '',
          home: '',
          ofice: '',
          flore: '',
        },
        message: '',
        payment: 'online',
        agree: false,
      },
      payment: [
        {
          value: 'online',
          title: 'Онлайн',
        },
        {
          value: 'courier',
          title: 'Курьеру',
        },
      ],
      rules: [
        value => !!value || 'Необходио заполнить.',
        value => (value && value.length === 11) || 'Необходио заполнить.',
      ],
      agreRules: value => !!value,
    };
  },
  computed: {
    disabled() {
      return this.tooltipDisabled;
    },
  },
  methods: {
    ...mapActions(['OPEN_MODAL']),
    openBasket() {
      this.OPEN_MODAL('basket');
      eventBus.$emit('openOrder');
    },
    buyOrder() {
      this.$refs.form.validate();
      this.$store.dispatch('POST_ORDER', {
        user: this.user,
        numberOrder: localStorage.numberOrder,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.btn {
  &-buy {
    background: rgba(172, 166, 166, 0.363);
    width: 100%;
    height: 50px;
    margin-top: 10px;
  }
}
</style>
