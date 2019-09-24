<template>
  <div :class="classes">
    <SvgIcon
      v-if="icon"
      :name="icon"
      width="100"
      height="100"
      class="sublink-menu__icon"
    />
    <img
      v-if="img && img.length > 0"
      :src="img"
      class="sublink-menu__image"
      alt=""
    >
    <h3
      v-if="title"
      class="sublink-menu__title"
    >
      {{ title }}
    </h3>
    <p
      v-if="$slots.default"
      class="sublink-menu__excerpt"
    >
      <slot />
    </p>
    <nav class="sublink-menu__nav">
      <slot name="menuitems" />
    </nav>
  </div>
</template>

<script>
import SvgIcon from '../icons/SvgIcon.vue';

export default {
  components: {
    SvgIcon,
  },
  props: {
    title: {
      type: String,
      default: '',
    },
    color: {
      type: String,
      default: '',
    },
    img: {
      type: String,
      default: '',
    },
    icon: {
      type: String,
      default: '',
    },
    iconColor: {
      type: String,
      default: '',
    },
  },
  computed: {
    classes() {
      return {
        [`sublink-menu--${this.iconColor}`]: !!this.iconColor,
        'sublink-menu': true,
      };
    },
  },
};
</script>
