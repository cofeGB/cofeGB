<template>
  <div class="content">
    <h3>Склад продукции</h3>
    <v-data-table
      :headers="headers"
      :items="PRODUCTS"
      :items-per-page="15"
      class="elevation-1"
    ></v-data-table>
    <div class="btns-block">
      <div class="btn-group">
        <button class="btn">Отчет по прибыли</button>
        <button class="btn">Отчет по затратам</button>
        <button class="btn">Остаток на складе</button>
      </div>
      <div class="btn-group">
        <button class="btn">Внести поступления</button>
        <button class="btn">Поступления за период</button>
        <button class="btn">Внести изменения</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'Wharehouse',
  data() {
    return {
      headers: [
        {
          text: 'Наименование',
          align: 'start',
          value: 'title',
        },
        { text: 'Количество', value: 'quantity' },
        { text: 'Количество в упаковке', value: 'quantityInPack' },
        { text: 'Количество упаковок', value: 'packQuantity' },
        { text: 'Объем', value: 'weight' },
        { text: 'Стоимость', value: 'priceByKg' },
        { text: 'Стоимость упаковки', value: 'pricePack' },
      ],
    };
  },
  computed: {
    ...mapGetters(['PRODUCTS']),
  },
};
</script>
<style lang="sass" scoped>
h3
  color: white
  text-align: center
  font-size: 35px
.content
  padding: 30px
.btns-block
  margin-top: 50px
  display: flex
  justify-content: space-between
  // flex-wrap: wrap
.btn
  margin: 5px
  background-color: white
  padding: 10px
  font-size: 12px
  border-radius: 3px
  border: 1px solid black
  &:hover
    background-color: #25DCD1
.btn-group
  display: flex
  justify-content: space-around
  flex-wrap: wrap
</style>
