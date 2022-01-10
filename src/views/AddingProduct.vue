<template>
  <v-container class="px-2 h-100">
    <v-form ref="form" v-model="valid" class="h-100" lazy-validation>
      <v-row>
        <v-col>
          <v-select
            :items="categories"
            label="Категория"
            v-model="product.category"
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
            v-model="product.title"
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
          label="Килограммы"
          class="ma-2"
          v-model="isGramm"
          @click="changeUnits(0)"
          dark
        ></v-checkbox>
        <v-checkbox
          v-model="isMl"
          hide-details="auto"
          color="primary"
          label="Литры"
          @click="changeUnits(1)"
          class="ma-2"
          dark
        ></v-checkbox>
      </v-row>

      <v-row>
        <v-col v-show="isGramm">
          <v-text-field
            v-model="product.weight"
            class="ma-2"
            label="Вес продукта, кг"
            hide-details="auto"
            clearable
            outlined
            dense
            dark
            :rules="rulesNumberField"
          ></v-text-field>
          <v-text-field
            v-model="product.weightPack"
            class="ma-2"
            label="Вес 1 упаковки, кг"
            hide-details="auto"
            clearable
            outlined
            :rules="rulesNumberField"
            dense
            dark
          ></v-text-field>
        </v-col>
        <v-col v-show="isMl">
          <v-text-field
            v-model="product.volume"
            class="ma-2"
            v-show="isMl"
            label="Объем, л"
            hide-details="auto"
            clearable
            outlined
            :rules="rulesNumberField"
            dense
            dark
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <v-text-field
            v-model="product.price"
            label="Стоимость упаковки"
            hide-details="auto"
            clearable
            class="ma-2"
            outlined
            :rules="rulesNumberField"
            dense
            dark
          ></v-text-field>
        </v-col>
        <v-col>
          <v-text-field
            v-model="product.markupPrice"
            label="Стоимость упаковки с наценкой"
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
      <!-- //какого формата данные? -->
      <v-row>
        <v-col>
          <v-text-field
            v-model="product.storageTime"
            label="Время хранения продукта"
            hide-details="auto"
            clearable
            class="ma-2"
            outlined
            :rules="rules"
            dense
            dark
          ></v-text-field>
        </v-col>
        <v-col>
          <v-text-field
            v-model="product.bestBeforeDate"
            label="Срок годности продукта"
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
            v-model="product.nutrients.proteins.percentage"
            label="%"
            hide-details="auto"
            clearable
            outlined
            dense
            :rules="[value => !isNaN(value) || 'Введите число']"
            dark
          ></v-text-field>
          <v-text-field
            v-model="product.nutrients.proteins.value"
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
            v-model="product.nutrients.fats.percentage"
            label="%"
            hide-details="auto"
            clearable
            outlined
            dense
            :rules="[value => !isNaN(value) || 'Введите число']"
            dark
          ></v-text-field>
          <v-text-field
            v-model="product.nutrients.fats.value"
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
            v-model="product.nutrients.carbohydrates.percentage"
            label="%"
            hide-details="auto"
            clearable
            outlined
            dense
            :rules="[value => !isNaN(value) || 'Введите число']"
            dark
          ></v-text-field>
          <v-text-field
            v-model="product.nutrients.carbohydrates.value"
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
            v-model="product.nutrients.energy"
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

      <v-row>
        <v-col>
          <v-text-field
            v-model="product.quantityPack"
            class="mt-10"
            label="Количество коробок, шт"
            hide-details="auto"
            clearable
            outlined
            dense
            :rules="rulesNumberField"
            dark
          ></v-text-field>
        </v-col>
        <v-col>
          <v-text-field
            v-model="product.quantityItemInPack"
            class="mt-10"
            label="Количество упаковок в коробке, шт"
            hide-details="auto"
            clearable
            outlined
            dense
            :rules="rulesNumberField"
            dark
          ></v-text-field>
        </v-col>
        <v-col>
          <v-text-field
            v-model="product.quantity"
            class="mt-10"
            label="Количество упаковок, шт"
            hide-details="auto"
            clearable
            outlined
            dense
            :rules="rulesNumberField"
            dark
          ></v-text-field>
        </v-col>
      </v-row>

      <v-subheader dark class="body-1 pl-0">Данные о производителе:</v-subheader>
      <v-row>
        <v-col>
          <v-text-field
            v-model="product.origin"
            class="ma-2"
            label="Страна происхождения"
            hide-details="auto"
            clearable
            :rules="rules"
            outlined
            dense
            dark
          ></v-text-field>
        </v-col>
        <v-col>
          <v-text-field
            v-model="product.brand"
            class="ma-2"
            label="Производитель"
            hide-details="auto"
            clearable
            outlined
            dense
            :rules="rules"
            dark
          ></v-text-field>
        </v-col>
        <v-col>
          <v-text-field
            v-model="product.supplier"
            class="ma-2"
            label="Поставщик"
            hide-details="auto"
            clearable
            outlined
            dense
            :rules="rules"
            dark
          ></v-text-field>
        </v-col>
      </v-row>

      <v-text-field
        v-model="product.warnings"
        class="mt-10"
        label="Предупреждение"
        hide-details="auto"
        clearable
        outlined
        :rules="rules"
        dense
        dark
      ></v-text-field>
      <v-select
        :items="availabilityOption"
        label="Наличие"
        v-model="product.availability"
        :rules="rules"
        hide-details="auto"
        solo
        dense
        class="mt-10"
      ></v-select>

      <v-textarea
        :value="product.description"
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

const CATEGORIES = ['Специи', 'Чай', 'Кофе', 'Овощи', 'Фрукты'];
const AVAILIBILITY = [
  { value: 0, text: 'Нет' },
  { value: 1, text: 'Мало' },
  { value: 2, text: 'Достаточно' },
];
export default {
  name: 'AddingProduct',
  data() {
    return {
      valid: true,
      isGramm: true,
      isMl: false,
      availabilityOption: ['Нет', 'Мало', 'Достаточно'],
      product: {
        guGuid: '',
        category: '',
        title: '',
        storageTime: '',
        bestBeforeDate: '', //Срок годности продукта
        description: '',
        weight: 0, // - вес продукта в кг
        weightPack: 0, // - Вес продукта в упаковке в кг
        volume: 0, // - объем одной упаковки в литрах
        price: 0,
        murkupPrice: 0,
        quantity: 0,
        quantityItemInPack: 0,
        quantityPack: 0,
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
        supplier: '', //поставщик
        brand: '', // - производитель ингредиента
        origin: '', // - страна происхождения ингредиента
        availability: '', // - наличие ингредиента {(0|1|2)}
        warnings: '',
      },
      rules: [value => !!value || 'Необходио заполнить.'],
      rulesNumberField: [
        value => value != 0 || 'Введите число',
        value => !isNaN(value) || 'Введите число',
      ],
      agreRules: value => !!value,
    };
  },
  methods: {
    // ...mapActions(['GET_product_CATEGORIES']),
    onClick() {
      this.$refs.form.validate();
      console.log(Number.isNaN(this.product.nutrients.proteins.percentage));
      this.product.category = CATEGORIES.find(el => el.title == this.product.category);
      this.product.availability = AVAILIBILITY.find(
        el => el.text == this.product.availability
      ).value;
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
    // ...mapGetters(['product_CATEGORIES']),
    categories() {
      // let categories = [];
      // CATEGORIES.forEach(el => {
      //   categories.push(el.title);
      // });
      return CATEGORIES;
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
