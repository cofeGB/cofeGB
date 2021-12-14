<template>
  <v-row justify="center">
    <v-container class="d-flex flex-column white--text">
      <!-- <v-row class="d-flex flex-column justify-space-between"> -->
      <h1 class="brandName">{{ globalName }}</h1>
      <div class="text-center text-h4 mx-auto">Кофе для Вашей бодрости, настроения и здоровья!</div>
      <v-card class="d-flex flex-column justify-center align-center">
        <div class="text-center text-h3 ma-7">Наша команда</div>
        <v-carousel
          :cycle="cycled"
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
              <v-card-actions>
                <v-btn
                  color="primary"
                  @click="
                    employee_id = item.id;
                    cycled = false;
                    dialog1 = true;
                  "
                >
                  Оставить отзыв
                </v-btn>
                <v-btn
                  @click="
                    employee_id = item.id;
                    changeShowReviewsVisible();
                    dialog2 = true;
                  "
                  color="primary"
                >
                  Посмотреть отзывы
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-carousel-item>
        </v-carousel>
      </v-card>
      <!-- </v-row> -->
    </v-container>

    <v-dialog v-model="dialog1" max-width="500px">
      <v-card class="d-flex flex-column pa-5">
        <v-card-actions d-flex justify="end" class="pa-0">
          <v-spacer></v-spacer>
          <v-tooltip top>
            <template v-slot:activator="{ on, attrs }" position-x="5" position-y="5">
              <v-btn
                icon
                @click="
                  dialog1 = false;
                  cycled = true;
                "
                v-bind="attrs"
                v-on="on"
              >
                <v-icon>mdi-close</v-icon>
              </v-btn>
            </template>
            <span>Закрыть форму</span>
          </v-tooltip>
        </v-card-actions>
        <h3>Поставьте оценку {{ employee_id }}</h3>
        <v-text-field v-model="user_name" label="Введите свое имя"></v-text-field>
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
        <v-overlay :absolute="absolute" :value="overlay" @click="overlay = false">
          Не все поля заполнены
        </v-overlay>
      </v-card>
    </v-dialog>

    <v-dialog v-model="dialog2" max-width="1000px">
      <v-card class="d-flex flex-column pa-5">
        <v-card-actions d-flex justify="end" class="pa-0">
          <v-spacer></v-spacer>
          <v-tooltip top>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                icon
                @click="
                  dialog2 = false;
                  cycled = true;
                "
                v-bind="attrs"
                v-on="on"
              >
                <v-icon>mdi-close</v-icon>
              </v-btn>
            </template>
            <span>Закрыть форму</span>
          </v-tooltip>
        </v-card-actions>

        <h4>Всего отзывов: ({{ employeeReviews.length }})</h4>
        <v-carousel
          cycle
          show-arrows-on-hover
          hide-delimiters
          class="d-flex justify-center"
          height="auto"
        >
          <v-carousel-item v-for="(item, i) in employeeReviews" :key="i" height="auto">
            <v-card class="d-flex flex-column justify-center align-center pa-3" width="500">
              <div black--text>Дата ({{ item.date }})</div>
              <div black--text>Посетитель ({{ item.user_name }})</div>
              <div class="d-flex align-center">
                <v-rating
                  v-model="item.rating"
                  background-color="green lighten-3"
                  color="green"
                  empty-icon="$ratingFull"
                  half-increments
                ></v-rating>
                <div black--text>({{ item.rating }})</div>
              </div>

              <div black--text>{{ item.description }}</div>
            </v-card>
          </v-carousel-item>
        </v-carousel>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import store from '../store/index';
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'About',
  data() {
    return {
      globalName: store.state.globalConst.brandName,
      reviews: [],
      employeeReviews: [],
      items: store.state.employee,
      showReviewsVisible: false,
      dialog1: false,
      dialog2: false,
      employee_id: 0,
      user_name: '',
      rating: 5,
      date: new Date().toLocaleDateString(),
      description: '',
      absolute: true,
      overlay: false,
      cycled: true,
    };
  },
  methods: {
    ...mapActions(['ADD_REVIEW', 'GET_EMPLOYEE_REVIEWS_LIST']),
    ...mapGetters(['EMPLOYEE_REVIEWS']),

    changeShowReviewsVisible() {
      this.reviews = this.EMPLOYEE_REVIEWS();
      this.employeeReviews = this.reviews.filter(emp => emp.employee_id === this.employee_id);
      this.showReviewsVisible = !this.showReviewsVisible;
      this.cycled = false;
    },
    addReview() {
      let { employee_id, user_name, rating, date, description } = this;
      if (user_name && description) {
        const review = [{ employee_id, user_name, rating, date, description }];
        this.ADD_REVIEW(review);
        this.dialog1 = false;
        this.addReviewsVisible = !this.addReviewsVisible;
        this.cycled = true;
      } else {
        this.overlay = true;
      }
    },
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

<style lang="scss" scoped></style>
