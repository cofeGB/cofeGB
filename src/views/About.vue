<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="800">
      <template v-slot:activator="{ on, attrs }">
        <v-container class="d-flex flex-column white--text">
          <!-- <v-row class="d-flex flex-column justify-space-between"> -->
          <h1 class="brandName">{{ globalName }}</h1>
          <div class="text-center text-h4 mx-auto">
            Кофе для Вашей бодрости, настроения и здоровья!
          </div>
          <div class="text-center text-h3 ma-7">Наша команда</div>
          <v-carousel
            show-arrows-on-hover
            hide-delimiters
            class="d-flex justify-center"
            height="auto"
          >
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
                  v-model="item.rating"
                  background-color="green lighten-3"
                  color="green"
                  empty-icon="$ratingFull"
                  half-increments
                  readonly
                ></v-rating>
                <div pa-0>Рейтинг ({{ item.rating }})</div>
                <ShowReviews
                  v-if="showReviewsVisible"
                  @changeShowReviewsVisible="changeShowReviewsVisible"
                  :e_id="item.id"
                />
                <v-btn
                  depressed
                  color="primary"
                  v-bind="attrs"
                  v-on="on"
                  @click="employee_id = item.id"
                >
                  Оставить отзыв
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
      <v-card class="d-flex flex-column pa-10">
        <v-card-actions d-flex justify="end" class="pa-0">
          <v-spacer></v-spacer>
          <v-btn icon @click="dialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-actions>
        <h3>Поставьте оценку</h3>
        <v-text-field v-model="name" label="Введите свое имя"></v-text-field>
        <h5>Выберите необходимое количество звезд</h5>
        <v-rating
          v-model="rating"
          background-color="green lighten-3"
          color="green"
          empty-icon="$ratingFull"
          half-increments
          hover
        ></v-rating>
        <div black--text>Ваша оценка ({{ rating }})</div>
        <v-textarea solo v-model="description" name="input-7-4" label="Введите отзыв"></v-textarea>
        <v-btn depressed color="primary" @click="addReview">Оставить отзыв</v-btn>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import store from '../store/index';
import ShowReviews from './ShowReviews.vue';
import { mapActions } from 'vuex';

export default {
  name: 'About',
  data() {
    return {
      globalName: store.state.globalConst.brandName,
      items: store.state.employee,
      showReviewsVisible: false,
      dialog: false,
      employee_id: 0,
      name: '',
      rating: 5,
      date: new Date().toLocaleDateString(),
      description: '',
    };
  },
  components: {
    ShowReviews,
  },
  methods: {
    ...mapActions(['ADD_REVIEW']),
    changeShowReviewsVisible() {
      this.showReviewsVisible = !this.showReviewsVisible;
    },
    addReview() {
      let { employee_id, name, rating, date, description } = this;
      if (name && description) {
        const review = [{ employee_id, name, rating, date, description }];
        this.ADD_REVIEW(review);
        this.dialog = false;
        this.addReviewsVisible = !this.addReviewsVisible;
      } else {
        alert('Заполнены не все поля');
      }
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
