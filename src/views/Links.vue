<template>
  <v-col padless>
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
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'links',
  computed: {
    ...mapGetters(['GLOBAL_CONST']),
  },
};
</script>

<style lang="scss" scoped>
.link {
  color: #ffffff;
}
.link:hover {
  background-color: #fff;
  color: #289991;
}
</style>
