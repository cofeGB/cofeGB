<template>
  <v-app app>
    <Header v-if="publicMode" />
    <PrivateHeader v-else />
    <CofBaner v-if="advertisement && publicMode" @closeAdvertisement="closeAdvertisement" />
    <v-main>
      <router-view />
    </v-main>
    <CofDelivery v-if="publicMode" />
    <CofNavMenu v-if="publicMode" />
    <CofBasket v-if="publicMode" />
    <Footeer v-if="publicMode" />
  </v-app>
</template>

<script>
import Header from '@/components/Header.vue';
import PrivateHeader from '@/components/privHeader.vue';
import Footeer from '@/components/Footer.vue';
import CofDelivery from '@/components/CofDelivery/CofDelivery.vue';
import CofBasket from '@/components/CofBasket/CofBasket.vue';
import CofBaner from '@/components/Baners/CofBaner.vue';
import { mapActions } from 'vuex';

export default {
  name: 'App',
  components: {
    Header,
    Footeer,
    CofDelivery,
    CofBasket,
    CofBaner,
    PrivateHeader,
    CofNavMenu: () => import('./components/CofNavMenu.vue'),
  },
  data() {
    return {
      advertisement: true,
    };
  },
  methods: {
    ...mapActions([
      'GET_GLOBAL_CONST',
      'GET_NAV_MENU',
      'GET_LOYALTY',
      'GET_CATEGORIES',
      'GET_EMPLOYEE',
    ]),
    closeAdvertisement() {
      this.advertisement = false;
    },
    isPrivateRoute(routePath) {
      return routePath.split('/').findIndex(parhPart => parhPart == 'private') != -1;
    },
  },
  created() {
    this.GET_GLOBAL_CONST();
    this.GET_NAV_MENU();
    this.GET_LOYALTY();
    this.GET_CATEGORIES();
    this.GET_EMPLOYEE();
  },
  computed: {
    publicMode() {
      return !this.$store.getters.PRIVATE_MODE;
    },
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

.brandName {
  font-family: Playfair Display;
  font-weight: bold;
  font-size: 64px;
  line-height: 85px;
  color: white;
  text-align: center;
  @media (max-width: 450px) {
    font-size: 54px;
  }
}

.container {
  padding-top: 0;
}

.w100 {
  width: 100%;
}
</style>
