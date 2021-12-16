<template>
  <div class="footer">
    <div class="footer__top">
      <span class="footer__top_hashtag">#COFFEEGB</span>
      <span>&nbsp;&mdash; CoffeeGB в фотографиях наших клиентов</span>
    </div>
    <div class="footer__main">
      <div class="footer__main_block">
        <h3 class="footer__main_header">О CoffeeGB</h3>
        <ul class="footer__main_ul">
          <li v-for="(item, index) in footerNav" :key="index">
            <router-link :to="{ path: item.path }" class="footer__main_link">
              <span>{{ item.title }}</span>
            </router-link>
          </li>
        </ul>
      </div>
      <div class="footer__main_block">
        <h3 class="footer__main_header">Сделать заказ</h3>
        <p>+7 (123) 456-77-88</p>
        <div>
          <div class="footer__main_order">
            <div class="footer__main_ind" :class="{ active: isActive }"></div>
            <span v-if="isActive">Работаем сейчас</span>
            <span v-else>Сейчас закрыто</span>
          </div>
          <span>Пн-Вс: 10 - 05</span>
        </div>
      </div>
      <div class="footer__main_block">
        <h3 class="footer__main_header">Мы в соцсетях</h3>
        <div class="footer__main_social">
          <div>
            <i class="fa fa-instagram fa-2x"></i>
          </div>
          <div>
            <i class="fa fa-facebook-square fa-2x"></i>
          </div>
          <div>
            <i class="fa fa-vk fa-2x"></i>
          </div>
          <div>
            <i class="fa fa-twitter-square fa-2x"></i>
          </div>
        </div>
      </div>
    </div>
    <div class="footer__bottom">
      <span class="footer__bottom_text">&copy; CoffeGB, 2021 &ndash; 2022</span>
    </div>
  </div>
</template>
<script>
const FOOTER_NAV = [
  {
    title: 'Акции',
    path: '/promo',
  },
  {
    title: 'Доставка и оплата',
    path: '/delivery',
  },
  {
    title: 'Контакты',
    path: '/contacts',
  },
];
export default {
  name: 'dishFooter',
  data: () => ({
    footerNav: FOOTER_NAV,
  }),
  computed: {
    isActive() {
      let now = new Date();
      let hour = now.getHours();
      if (10 <= hour <= 5) {
        return true;
      }
      return false;
    },
  },
};
</script>
<style lang="scss" scoped>
@import url(https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css);
.footer {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  &__top {
    width: 100%;
    padding: 16px;
    display: flex;
    justify-content: center;
    background-color: #52ebe0;
    margin-bottom: 32px;
    &_hashtag {
      color: #00746c;
    }
  }
  &__bottom {
    width: 100%;
    background-color: rgb(206, 206, 206);
    padding: 16px;
    &_text {
      width: 80%;
    }
  }
  &__main {
    width: 80%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 32px;
    @media (max-width: 667px) {
      flex-direction: column;
    }
    &_block {
      @media (max-width: 667px) {
        margin-top: 16px;
        text-align: center;
      }
    }
    &_order {
      display: flex;
      align-items: center;
      @media (max-width: 667px) {
        margin-top: 16px;
        justify-content: center;
      }
    }
    &_ind {
      width: 12px;
      height: 12px;
      background-color: #eb6952;
      border-radius: 50%;
      margin-right: 8px;
    }
    &_ul {
      padding: 0;
      list-style-type: none;
    }
    &_link {
      text-decoration: none;
      color: #289991;
    }
    &_header {
      margin-bottom: 16px;
      color: rgb(117, 117, 117);
      @media (max-width: 667px) {
        display: none;
      }
    }
    &_social {
      display: flex;
      @media (max-width: 667px) {
        justify-content: center;
      }
    }
    &_social > div {
      margin-right: 16px;
    }
  }
  .active {
    background-color: #52ebe0;
  }
}
</style>
