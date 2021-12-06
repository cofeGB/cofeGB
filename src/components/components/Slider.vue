<template>
  <v-carousel
    active-class="active"
    hide-delimiter-background
    show-arrows-on-hover
    cycle
    height="200"
  >
    <v-carousel-item
      v-for="(item, i) in items"
      :key="i"
      :src="item.src"
      :to="item.to"
      :target="item.target"
      :href="item.href"
    >
      <div class="inside" :style="item.style" :class="item.class">
        {{ item.text }}
      </div>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  props: {
    items: {
      type: [Array || Object],
      default: () => [],
    },
  },
};
</script>

<style lang="scss" scoped></style>
