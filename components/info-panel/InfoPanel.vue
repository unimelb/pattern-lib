<template>
  <div class="info-panel">
    <div>
      <SvgIcon
        :name="iconName"
        :aria-label="iconName"
        class="info-panel__icon"
        width="20px"
        height="20px"
      />
    </div>
    <div class="info-panel__inner">
      <h4 class="title--xxs info-panel__title">{{ title }}</h4>
      <slot/>
    </div>
  </div>
</template>

<script>
import SvgIcon from '../icons/SvgIcon.vue';

export default {
  name: 'InfoPanel',
  components: { SvgIcon },
  props: {
    iconName: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
  },
};
</script>
