<template>
  <div>
    <v-navigation-drawer
      app
      dark
      left
      floating
      clipped
      temporary
      class="menu"
      v-model="show"
      width="360"
    >
      <div class="menu__container d-flex flex-column">
        <v-list nav dense>
          <router-link
            class="menu__item_link"
            v-for="(item, index) in navMenu"
            :key="index"
            :to="{ path: item.path }"
          >
            <v-list-item :class="{ menu__item_active: $route.path == item.path }">
              <v-list-item-title>
                <i :class="item.icon" v-if="item.icon"></i>
                <b class="menu__item_text">{{ item.title }}</b>
              </v-list-item-title>
            </v-list-item>
          </router-link>
        </v-list>
      </div>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { eventBus } from '@/main';
const NAV_MENU = [
  {
    title: 'Выйти',
    path: '/',
    icon: 'fas fa-door-open icon',
  },
  {
    title: 'Панель заказов',
    path: '/private/order-desk',
  },
  {
    title: 'Касса',
    path: '/private/#',
  },
  {
    title: 'Прием товара',
    path: '/private/#',
  },
  {
    title: 'Склад',
    path: '/private/wharehouse',
  },
  {
    title: 'Стоп-лист',
    path: '/private/stopList',
  },
];

export default {
  name: 'PrivateCofNavMenu',
  data: () => ({
    show: false,
    navMenu: NAV_MENU,
  }),
  created() {
    eventBus.$on('openPrivateNavMenu', () => {
      this.show = !this.show;
    });
  },
  beforeDestroy() {
    eventBus.$off('openPrivateNavMenu');
  },
  methods: {},
  computed: {
    theme() {
      return this.$vuetify.theme.dark ? 'dark' : 'light';
    },
  },
};
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Open+Sans&family=Playfair+Display:wght@700;900&display=swap');
.icon {
  font-size: 25px;
  padding: 5px;
}
.menu {
  padding-top: 25px;
  background: rgba(5, 4, 3, 0.863) !important;
  &__container {
    height: 100%;
  }
  &__item_link {
    text-decoration: none;
  }
  &__item_text {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 33px;
    color: #ffffff;

    &:hover {
      color: rgba(37, 220, 209, 1);
    }
  }
  .v-list-item {
    padding-top: 12px;
    padding-right: 8px;
    padding-bottom: 12px;
    padding-left: 40px;
  }
  &__item_active {
    background: rgba(102, 99, 96, 0.747) !important;
  }
  .v-list--nav {
    padding: 0;
  }
}
</style>
