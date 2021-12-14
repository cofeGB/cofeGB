<template>
  <v-card class="d-flex flex-column">
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
    <v-btn depressed color="primary" @click="changeReviewsVisible">Оставить отзыв</v-btn>
  </v-card>
</template>
<script>
import { mapActions } from 'vuex';
export default {
  name: 'reviews',
  props: ['e_id'],
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
    ...mapActions(['ADD_REVIEW']),
    changeReviewsVisible() {
      this.employee_id = this.e_id;
      let { employee_id, name, rating, date, description } = this;
      const review = [{ employee_id, name, rating, date, description }];
      this.ADD_REVIEW(review);
      this.$emit('changeReviewsVisible');
    },
  },
};
</script>
<style lang="scss" scoped></style>
