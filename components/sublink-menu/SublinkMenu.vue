<template>
  <div :class="classes">
    <SvgIcon width="100" height="100" class="sublink-menu__icon" :name="icon" />
    <h3 class="sublink-menu__title"> {{ title }}</h3>
    <p class="sublink-menu__excerpt"><slot></slot></p>
    <nav class="sublink-menu__nav">
      <slot name="menuitems"></slot>
    </nav>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    color: String,
    icon: {
      type: String,
      default: 'campaign',
    },
    iconColor: String,
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
