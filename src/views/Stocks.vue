<template>
  <div class="stock__main">
    <!-- <h1>Наши акции</h1> -->
    <a
      v-for="(item, i) in items"
      :key="i"
      show-arrows="false"
      reverse="true"
      color="`${item.style}`"
      :href="item.to"
      class="stock__links"
    >
      <v-card class="d-flex flex-column justify-center align-center stock__link pa-3">
        <!-- <h1>Наши акции</h1> -->
        <v-img
          :src="require(`@/assets/${item.src}`)"
          position="center center"
          alt="logo"
          contain
          class="stock__img"
        ></v-img>
        <v-card-title class="text-h5">
          {{ item.text }}
        </v-card-title>
      </v-card>
    </a>
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

<style lang="sass" scoped>
.stock__main
  display: flex
  // grid-template-columns: repeat (3, 1fr)
  justify-content: space-around
  gap: 30px
  flex: 0 1 auto
  flex-wrap: wrap

.stock__links
  // width: 100%
  height: 25vh

.stock__links
  margin-bottom: 25px
  width: 30%
  min-width: 600px
  margin: 30px 0
  transition: 1s ease

.stock__links:hover
  transform: scale(1.1)

.stock__img
  height: 20vh
</style>
