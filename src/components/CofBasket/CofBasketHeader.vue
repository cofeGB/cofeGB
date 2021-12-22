<template>
  <v-toolbar dark color="secondery">
    <v-btn text outlined @click="CLOSE_MODAL()">
      <span class="log">Войти или зарегестрироваться</span>
      <v-icon class="ml-2">mdi-account-arrow-left-outline</v-icon>
    </v-btn>
    <v-spacer></v-spacer>
    <v-btn icon dark @click="CLOSE_MODAL()">
      <v-icon>mdi-close</v-icon>
    </v-btn>
  </v-toolbar>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  methods: {
    ...mapActions(['CLOSE_MODAL']),
  },
};
</script>

<style lang="scss" scoped>
.log {
  @media (max-width: 760px) {
    display: none;
  }
}
</style>
