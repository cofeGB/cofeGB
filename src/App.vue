<template>
  <v-app app dark>
    <Header />
    <v-main>
      <router-view />
    </v-main>
    <Footeer />
  </v-app>
</template>

<script>
import Header from '@/components/Header.vue';
import Footeer from '@/components/Footer.vue';

export default {
  name: 'App',
  components: {
    Header,
    Footeer,
  },
};
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;600;800&family=Playfair+Display:wght@400;600;900&display=swap');
</style>
