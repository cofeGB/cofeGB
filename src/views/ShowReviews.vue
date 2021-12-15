<template>
  <v-container class="d-flex flex-column">
    <h3>Работник</h3>
    <v-carousel
      cycle
      show-arrows-on-hover
      hide-delimiters
      class="d-flex justify-center"
      height="auto"
    >
      <v-carousel-item v-for="(item, i) in employeeReviews" :key="i" height="auto">
        <v-card class="d-flex flex-column justify-center align-center pa-3" width="500">
          <v-rating
            v-model="item.rating"
            background-color="green lighten-3"
            color="green"
            empty-icon="$ratingFull"
            half-increments
          ></v-rating>
          <div black--text>Ваша оценка ({{ item.rating }})</div>
          <div black--text>{{ item.description }}</div>
        </v-card>
      </v-carousel-item>
    </v-carousel>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: 'showreviews',
  props: ['employeeReviews'],
  data() {
    return {
      employee_id: 0,
      name: '',
      rating: 5,
      date: new Date().toLocaleDateString(),
      description: '',
    };
  },
  methods: {
    ...mapActions(['GET_EMPLOYEE_REVIEWS_LIST']),
    changeReviewsVisible() {
      this.employee_id = this.e_id;
      let { employee_id, name, rating, date, description } = this;
      const review = [{ employee_id, name, rating, date, description }];
      this.ADD_REVIEW(review);
      this.$emit('changeReviewsVisible');
    },
  },
  // created: {
  //   reviews = employeeReviews
  // }
};
</script>
<style lang="scss" scoped></style>
