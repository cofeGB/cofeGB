<template>
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15968.205551418063!2d30.387016544514474!3d59.981483825584206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x469633c0a2ad668d%3A0x7e0f8c09698ee03e!2z0JrRg9GI0LXQu9C10LLRgdC60LDRjyDQtNC-0YAuLCAzINC60L7RgNC_0YPRgSAzLCDQodCw0L3QutGCLdCf0LXRgtC10YDQsdGD0YDQsywgMTk1MjIw!5e0!3m2!1sru!2sru!4v1640198380164!5m2!1sru!2sru"
    width="600"
    height="450"
    style="border: 0"
    allowfullscreen=""
    loading="lazy"
  ></iframe>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.list {
  background: none;
  border: 1px solid white;
  &-order {
    max-height: 300px;
  }
  &-item {
    min-height: fit-content;
    &-action {
      min-width: fit-content;
      align-items: center;
    }
  }
}
</style>
