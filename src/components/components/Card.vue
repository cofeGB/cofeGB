<template>
  <v-card
    :outlined="outlined"
    :hover="hover"
    :tile="tile"
    :shaped="shaped"
    :class="classes"
    :color="color"
    :elevation="elevation"
  >
    <slot name="content" />
    <v-list-item v-if="title || subtitle">
      <v-list-item-content>
        <v-list-item-title class="mb-1"> {{ title }} </v-list-item-title>
        <v-list-item-subtitle>{{ subtitle }}</v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar v-if="avatarcolor" :size="avatarsize" :color="avatarcolor">
        <slot name="avatar" />
      </v-list-item-avatar>
    </v-list-item>

    <v-card-actions :class="actionsClass">
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
    actionsClass: {
      type: String,
      default: '',
    },
    outlined: {
      type: [Boolean, String],
      default: false,
    },
    hover: {
      type: [Boolean, String],
      default: false,
    },
    tile: {
      type: [Boolean, String],
      default: false,
    },
    shaped: {
      type: [Boolean, String],
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
    classes: {
      type: String,
      default: 'card',
    },
    elevation: {
      type: [String, Number],
      default: '',
    },
    color: {
      type: String,
      default: 'transparent',
    },
  },
};
</script>

<style lang="scss" scoped></style>
