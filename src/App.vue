<template>
  <v-app app>
    <Header />
    <v-main>
      <router-view />
    </v-main>
    <CofDelivery />
    <Footeer />
  </v-app>
</template>

<script>
import Header from '@/components/Header.vue';
import Footeer from '@/components/Footer.vue';
import CofDelivery from '@/components/CofDelivery/CofDelivery.vue';

export default {
  name: 'App',
  components: {
    Header,
    Footeer,
    CofDelivery,
  },
};
</script>
<style lang="scss">
::-webkit-scrollbar {
  width: 6px;
  height: 8px;
  background-color: rgba(148, 145, 144, 0.9);
  margin: 2px;
}

::-webkit-scrollbar-thumb {
  background-color: #25dcd1;
  border-radius: 9em;
  box-shadow: inset 1px 1px 10px #f3faf7;
}

::-webkit-scrollbar-thumb:hover {
  background-color: #0eaf64;
}

.ellipsis {
  max-width: 80%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.w100 {
  width: 100% !important;
}
.primary-text {
  color: #25dcd1;
}
</style>
