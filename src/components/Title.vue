<template>
  <div class="text" :style="`font-size:${size}`">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Title',
  props: {
    size: {
      type: String,
      default: '16px',
    },
  },
};
</script>

<style lang="scss" scoped></style>
