<template>
  <v-card :outlined="outlined" :tile="tile" :shaped="shaped">
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="text-h5 mb-1"> {{ title }} </v-list-item-title>
        <v-list-item-subtitle>{{ subtitle }}</v-list-item-subtitle>
        <slot name="content" />
      </v-list-item-content>

      <v-list-item-avatar :size="avatarsize" :color="avatarcolor">
        <slot name="avatar" />
      </v-list-item-avatar>
    </v-list-item>

    <v-card-actions>
      <slot name="actions" />
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'Card',
  props: {
    avatarcolor: {
      type: String,
      default: '',
    },
    outlined: {
      type: Boolean,
      default: false,
    },
    tile: {
      type: Boolean,
      default: false,
    },
    shaped: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: '',
    },
    subtitle: {
      type: String,
      default: '',
    },
    avatarsize: {
      type: String,
      default: '',
    },
  },
};
</script>

<style lang="scss" scoped></style>
