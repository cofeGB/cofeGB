<template>
  <v-container class="px-2 h-100">
    <v-form ref="form" v-model="valid" class="h-100" lazy-validation>
      <v-row>
        <v-col>
          <v-select
            :items="categories"
            label="Категория"
            v-model="ingridient.category"
            :rules="rules"
            loading="true"
            hide-details="auto"
            class="mt-2"
            solo
            dense
          ></v-select>
        </v-col>
        <v-col>
          <v-text-field
            v-model="ingridient.title"
            class="my-2"
            label="Название"
            hide-details="auto"
            clearable
            outlined
            dense
            dark
            :rules="rules"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-subheader dark class="body-1 pl-0 ml-4">Единицы измерения:</v-subheader>
        <v-checkbox
          hide-details="auto"
          color="primary"
          label="Граммы"
          class="ma-2"
          v-model="isGramm"
          @click="changeUnits(0)"
          dark
        ></v-checkbox>
        <v-checkbox
          v-model="isMl"
          hide-details="auto"
          color="primary"
          label="Миллилитры"
          @click="changeUnits(1)"
          class="ma-2"
          dark
        ></v-checkbox>
      </v-row>

      <v-row>
        <v-col>
          <v-text-field
            v-model="ingridient.weight"
            v-show="isGramm"
            class="ma-2"
            label="Вес одной порции в граммах"
            hide-details="auto"
            clearable
            outlined
            dense
            dark
            :rules="rules"
          ></v-text-field>
          <v-text-field
            v-model="ingridient.volume"
            class="ma-2"
            v-show="isMl"
            label="Вес одной порции в миллилитрах"
            hide-details="auto"
            clearable
            outlined
            :rules="rules"
            dense
            dark
          ></v-text-field>
        </v-col>
        <v-col>
          <v-text-field
            v-model="ingridient.price"
            label="Стоимость"
            hide-details="auto"
            clearable
            class="ma-2"
            outlined
            :rules="rules"
            dense
            dark
          ></v-text-field>
        </v-col>
      </v-row>

      <v-subheader dark class="body-1 pl-0">Пищевая ценность:</v-subheader>
      <v-row>
        <v-col>
          <v-subheader dark class="caption pa-0">Белки:</v-subheader>
          <v-text-field
            v-model="ingridient.nutrients.proteins.percentage"
            label="%"
            hide-details="auto"
            clearable
            outlined
            dense
            dark
          ></v-text-field>
          <v-text-field
            v-model="ingridient.nutrients.proteins.value"
            class="mt-2"
            label="грамм в 1 порции"
            hide-details="auto"
            clearable
            outlined
            dense
            dark
          ></v-text-field>
        </v-col>
        <v-col>
          <v-subheader dark class="caption pa-0">Жиры:</v-subheader>
          <v-text-field
            v-model="ingridient.nutrients.fats.percentage"
            label="%"
            hide-details="auto"
            clearable
            outlined
            dense
            dark
          ></v-text-field>
          <v-text-field
            v-model="ingridient.nutrients.fats.value"
            class="mt-2"
            label="грамм в 1 порции"
            hide-details="auto"
            clearable
            outlined
            dense
            dark
          ></v-text-field>
        </v-col>
        <v-col>
          <v-subheader dark class="caption pa-0">Углеводы:</v-subheader>
          <v-text-field
            v-model="ingridient.nutrients.carbohydrates.percentage"
            label="%"
            hide-details="auto"
            clearable
            outlined
            dense
            dark
          ></v-text-field>
          <v-text-field
            v-model="ingridient.nutrients.carbohydrates.value"
            class="mt-2"
            label="грамм в 1 порции"
            hide-details="auto"
            clearable
            outlined
            dense
            dark
          ></v-text-field>
        </v-col>

        <v-col>
          <v-subheader dark class="caption pa-0">Энергетическая ценность:</v-subheader>
          <v-text-field
            v-model="ingridient.nutrients.energy"
            label="Ккал в порции"
            hide-details="auto"
            clearable
            outlined
            dense
            dark
          ></v-text-field>
        </v-col>
      </v-row>

      <v-text-field
        v-model="ingridient.quantity"
        class="mt-10"
        label="Количество порций ингредиента, шт"
        hide-details="auto"
        clearable
        outlined
        dense
        :rules="rules"
        dark
      ></v-text-field>

      <v-subheader dark class="body-1 pl-0">Данные о производителе:</v-subheader>
      <v-row>
        <v-text-field
          v-model="ingridient.origin"
          class="ma-2"
          label="Страна происхождения"
          hide-details="auto"
          clearable
          :rules="rules"
          outlined
          dense
          dark
        ></v-text-field>
        <v-text-field
          v-model="ingridient.brand"
          class="ma-2"
          label="Производитель"
          hide-details="auto"
          clearable
          outlined
          dense
          :rules="rules"
          dark
        ></v-text-field>
      </v-row>

      <v-text-field
        v-model="ingridient.warnings"
        class="mt-10"
        label="Предупреждение"
        hide-details="auto"
        clearable
        outlined
        dense
        dark
        :rules="rules"
      ></v-text-field>
      <v-select
        :items="availabilityOption"
        label="Наличие"
        v-model="ingridient.availability"
        :rules="rules"
        hide-details="auto"
        solo
        dense
        class="mt-10"
      ></v-select>

      <v-textarea
        :value="ingridient.description"
        class="mt-2"
        hide-details="auto"
        label="Описание"
        no-resize
        outlined
        clearable
        dense
        dark
      ></v-textarea>

      <v-btn text dark outlined @click="onClick" class="btn-buy">Сохранить</v-btn>
    </v-form>
  </v-container>
</template>

<script>
// import { mapActions, mapGetters } from 'vuex';

const CATEGORIES = [
  { title: 'Закуски', path: 'starters', itemOrder: 0 },
  { title: 'Сендвичи', path: 'sandwich', itemOrder: 1 },
  { title: 'Салаты', path: 'salad', itemOrder: 2 },
  { title: 'Десерты', path: 'desserts', itemOrder: 3 },
  { title: 'Кофе', path: 'coffee', itemOrder: 4 },
  { title: 'Чай', path: 'tea', itemOrder: 5 },
];
export default {
  name: 'AddingIngridient',
  data() {
    return {
      valid: true,
      isGramm: true,
      isMl: false,
      availabilityOption: ['Нет', 'Мало', 'Достаточно'],
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
    // ...mapActions(['GET_CATEGORIES']),
    onClick() {
      this.$refs.form.validate();
      this.ingridient.category = CATEGORIES.find(el => el.title == this.ingridient.category);
    },
    changeUnits(mode) {
      if (mode == 0) {
        if (!this.isMl) {
          this.isMl = true;
        }
      }
      if (mode == 1) {
        if (!this.isGramm) {
          this.isGramm = true;
        }
      }
    },
  },
  computed: {
    // ...mapGetters(['CATEGORIES']),
    categories() {
      let categories = [];
      CATEGORIES.forEach(el => {
        categories.push(el.title);
      });
      return categories;
    },
  },
  // mounted() {
  //   this.GET_CATEGORIES();
  //   console.log(this.CATEGORIES);
  // },
};
</script>

<style lang="scss" scoped>
.btn-buy {
  background: rgba(172, 166, 166, 0.363);
  height: 50px;
  margin-top: 10px;
}
</style>
