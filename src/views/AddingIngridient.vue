<template>
  <v-container class="px-2 h-100">
    <v-form ref="form" v-model="valid" class="h-100" lazy-validation>
      <v-select
        :items="CATEGORIES"
        label="Категория"
        v-model="ingridient.category"
        :rules="rules"
        loading="false"
        hide-details="auto"
        clearable
        dense
        dark
      ></v-select>

      <v-text-field
        v-model="ingridient.title"
        class="my-2"
        loading="false"
        label="Название"
        hide-details="auto"
        clearable
        outlined
        dense
        dark
        :rules="rules"
      ></v-text-field>

      <v-text-field
        v-model="ingridient.description"
        class="mt-2"
        loading="false"
        label="Описание"
        hide-details="auto"
        clearable
        outlined
        dense
        dark
      ></v-text-field>

      <tooltip
        left
        content="Если вы уверены в своем заказе и указанном адресе, вы можете отказаться от обратного звонка нашего оператора."
      >
        <v-checkbox
          hide-details="auto"
          color="primary"
          label="Не звонить для проверки заказа"
          class="my-1"
          dark
        ></v-checkbox>
      </tooltip>

      <v-text-field
        v-model="ingridient.weight"
        class="py-1"
        loading="false"
        label="Вес одной порции в граммах"
        hide-details="auto"
        clearable
        outlined
        dense
        dark
        :rules="[v => !!v || 'Доставка не осуществляется без адреса!']"
      ></v-text-field>
      <v-text-field
        v-model="ingridient.volume"
        loading="false"
        label="Вес одной порции в миллилитрах"
        hide-details="auto"
        clearable
        outlined
        dense
        dark
      ></v-text-field>
      <v-text-field
        v-model="ingridient.price"
        loading="false"
        label="Стоимость"
        hide-details="auto"
        clearable
        outlined
        dense
        dark
      ></v-text-field>
      <v-text-field
        v-model="ingridient.quantity"
        loading="false"
        label="Количество порций ингредиента, шт"
        hide-details="auto"
        clearable
        outlined
        dense
        dark
      ></v-text-field>

      <v-subheader dark class="body-1 pl-0">Оплата:</v-subheader>

      <v-textarea
        hide-details="auto"
        label="%"
        no-resize
        outlined
        clearable
        dense
        dark
        :value="ingridient.nutrients.proteins.percentage"
      ></v-textarea>

      <v-btn text dark outlined @click="onClick">Заказать</v-btn>
    </v-form>
  </v-container>
</template>

<script>
// import { eventBus } from '@/main';
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'AddingIngridient',
  data() {
    return {
      valid: true,
      ingridient: {
        category: '',
        guGuid: '',
        title: '',
        description: '',
        weight: 0, // - вес одной порции в граммах ?
        volume: 0, // - объем одной порции в граммах ?
        price: 0,
        quantity: 0, // - количество порций ингредиента, в штуках относительно weight или volume
        nutrients: {
          proteins: {
            percentage: 0, // - относительное содержание к весу в %
            value: 0, // - абсолютный вес в одной порции в граммах
          }, //- белки
          fats: {
            percentage: 0,
            value: 0,
          }, //- жиры
          carbohydrates: {
            percentage: 0,
            value: 0,
          }, // - углеводы
          energy: 0,
        },
        imgUrls: [],
        brand: '', // - производитель ингредиента
        origin: '', // - страна происхождения ингредиента
        availability: 2, // - наличие ингредиента {(0|1|2)}
        warnings: '',
      },
      rules: [
        value => !!value || 'Необходио заполнить.',
        // value => (value && value.length === 11) || 'Необходио заполнить.',
      ],
      agreRules: value => !!value,
    };
  },
  methods: {
    ...mapActions(['GET_CATEGORIES']),
    onClick() {},
  },
  computed: {
    ...mapGetters(['CATEGORIES']),
  },
  mounted() {
    this.GET_CATEGORIES();
  },
};
</script>
