<template>
  <div>
    <p class="menu-placehold" v-if="list.length === 0">Ничего не найдено</p>
    <div class="menuList">
      <menu-item v-for="item of list" :item="item" :key="item.id_product" :img="imgUrl"></menu-item>
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

<style lang="sass" scoped>
.menuList
  padding: 32px
  display: grid
  grid-template-columns: repeat(4, 260px)
  grid-gap: 32px
</style>
