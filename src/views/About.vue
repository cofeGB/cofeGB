<template>
  <v-container class="d-flex flex-column white--text">
    <!-- <v-row class="d-flex flex-column justify-space-between"> -->
    <h1 class="brandName">{{ globalName }}</h1>
    <div class="text-center text-h4 mx-auto">Кофе для Вашей бодрости, настроения и здоровья!</div>
    <div class="text-center text-h3 ma-7">Наша команда</div>
    <v-carousel show-arrows-on-hover hide-delimiters class="d-flex justify-center">
      <v-carousel-item v-for="(item, i) in items" :key="i" height="auto">
        <v-card class="d-flex flex-column justify-center align-center" width="500">
          <v-avatar class="ma-3" size="300" tile>
            <v-img
              :src="require('../assets/img/employee/' + item.src)"
              position="center center"
              height="250px"
              width="350px"
              alt="logo"
              contain
            />
          </v-avatar>
          <v-card-title class="text-h5">
            {{ item.post }}
          </v-card-title>
          <v-card-subtitle class="text-h4">
            {{ item.name }}
          </v-card-subtitle>
          <v-rating
            v-model="item.rating"
            background-color="green lighten-3"
            color="green"
            empty-icon="$ratingFull"
            half-increments
            hover
          ></v-rating>
          <div pa-0>Рейтинг ({{ item.rating }})</div>
        </v-card>
      </v-carousel-item>
    </v-carousel>
    <!-- </v-row> -->
  </v-container>
</template>

<script>
import store from '../store/index';

export default {
  name: 'About',
  data() {
    return {
      globalName: store.state.globalConst.brandName,
      items: store.state.employee,
    };
  },
};
</script>

<style lang="scss" scoped></style>
