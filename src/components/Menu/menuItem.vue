<template>
  <div class="product-desc">
    {{ item }}
  </div>
</template>

<script>
export default {
  name: 'menuItem',
  props: ['item', 'img'],
};
</script>
