<template>
  <a v-if="element === 'a'" class="btn" :href="href">
    <span class="push-icon">
      <slot></slot>
      <icon class="push-icon__icon" width="15px" height="15px" :name="icon" />
    </span>
  </a>
  <button v-else-if="element === 'button'" class="btn">
    <span class="push-icon">
      <slot></slot>
      <icon class="push-icon__icon" width="15px" height="15px" :name="icon" />
    </span>
  </button>
</template>

<script>
import icon from './../../icons/stories/Icon.vue';

export default {
  components: { icon },
  props: {
    href: {
      type: String,
      default: '',
    },
    icon: {
      type: String,
      default: 'chevron-right',
    },
    element: {
      type: String,
      default: 'a',
    },
  },
};
</script>
