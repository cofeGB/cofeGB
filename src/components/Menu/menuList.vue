<template>
  <div>
    <div class="menu-placehold" v-if="list.length === 0">
      <p>Ничего не найдено</p>
    </div>
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
.menu-placehold {
  display: flex;
  justify-content: center;
  height: 300px;
  align-items: center;
  color: white;
  text-align: center;
  font-size: 36px;
  line-height: 49px;
  text-transform: uppercase;
}
.menuList {
  padding: 32px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 32px;

  @media (max-width: 580px) {
    display: flex;
    justify-content: space-around;
    align-content: center;
    flex-wrap: wrap;
  }
}
</style>
