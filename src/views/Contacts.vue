<template>
  <v-container class="d-flex justify-center">
    <v-card class="d-flex flex-column justify-space-between pa-2" width="960" height="auto">
      <v-card-title class="d-flex justify-center header-text"> Кофейня "Бодрит"</v-card-title>

      <div class="footer__contacts">
        <div class="footer__contacts-left">
          <div class="adress">г. Москва, Красная площадь, 1</div>
          <div class="mail">
            <a href="mailto:info@bodrit.ru">
              <i class="far fa-envelope mar"></i>
              info@bodrit.ru
            </a>
          </div>
          <div class="phone1">
            <a href="tel:+7-999-888-77-66">
              <i class="fas fa-mobile-alt marbig"></i>+7-999-888-77-66
            </a>
          </div>
        </div>

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
      </div>

      <v-card-text
        class="d-flex justify-center text--primary align-center flex-grow-1 flex-shrink-0 text-h5 mx-auto"
      >
        Режим работы:
      </v-card-text>
      <div class="text-center">Ежедневно с 08-00 до 23-00</div>
      <div class="text-center">Без выходных и праздников</div>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'About',
};
</script>

<style lang="scss" scoped></style>
