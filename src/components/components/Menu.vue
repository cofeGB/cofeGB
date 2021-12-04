<template>
  <v-menu
    :top="top"
    :right="right"
    :bottom="bottom"
    :left="left"
    :offset-x="offsetX"
    :offset-y="offsetY"
    :content-class="contentClass"
    :open-on-hover="hoverOpen"
    :open-delay="delay"
    :transition="transition"
    :origin="origin"
    :max-width="maxW"
    :min-width="minW"
    :absolute="absolute"
    :position-y="positionY"
    :position-x="positionX"
    :close-on-content-click="contentClick"
  >
    <template v-slot:activator="{ on, attrs }">
      <div v-bind="attrs" v-on="on" :class="activatorClass">
        <slot name="activator" />
      </div>
    </template>
    <slot name="content" />
  </v-menu>
</template>

<script>
export default {
  props: {
    offsetX: {
      type: [Boolean, String],
      default: false,
    },
    offsetY: {
      type: [Boolean, String],
      default: false,
    },
    top: {
      type: [Boolean, String],
      default: false,
    },
    right: {
      type: [Boolean, String],
      default: false,
    },
    bottom: {
      type: [Boolean, String],
      default: true,
    },
    left: {
      type: [Boolean, String],
      default: false,
    },
    hoverOpen: {
      type: [Boolean, String],
      default: false,
    },
    absolute: {
      type: [Boolean, String],
      default: false,
    },
    delay: {
      type: [Number, String],
      default: 0,
    },
    maxW: {
      type: [Number, String],
      default: 0,
    },
    minW: {
      type: [Number, String],
      default: 0,
    },
    contentClick: {
      type: Boolean,
      default: true,
    },
    positionY: {
      type: Number,
      default: 0,
    },
    positionX: {
      type: Number,
      default: 0,
    },
    activatorClass: {
      type: String,
      default: null,
    },
    contentClass: {
      type: String,
      default: null,
    },
    transition: {
      type: String,
      default: null,
    },
    origin: {
      type: String,
      default: null,
    },
  },
};
</script>

<style lang="scss" scoped></style>
