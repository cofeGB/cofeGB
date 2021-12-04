<template>
  <div class="cofMenu">
    <p class="cofMenu-placehold" v-if="list.length === 0">Ничего не найдено</p>
    <menu-item v-for="item of list" :item="item" :key="item.id_product" :img="imgUrl"></menu-item>
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
      imgUrl: 'https://placehold.it/200x150',
    };
  },
};
</script>
