<template>
  <v-container class="d-flex flex-column align-center">
    <!-- <h1 class="brandName">{{ globalConst.brandName }}</h1> -->

    <v-card class="d-flex flex-column justify-space-between pa-4 mt-5" width="960" height="auto">
      <div class="footer__contacts">
        <div class="footer__contacts-left">
          <div class="mail">
            <a href="mailto:info@bodrit.ru">
              <i class="far fa-envelope mar pa-4"></i>
              info@bodrit.ru
            </a>
          </div>
        </div>
        <div class="footer__contacts-right">
          <div class="phone1">
            <a href="tel:+7-999-888-77-66">
              <i class="fas fa-mobile-alt marbig pa-4"></i>{{ globalConst.phone }}
            </a>
          </div>
        </div>
      </div>

      <div class="adress text-center ma-4">{{ globalConst.address }}</div>
      <div class="footer__map">
        <iframe
          class="footer__map-frame"
          src="https://yandex.ru/map-widget/v1/-/CCUunWh~WA"
          width="100%"
          height="300"
          frameborder="1"
          allowfullscreen="true"
        >
        </iframe>
      </div>

      <v-card-text
        class="d-flex justify-center text--primary align-center flex-grow-1 flex-shrink-0 text-h5 mx-auto text-underline"
      >
        Режим работы:
      </v-card-text>
      <div class="text-center">
        Ежедневно с {{ globalConst.workTimeFrom }} до {{ globalConst.workTimeTo }}
      </div>
      <div class="text-center">Без выходных и праздников</div>
    </v-card>
  </v-container>
</template>

<script>
import store from '@/store/index';

// import { mapGetters } from 'vuex';

export default {
  name: 'contacts',
  computed: {
    globalConst() {
      return store.getters.GLOBAL_CONST;
    },
  },
};
</script>

<style lang="scss" scoped>
.footer__contacts {
  display: flex;
  justify-content: space-between;
}
.adress {
  text-decoration: underline;
}
</style>
