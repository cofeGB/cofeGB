<template>
  <v-container class="px-2 h-100">
    <v-form ref="form" v-model="valid" class="h-100" lazy-validation>
      <v-row>
        <v-col>
          <v-select
            :items="categories"
            label="Категория"
            v-model="dish.category"
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
            v-model="dish.title"
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
            v-model="dish.weight"
            v-show="isGramm"
            class="ma-2"
            label="Вес одной порции в граммах"
            hide-details="auto"
            clearable
            outlined
            dense
            dark
            :rules="rulesNumberField"
          ></v-text-field>
          <v-text-field
            v-model="dish.volume"
            class="ma-2"
            v-show="isMl"
            label="Вес одной порции в миллилитрах"
            hide-details="auto"
            clearable
            outlined
            :rules="rulesNumberField"
            dense
            dark
          ></v-text-field>
        </v-col>
        <v-col>
          <v-text-field
            v-model="dish.price"
            label="Стоимость"
            hide-details="auto"
            clearable
            class="ma-2"
            outlined
            :rules="rulesNumberField"
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
            v-model="dish.nutrients.proteins.percentage"
            label="%"
            hide-details="auto"
            clearable
            outlined
            dense
            :rules="[value => !isNaN(value) || 'Введите число']"
            dark
          ></v-text-field>
          <v-text-field
            v-model="dish.nutrients.proteins.value"
            class="mt-2"
            label="грамм в 1 порции"
            hide-details="auto"
            clearable
            outlined
            dense
            :rules="[value => !isNaN(value) || 'Введите число']"
            dark
          ></v-text-field>
        </v-col>
        <v-col>
          <v-subheader dark class="caption pa-0">Жиры:</v-subheader>
          <v-text-field
            v-model="dish.nutrients.fats.percentage"
            label="%"
            hide-details="auto"
            clearable
            outlined
            dense
            :rules="[value => !isNaN(value) || 'Введите число']"
            dark
          ></v-text-field>
          <v-text-field
            v-model="dish.nutrients.fats.value"
            class="mt-2"
            label="грамм в 1 порции"
            hide-details="auto"
            clearable
            outlined
            dense
            :rules="[value => !isNaN(value) || 'Введите число']"
            dark
          ></v-text-field>
        </v-col>
        <v-col>
          <v-subheader dark class="caption pa-0">Углеводы:</v-subheader>
          <v-text-field
            v-model="dish.nutrients.carbohydrates.percentage"
            label="%"
            hide-details="auto"
            clearable
            outlined
            dense
            :rules="[value => !isNaN(value) || 'Введите число']"
            dark
          ></v-text-field>
          <v-text-field
            v-model="dish.nutrients.carbohydrates.value"
            class="mt-2"
            label="грамм в 1 порции"
            hide-details="auto"
            clearable
            outlined
            dense
            :rules="[value => !isNaN(value) || 'Введите число']"
            dark
          ></v-text-field>
        </v-col>

        <v-col>
          <v-subheader dark class="caption pa-0">Энергетическая ценность:</v-subheader>
          <v-text-field
            v-model="dish.nutrients.energy"
            label="Ккал в порции"
            hide-details="auto"
            clearable
            outlined
            dense
            :rules="[value => !isNaN(value) || 'Введите число']"
            dark
          ></v-text-field>
        </v-col>
      </v-row>

      <v-text-field
        v-model="dish.quantity"
        class="mt-10"
        label="Количество порций блюда, шт"
        hide-details="auto"
        clearable
        outlined
        dense
        :rules="rulesNumberField"
        dark
      ></v-text-field>

      <v-subheader dark class="body-1 pl-0">Состав:</v-subheader>
      <v-select
        :items="INGRIDIENTS"
        v-model="dish.ingredients"
        class="mt-2"
        label="Ингридиенты"
        item-text="title"
        multiple
        solo
        hide-details="auto"
        dense
        chips
        :rules="[v => v.length > 0 || 'Необходимо заполнить']"
        return-object
      ></v-select>
      <div v-if="Boolean(dish.ingredients)">
        <v-row v-for="item in dish.ingredients" class="ma-2" :item="item" :key="item.guid">
          <v-col cols="4">
            <v-subheader dark class="body-1 pl-0">{{ item.title }}</v-subheader>
          </v-col>
          <v-col cols="4">
            <v-text-field
              v-model="item.quantity"
              class="mt-2"
              label="Количество"
              hide-details="auto"
              clearable
              outlined
              dense
              dark
              :rules="rulesNumberField"
            ></v-text-field>
          </v-col>
          <v-col :cols="2">
            <v-select
              :items="UNITS"
              label="Единицы измерения"
              v-model="item.units"
              :rules="rules"
              hide-details="auto"
              solo
              dense
              class="mt-2"
            ></v-select>
          </v-col>
        </v-row>
      </div>
      <v-text-field
        v-model="dish.warnings"
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
        v-model="dish.availability"
        :rules="rules"
        hide-details="auto"
        solo
        dense
        class="mt-10"
      ></v-select>

      <v-textarea
        :value="dish.description"
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
const AVAILIBILITY = [
  { value: 0, text: 'Нет' },
  { value: 1, text: 'Мало' },
  { value: 2, text: 'Достаточно' },
];
const INGRIDIENTS = [
  { guGuid: 1, quantity: 0, units: '', category: 'Специи', title: 'Соль' },
  { guGuid: 2, quantity: 0, units: '', category: 'Специи', title: 'Сахар' },
  { guGuid: 3, quantity: 0, units: '', category: 'Кофе', title: 'Кофе Арабика(молотый)' },
  { guGuid: 4, quantity: 0, units: '', category: 'Кофе', title: 'Кофе растворимый' },
  { guGuid: 5, quantity: 0, units: '', category: 'Чай', title: 'Чай зеленый' },
  { guGuid: 6, quantity: 0, units: '', category: 'Чай', title: 'Чай черный' },
];
export default {
  name: 'AddingDish',
  data() {
    return {
      UNITS: ['гр', 'мл'],
      valid: true,
      isGramm: true,
      isMl: false,
      availabilityOption: ['Нет', 'Мало', 'Достаточно'],
      dish: {
        category: '',
        dishGuid: '',
        creatorGuGuid: '',
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
        ingredients: [],
        availability: '', // - наличие ингредиента {(0|1|2)}
        warnings: '',
      },
      rules: [value => !!value || 'Необходио заполнить.'],
      rulesNumberField: [
        value => value != 0 || 'Введите число',
        value => !isNaN(value) || 'Введите число',
      ],
      agreRules: value => !!value,
      INGRIDIENTS,
    };
  },
  methods: {
    // ...mapActions(['GET_CATEGORIES', 'GET_INGRIDIENTS', ADD_DISH]),
    onClick() {
      this.$refs.form.validate();
      this.dish.category = CATEGORIES.find(el => el.title == this.dish.category);
      this.dish.availability = AVAILIBILITY.find(el => el.text == this.dish.availability).value;
      // this.ADD_DISH();
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
    // ...mapGetters(['CATEGORIES', 'INGRIDIENTS']),
    categories() {
      let categories = [];
      CATEGORIES.forEach(el => {
        categories.push(el.title);
      });
      return categories;
    },
    checkedIngridientsObj() {
      return this.checkedIngridients.forEach(el => (this.checkedIngridientsObj.title = el));
    },
    ingredients() {
      let ingredients = [];
      INGRIDIENTS.forEach(el => {
        ingredients.push(el.title);
      });
      return ingredients;
    },
  },
  // mounted() {
  //   this.GET_CATEGORIES();
  //   this.GET_INGRIDIENTS();
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
