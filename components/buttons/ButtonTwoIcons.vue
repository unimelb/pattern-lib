<template>
  <a
    :class="classes"
    :href="href"
    :disabled="disabled">
    <SvgIcon
      class="btn-two-icons__left-icon"
      :name="leftIcon"
      width="18px"
      height="18px"
      aria-hidden="true" />
    <p class="btn-two-icons__text"> {{ text }} </p>
    <SvgIcon
      class="btn-two-icons__right-icon"
      :name="rightIcon"
      width="15px"
      height="15px"
      aria-hidden="true" />
  </a>
</template>

<script>
import SvgIcon from '../icons/SvgIcon.vue';

export default {
  components: { SvgIcon },
  props: {
    href: {
      type: String,
      default: '#',
    },
    leftIcon: {
      type: String,
      default: 'chevron-right',
    },
    rightIcon: {
      type: String,
      default: 'chevron-right',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    color: {
      type: String,
      default: 'teal',
      validator: (value) => ['teal', 'orange', 'green'].includes(value),
    },
    text: {
      type: String,
      default: 'Insert button text',
    },
  },
  computed: {
    classes() {
      return [
        'btn-two-icons',
        `btn-two-icons--color-${this.color}`,
        {
          'btn-two-icons--disabled': this.disabled,
        },
      ];
    },
  },
};
</script>
