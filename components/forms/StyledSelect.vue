<template>
  <div :id="null">
    <select
      :id="id"
      :class="extraclasses">
      <slot />
    </select>
    <div :class="iconClasses">
      <SvgIcon
        width="15px"
        height="15px"
        name="chevron-down" />
    </div>
  </div>
</template>

<script>
import SvgIcon from '../icons/SvgIcon.vue';

export default {
  name: 'StyledSelect',
  components: { SvgIcon },
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
  computed: {
    iconClasses() {
      return [
        'styled-select__icon',
        {
          'styled-select__icon--blue': this.blue,
        },
      ];
    },
  },
};
</script>
