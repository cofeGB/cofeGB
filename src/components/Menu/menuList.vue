<template>
  <div>
    <p class="menu-placehold" v-if="list.length === 0">Ничего не найдено</p>
    <div class="menuList px-3">
      <menu-item
        v-for="item of list"
        class="ma-2"
        :item="item"
        :key="item.guid"
        :img="imgUrl"
      ></menu-item>
    </div>
  </div>
</template>

<script>
import menuItem from './menuItem.vue';
export default {
  name: 'menuList',
  props: ['list'],
  components: {
    menuItem,
  },
  data() {
    return {
      imgUrl: require('../../assets/img/image2.jpg'),
    };
  },
};
</script>

<style lang="scss" scoped>
.menuList {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (max-width: 580px) {
    justify-content: center;
  }
}
</style>
