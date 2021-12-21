<template>
  <v-row justify="center" class="ma-0">
    <v-container class="d-flex flex-column white--text align-center">
      <h1 class="brandName">{{ globalConst.brandName }}</h1>
      <div class="text-center text-h4 mx-auto mb-10">
        Кофе для Вашей бодрости, настроения и здоровья!
      </div>
      <v-card class="main d-flex flex-column justify-center align-center" width="800">
        <div class="text-center text-h3 ma-7">Наша команда</div>
        <v-carousel
          :cycle="cycled"
          show-arrows-on-hover
          hide-delimiters
          class="d-flex justify-center"
          height="auto"
        >
          <v-carousel-item v-for="(item, i) in items" :key="i" height="auto">
            <v-card class="d-flex flex-column justify-center align-center pa-3">
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
              <v-card-subtitle class="text-h4 mt-3">
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
        <h3>Поставьте оценку</h3>
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
      <v-card class="d-flex flex-column pa-5" min-height="600px">
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
        <h1>{{ employeer.name }}</h1>
        <h4>Всего отзывов: {{ employeeReviews.length }}</h4>
        <v-carousel
          cycle
          show-arrows-on-hover
          hide-delimiters
          class="d-flex justify-center"
          height="auto"
        >
          <v-carousel-item v-for="(item, i) in employeeReviews" :key="i" height="auto">
            <v-card class="d-flex flex-column justify-center align-center pa-3 mt-3" width="500">
              <div>
                Посетитель (<b>{{ item.user_name }}</b
                >)
              </div>
              <div>
                Дата (<b>{{ item.date }}</b
                >)
              </div>
              <div class="d-flex align-center my-5">
                <v-rating
                  v-model="item.rating"
                  background-color="green lighten-3"
                  color="green"
                  empty-icon="$ratingFull"
                  half-increments
                ></v-rating>
                <div>({{ item.rating }})</div>
              </div>

              <div class="description">{{ item.description }}</div>
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
      globalConst: store.state.globalConst,
      reviews: [],
      employeeReviews: [],
      items: store.state.employee,
      showReviewsVisible: false,
      dialog1: false,
      dialog2: false,
      employee_id: 0,
      employeer: {},
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
      let employeerMap = this.items.filter(emp => emp.id === this.employee_id);
      this.employeer = employeerMap[0];
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
};
</script>

<style lang="scss" scoped>
.main {
  border-radius: 15px;
}
.v-image__image {
  top: 5px;
  // background-color: #ddd
  border: 1px solid #ddd;
}
.description {
  padding: 10px;
  width: 500px;
  min-height: 200px;
  border: 1px solid rgb(163, 231, 197);
}
</style>
