<template>
  <div :id="null">
    <select
      :id="id"
      :class="extraclasses"
      @change="callback">
      <slot />
    </select>
  </div>
</template>

<script>
export default {
  name: 'StyledSelect',
  props: {
    id: {
      type: [String, Boolean],
      default: () => false,
    },
    blue: {
      type: Boolean,
      default: false,
    },
    callback: {
      type: Function,
      default: () => {},
    },
  },
  data: () => ({
    extraclasses: '',
    baseclass: 'styled-select',
    blueclass: 'styled-select--blue',
  }),
  mounted() {
    this.extraclasses = this.$el.className;
    this.$el.className = `${this.baseclass}${this.blue ? ` ${this.blueclass}` : ''}`;
  },
};
</script>
