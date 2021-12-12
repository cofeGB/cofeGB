<template>
  <v-container class="d-flex flex-column">
    <h3>Поставьте оценку</h3>
    <v-rating
      v-model="rating"
      background-color="green lighten-3"
      color="green"
      empty-icon="$ratingFull"
      half-increments
      hover
    ></v-rating>
    <div black--text>Оценка ({{ rating }})</div>
    <v-textarea solo name="input-7-4" label="Solo textarea"></v-textarea>
    <v-btn depressed color="primary">Оставить отзыв</v-btn>
  </v-container>
</template>
<script>
export default {
  name: 'reviews',
  data() {
    return {
      rating: 5,
    };
  },
};
</script>
<style lang="scss" scoped></style>
