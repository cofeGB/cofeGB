<template>
  <v-card
    :outlined="outlined"
    :hover="hover"
    :tile="tile"
    :shaped="shaped"
    :class="classes"
    :color="color"
    :elevation="elevation"
    id="card"
  >
    <slot name="content" />
    <v-card-actions v-if="action" :class="action">
      <slot name="actions" />
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'Card',
  props: {
    action: {
      type: Boolean,
      default: false,
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
