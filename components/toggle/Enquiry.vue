<template>
  <ToggleBlock class="enquiry">
    <template slot="default">
      <slot name="trigger">
        <span class="btn btn--cta btn--sml">{{ title }}</span>
      </slot>
    </template>
    <template slot="hidden">
      <hr>
      <slot />
    </template>
  </ToggleBlock>
</template>

<script>
import ToggleBlock from './ToggleBlock.vue';

export default {
  name: 'Enquiry',
  components: { ToggleBlock },
  props: {
    title: {
      type: String,
      default: 'Enquire Now',
    },
  },
};
</script>
