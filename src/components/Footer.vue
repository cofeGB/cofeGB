<template>
  <div class="footer" color="rgba(86, 71, 66, 0.8)">
    <div class="footer__top d-flex justify-center">
      <Links class="footer__top d-flex justify-center" />
    </div>
    <v-row class="footer__main white--text mb-4" width="80vw">
      <v-col class="footer__main_block">
        <div class="footer__main_header">Меню</div>
        <v-list class="footer__main_links" color="rgb(0, 0, 0, 0.01)">
          <v-list-item
            v-for="item in foodNavMenu"
            :key="item.path"
            :to="{ path: item.path }"
            class="footer__main_link1"
          >
            <v-list-item-title class="footer__main_link" v-text="item.title"></v-list-item-title>
          </v-list-item>
        </v-list>
      </v-col>
      <v-col class="footer__main_block">
        <div class="footer__main_header">Контакты</div>
        <a class="footer__main_hashtag" phone>{{ globalConst.phone }}</a>
        <div>{{ globalConst.address }}</div>
        <div>
          <span>
            Режим работы: {{ globalConst.workTimeFrom }} - {{ globalConst.workTimeTo }} Ежедневно
          </span>
          <div class="footer__main_order">
            <div class="footer__main_ind" :class="{ active: isActive }"></div>
            <span v-if="isActive">Сейчас работаем</span>
            <span v-else>Сейчас закрыто</span>
          </div>
        </div>
      </v-col>
      <v-col class="footer__main_block">
        <div class="footer__main_header">Мы в соцсетях</div>
        <div class="mb-4">
          <span>
            <b>
              Ищите хештег <i class="footer__main_hashtag"> {{ globalConst.hashtag }}</i>
            </b>
          </span>
        </div>
        <div class="footer__main_social d-flex justify-center">
          <a href="https://instagram.com" target="_blank">
            <i class="fab fa-instagram fa-2x"></i>
          </a>
          <a href="https://facebook.com" target="_blank">
            <i class="fab fa-facebook fa-2x"></i>
          </a>
          <a href="https://vk.com" target="_blank">
            <i class="fab fa-vk fa-2x"></i>
          </a>
          <a href="https://twitter.com" target="_blank">
            <i class="fab fa-twitter-square fa-2x"></i>
          </a>
        </div>
      </v-col>
    </v-row>
    <v-row class="footer__bottom text-center white--text">
      <v-col>
        {{ new Date().getFullYear() }}
        <v-icon class="mx-5 mb-5 white--text">mdi-copyright</v-icon>
        {{ globalConst.brandName }}
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import store from '@/store/index';
import Links from '../views/Links.vue';
// import CallBack from '../views/CallBack.vue';

export default {
  name: 'Footer',
  components: {
    Links,
    // CallBack,
  },
  data() {
    return {
      showModal: false,
    };
  },
  methods: {
    showmodal() {
      this.showModal = !this.showModal;
    },
  },
  computed: {
    ...mapGetters(['GLOBAL_CONST']),
    isActive() {
      let now = new Date();
      let hour = now.getHours();
      if (
        store.state.globalConst.workTimeFrom <= hour &&
        hour <= store.state.globalConst.workTimeTo
      ) {
        return true;
      }
      return false;
    },
    foodNavMenu() {
      // return store.getters.FOOD_NAV_MENU.map(item => ({
      //   title: item.title,
      //   path: `/menu/${item.query}`,
      // }));
      return store.getters.FOOD_NAV_MENU.sort((a, b) => a.itemOrder - b.itemOrder);
    },
    globalConst() {
      return store.getters.GLOBAL_CONST;
    },
  },
};
</script>

<style lang="scss" scoped>
.footer {
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(86, 71, 66, 0.6);
  max-height: 300px;
  overflow: scroll;
  &__top {
    width: 100%;
    padding: 4px !important;
    display: flex;
    justify-content: center;
    background-color: rgba(86, 71, 66, 0.8);
    @media (max-width: 667px) {
      flex-direction: column;
    }
  }
  &__bottom {
    margin: 0;
    width: 100%;
    background-color: rgba(86, 71, 66, 0.8);
    padding: 2px 16px;
  }
  &__main {
    margin: 0 !important;
    width: 100%;
    display: flex;
    justify-content: space-between;
    @media (max-width: 667px) {
      flex-direction: column;
    }
    &_block {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      min-width: 250px;
      @media (max-width: 667px) {
        margin-top: 16px;
        text-align: center;
      }
    }
    &_order {
      display: flex;
      justify-content: center;
      align-items: center;
      @media (max-width: 667px) {
        margin-top: 16px;
      }
    }
    &_ind {
      width: 12px;
      height: 12px;
      background-color: #3b1fc4;
      border-radius: 50%;
      margin-right: 8px;
    }
    &_ul {
      padding: 0;
      // list-style-type: none;
    }
    &_link {
      min-height: 20px !important;
      text-decoration: none;
      color: #ffffff;
    }
    &_link:hover {
      text-decoration: none;
      color: #289991;
    }
    &_link1 {
      min-height: 30px !important;
    }
    &_links {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
    }

    &_header {
      text-align: center;
      font-size: 20px;
      font-weight: bold;
      // text-decoration: underline;
      margin-bottom: 16px;
      // color: #2d817c;
      @media (max-width: 667px) {
        display: none;
      }
    }
    &_social {
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    &_social > a {
      margin-right: 16px;
    }
    &_social > a.hover {
      color: #52ebe0;
    }
    &_hashtag {
      color: #ffffff;
    }
    &_hashtag:hover {
      color: #52ebe0;
    }
  }
  .fab {
    color: #fff;
  }
  .fab:hover {
    color: #52ebe0;
  }
  .active {
    background-color: #52ebe0;
  }
}
.v-list .v-list-item--active {
  color: 52ebe0;
}
.v-icon.v-icon {
  display: inline;
}
</style>
