<template>
  <v-tooltip
    :bottom="!!bottom || !(top || left || right)"
    :top="top"
    :left="left"
    :right="right"
    class="tooltip"
    :content-class="contentClass || ''"
    :disabled="disabled"
    v-bind="$attrs"
  >
    <template v-slot:activator="{ on, attrs }">
      <span v-bind="attrs" v-on="on">
        <slot></slot>
      </span>
    </template>
    <span>{{ content }}</span>
  </v-tooltip>
</template>

<script>
export default {
  name: 'coftooltip',
  props: {
    content: String,
    top: { type: [Boolean, String] },
    bottom: {
      type: [Boolean, String],
    },
    left: [Boolean, String],
    right: [Boolean, String],
    classes: {
      type: String,
      default: '',
    },
    contentClass: {
      type: String,
      default: 'tooltip',
    },
    disabled: {
      type: [Boolean, String],
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.tooltip {
  background: #25dcd1;
  color: rgba(48, 24, 13, 0.9);
}
</style>
