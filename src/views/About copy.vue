<template>
  <v-container class="d-flex flex-column white--text">
    <!-- <v-row class="d-flex flex-column justify-space-between"> -->
    <h1 class="brandName">{{ globalName }}</h1>
    <div class="text-center text-h4 mx-auto">Кофе для Вашей бодрости, настроения и здоровья!</div>
    <div class="text-center text-h3 ma-7">Наша команда</div>
    <v-carousel show-arrows-on-hover hide-delimiters class="d-flex justify-center" height="auto">
      <v-carousel-item v-for="(item, i) in items" :key="i" height="auto">
        <v-card class="d-flex flex-column justify-center align-center pa-3" width="500">
          <v-img
            :src="require(`../assets/${item.src}`)"
            position="center center"
            height="320px"
            width="320px"
            alt="logo"
            contain
          ></v-img>
          <v-card-title class="text-h5">
            {{ item.post }}
          </v-card-title>
          <v-card-subtitle class="text-h4">
            {{ item.name }}
          </v-card-subtitle>
          <v-rating
            v-if="!addReviewsVisible"
            v-model="item.rating"
            background-color="green lighten-3"
            color="green"
            empty-icon="$ratingFull"
            half-increments
            readonly
          ></v-rating>
          <div v-if="!addReviewsVisible" pa-0>Рейтинг ({{ item.rating }})</div>
          <AddReviews
            v-if="addReviewsVisible"
            @changeReviewsVisible="changeReviewsVisible"
            :e_id="item.id"
          />
          <ShowReviews
            v-if="showReviewsVisible"
            @changeShowReviewsVisible="changeShowReviewsVisible"
            :e_id="item.id"
          />
          <v-btn v-if="!addReviewsVisible" @click="changeReviewsVisible" depressed color="primary">
            Проголосовать
          </v-btn>
          <v-btn
            v-if="!showReviewsVisible"
            @click="changeShowReviewsVisible"
            depressed
            color="primary"
          >
            Посмотреть отзывы
          </v-btn>
        </v-card>
      </v-carousel-item>
    </v-carousel>
    <!-- </v-row> -->
  </v-container>
</template>

<script>
import store from '../store/index';
import AddReviews from './AddReviews.vue';
import ShowReviews from './ShowReviews.vue';

export default {
  name: 'About',
  data() {
    return {
      globalName: store.state.globalConst.brandName,
      items: store.state.employee,
      addReviewsVisible: false,
      showReviewsVisible: false,
    };
  },
  components: {
    AddReviews,
    ShowReviews,
  },
  methods: {
    changeReviewsVisible() {
      this.addReviewsVisible = !this.addReviewsVisible;
    },
    changeShowReviewsVisible() {
      this.showReviewsVisible = !this.showReviewsVisible;
    },
  },
};
</script>

<style lang="scss" scoped>
.v-image__image {
  top: 5px;
  // background-color: #ddd
  border: 1px solid #ddd;
}
</style>
