<template>
  <a class="btn link--disabled" :class="{'btn--sml': small,'btn--xsml': xsmall, 'btn--wide': wide}" href="">
    <span class="push-icon">
      {{btnText}}
      <icon class="push-icon__icon" width="15px" height="15px" :name="icon" />
    </span>
  </a>
</template>

<script>
import icon from './../../icons/stories/Icon.vue';

export default {
  components: {
    icon
  },
  props: {
    btnText: {
      type: String,
      default: "Button with icon"
    },
    icon: {
      type: String,
      default: "chevron-right"
    },
    small: {
      type: Boolean,
      default: false
    },
    xsmall: {
      type: Boolean,
      default: false
    },
    wide: {
      type: Boolean,
      default: false
    }

  }
}
</script>
