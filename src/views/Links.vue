<template>
  <v-col padless>
    <v-btn v-for="link in links" :key="link.title" text :to="link.path" class="my-2 link">
      {{ link.title }}
    </v-btn>
  </v-col>
</template>

<script>
import store from '@/store/index';
export default {
  name: 'links',
  data: () => ({
    links: store.state.globalConst.INFO_NAV_MENU,
  }),
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
