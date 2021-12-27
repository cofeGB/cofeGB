<template>
  <v-row class="header__top">
    <v-col cols="1"></v-col>
    <v-col cols="10" padless class="header__top-center">
      <v-btn
        v-for="link in GLOBAL_CONST.INFO_NAV_MENU"
        :key="link.title"
        text
        :to="link.path"
        class="my-2 link"
      >
        {{ link.title }}
      </v-btn>
    </v-col>
    <v-col cols="1">
      <CallBack />
    </v-col>
  </v-row>
</template>

<script>
import { mapGetters } from 'vuex';
import CallBack from '../views/CallBack.vue';

export default {
  name: 'links',
  components: {
    CallBack,
  },
  computed: {
    ...mapGetters(['GLOBAL_CONST']),
  },
};
</script>

<style lang="scss" scoped>
.header__top-center {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.link {
  color: #ffffff;
}
.link:hover {
  background-color: #fff;
  color: #289991;
}
</style>
