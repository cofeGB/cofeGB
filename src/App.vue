<template>
  <v-app app>
    <Header />
    <v-main>
      <router-view />
    </v-main>
    <CofDelivery />
    <CofNavMenu />
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
    CofNavMenu: () => import('./components/CofNavMenu.vue'),
  },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;600;800&family=Playfair+Display:wght@400;600;900&display=swap');

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
.primary-text {
  color: #25dcd1;
}
#app {
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('assets/img/backgroundImage.png');
  background-attachment: fixed;
}
</style>
