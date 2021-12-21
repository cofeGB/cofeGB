<template>
  <v-tooltip
    :bottom="bottom"
    :top="top"
    :left="left"
    :right="right"
    :content-class="contentClass"
    :disabled="disabled"
    v-bind="$attrs"
    :class="classes"
  >
    <template v-slot:activator="{ on, attrs }">
      <span v-bind="attrs" v-on="on" :class="activatorClass">
        <slot></slot>
      </span>
    </template>
    <span class="text-body-1" :style="`color: ${textColor}`">{{ content }}</span>
  </v-tooltip>
</template>

<script>
export default {
  name: 'coftooltip',
  props: {
    content: String,
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
    classes: {
      type: String,
      default: '',
    },
    textColor: {
      type: String,
      default: '',
    },
    contentClass: {
      type: String,
      default: 'tooltip',
    },
    activatorClass: {
      type: String,
      default: '',
    },
    disabled: {
      type: [Boolean, String],
      default: false,
    },
  },
};
</script>

<style lang="scss">
.tooltip {
  background: #25dcd1 !important;
  color: rgba(48, 24, 13, 0.9) !important;
  opacity: 1 !important;
}
</style>
