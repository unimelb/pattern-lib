<template>
  <component :is="element" class="btn" :class="classes" :href="element === 'a' ? href : false">
    <span v-if="!noIcon" class="push-icon">
      <slot></slot>
      <SvgIcon class="push-icon__icon" width="15px" height="15px" :name="icon" />
    </span>
    <slot v-if="noIcon"></slot>
  </component>
</template>

<script>
export default {
  props: {
    href: {
      type: String,
    },
    icon: {
      type: String,
      default: 'chevron-right',
    },
    size: {
      type: String,
    },
    width: {
      type: String,
    },
    inverted: {
      type: Boolean,
      default: false,
    },
    noIcon: {
      type: Boolean,
      default: false,
    },
    element: {
      type: String,
      default: 'a',
    },
  },
  computed: {
    classes() {
      return {
        [`btn--${this.size}`]: ['sml', 'xsml'].includes(this.size),
        [`btn--${this.width}`]: ['wide', 'xwide', 'fullwidth'].includes(this.width),
        'btn--inverted': this.inverted,
      };
    },
  },
};
</script>
