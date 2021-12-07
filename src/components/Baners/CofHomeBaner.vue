<template>
  <div class="advertisement">
    <Slider :items="items" />
    <v-btn class="advertisement-close" icon color="primary"
      ><v-icon>mdi-close-octagon-outline</v-icon></v-btn
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
          to: 'menu/starters',
          text: 'Рекламный текс',
          style: 'red',
          class: 'red',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
          href: 'https://github.com/cofeGB?tab=repositories',
          target: '_blank',
          text: 'Может быть любым',
          style: 'primery',
          class: 'primary',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
          text: 'И с любыми стилями',
          style: 'green',
          class: 'green',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
          text: 'Почти с любыми',
          style: 'orange',
          class: 'orange',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.advertisement {
  position: relative;
  &-close {
    position: absolute;
    top: 0;
    right: 0;
    @media (max-width: 450px) {
      visibility: visible;
    }
  }
}
</style>
