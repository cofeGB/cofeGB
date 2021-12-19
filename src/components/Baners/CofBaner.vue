<template>
  <div class="advertisement mt-16">
    <tooltip left content="Закрыть рекламы">
      <v-btn class="advertisement-close" icon color="primary" @click="$emit('closeAdvertisement')"
        ><v-icon>mdi-close-octagon-outline</v-icon></v-btn
      >
    </tooltip>
    <Slider :items="items" />
  </div>
</template>

<script>
import Tooltip from '../components/Tooltip.vue';
export default {
  components: { Tooltip },
  data() {
    return {
      items: [
        {
          src: 'https://assets.simpleviewinc.com/simpleview/image/fetch/c_fill,h_760,q_75,w_1900/https://assets.simpleviewinc.com/simpleview/image/upload/crm/wichita/Coffee-Placeholder-Visit-Wichita-Header_F987B6B9-5056-A36A-07BC5B735902EB4E-f987b51a5056a36_f987b71c-5056-a36a-07799e7a0fda9778.jpg',
          to: '/menu/starters',
          text: 'Рекламный текс',
          style: 'red',
          class: 'red',
        },
        {
          src: 'https://sunbury.org.au/wp-content/uploads/2015/10/video-placeholder-coffee.jpg',
          href: 'https://github.com/cofeGB?tab=repositories',
          target: '_blank',
          text: 'Может быть любым',
          style: 'primery',
          class: 'primary',
        },
        {
          src: 'https://as2.ftcdn.net/v2/jpg/02/76/35/39/1000_F_276353920_LYBJg7bylEGmGJJhfFP7waS1kI1jbC4m.jpg',
          text: 'И с любыми стилями',
          style: 'green',
          class: 'green',
        },
        {
          src: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/cup-of-coffee-on-colored-background-royalty-free-image-875681938-1543862983.jpg?crop=0.680xw:1.00xh;0.164xw,0&resize=980:*',
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
    right: 0;
    top: 0;
    z-index: 2;
    @media (max-width: 450px) {
      visibility: visible;
    }
  }
}
</style>
