<template>
  <div id="app" height="25vh" width="100%">
    <v-carousel
      :cycle="true"
      height="60vh"
      :show-arrows="false"
      hide-delimiters
      interval="3000"
      :vertical="true"
      class="d-flex justify-center"
    >
      <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
        height="60vh"
        width="45vw"
        show-arrows="false"
        reverse="true"
        color="`${item.style}`"
        :to="item.to"
      >
        <v-card class="d-flex flex-column justify-center align-center pa-3 carusel">
          <h1>Наши акции</h1>
          <v-img
            :src="require(`../../assets/${item.src}`)"
            position="center center"
            max-height="50vh"
            max-width="40vw"
            alt="logo"
            contain
          ></v-img>
          <v-card-title class="text-h5">
            {{ item.text }}
          </v-card-title>
        </v-card>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import store from '@/store/index';
export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters(['GLOBAL_CONST']),
    items() {
      return store.getters.GLOBAL_CONST.STOCKS;
    },
  },
};
</script>

<style></style>
