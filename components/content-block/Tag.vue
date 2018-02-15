<template>
  <component
    :is="element"
    :class="classes"
    :href="isLink && href">
    <SvgIcon class="push-icon__icon" width="18px" height="18px" name="tag" />
    <slot></slot>
  </component>
</template>

<script>
import SvgIcon from '../icons/SvgIcon.vue';

export default {
  components: { SvgIcon },
  props: {
    element: {
      type: String,
      default: 'span',
      validator: val => ['a', 'div', 'span'].indexOf(val) !== -1,
    },
    href: {
      type: String,
      default: '#',
    },
  },
  computed: {
    classes() {
      return {
        tag: true,
      };
    },
    isLink() {
      return this.element === 'a';
    },
  },
};
</script>
