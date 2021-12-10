<template>
  <div>
    <PrivOrderCard />
    <PrivOrderCard />
    <PrivOrderCard />
  </div>
</template>

<script>
export default {
  name: 'PrivOrderList',
  components: {
    PrivOrderCard: () => import('./PrivOrderCard.vue'),
  },
};
</script>
