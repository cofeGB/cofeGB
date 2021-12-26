<template>
  <div class="content">
    <h3>СТОП-ЛИСТ</h3>
    <v-data-table
      :headers="headers"
      :items="PRODUCTS"
      :items-per-page="15"
      class="elevation-1"
    ></v-data-table>
    <div class="select-btns-group">
      <v-row align="center">
        <v-col class="d-flex" cols="12" sm="2">
          <v-select :items="items" label="Какое блюдо ставиться на стоп" solo></v-select>
        </v-col>

        <v-col class="d-flex" cols="12" sm="2">
          <v-select :items="items" label="Количество" solo></v-select>
        </v-col>

        <v-col class="d-flex" cols="12" sm="2">
          <v-select :items="items" label="Причина отсутствия блюда" solo></v-select>
        </v-col>

        <v-col class="d-flex" cols="12" sm="2">
          <v-select :items="items" label="Ваше имя" solo></v-select>
        </v-col>

        <div class="btn-group">
          <button class="btn">Установить время</button>
          <button class="btn">Время сейчас</button>
          <button class="btn">Добавить</button>
        </div>
      </v-row>
    </div>
    <v-time-picker format="ampm"></v-time-picker>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'Stoplist',
  data() {
    return {
      headers: [
        {
          text: 'Блюдо',
          align: 'start',
          value: 'title',
        },
        { text: 'Количество', value: 'quantity' },
        { text: 'Кто поставил', value: 'name' },
        { text: 'Время постановки', value: 'time' },
        { text: 'Удалить', value: 'delete' },
      ],
      picker: 'null',
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
.select-btns-group
  margin-top: 60px
  display: flex
  justify-content: space-between
  align-items: center
.d-flex
  margin: 0
.btn
  min-width: 200px
  margin-left: 20px
  background-color: white
  padding: 13px
  font-size: 14px
  border-radius: 5px
  border: 1px solid grey
  &:hover
    background-color: #25DCD1
.btn-group
  margin-top: -26px
  display: flex
  justify-content: space-between
  flex-wrap: wrap
</style>
