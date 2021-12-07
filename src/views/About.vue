<template>
  <v-container class="d-flex flex-column white--text">
    <v-row class="d-flex flex-column justify-space-between">
      <div class="text-center text-h2 mt-7 mb-3">Кофейня "Бодрит"</div>
      <div class="text-center text-h4 mx-auto">Кофе для Вашей бодрости, настроения и здоровья!</div>
      <div class="text-center text-h3 ma-7">Наша команда</div>
      <v-carousel cycle show-arrows-on-hover hide-delimiters>
        <v-carousel-item v-for="(item, i) in items" :key="i">
          <v-card class="d-flex flex-column align-center">
            <v-avatar class="ma-3" size="300" tile>
              <v-img :src="item.src"></v-img>
            </v-avatar>
            <v-card-title class="text-h5">
              {{ item.post }}
            </v-card-title>
            <v-card-subtitle>
              {{ item.name }}
            </v-card-subtitle>
          </v-card>
        </v-carousel-item>
      </v-carousel>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'About',
  data() {
    return {
      items: [
        {
          src: 'https://source.unsplash.com/random?people&1',
          post: 'Директор',
          name: 'Пупкин Иван Иванович',
          rating: 5,
        },
        {
          src: 'https://source.unsplash.com/random?people&2',
          post: 'Администратор',
          name: 'Пупкин Иван Иванович',
          rating: 5,
        },
        {
          src: 'https://source.unsplash.com/random?people&3',
          post: 'Шеф-повар',
          name: 'Пупкин Иван Иванович',
          rating: 5,
        },
        {
          src: 'https://source.unsplash.com/random?people&4',
          post: 'Бариста',
          name: 'Пупкин Иван Иванович',
          rating: 5,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
