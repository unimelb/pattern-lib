<template>
  <div class="screen-reader-jump-to">
    <ButtonIcon
      element="button"
      role="link"
      :tabindex="0"
      no-icon
      size="xsml"
      class="screen-reader-jump-to__skippy screenreaders-only screenreaders-only-focusable btn--inverted"
      @click.native.prevent="scrollTo">
      {{ text }}
    </ButtonIcon>
  </div>
</template>

<script>
import ButtonIcon from '../buttons/ButtonIcon.vue';

export default {
  components: {
    ButtonIcon,
  },
  props: {
    text: {
      type: String,
      default: 'Skip to main content',
    },
    toElement: {
      type: String,
      default: 'main',
    },
  },
  methods: {
    scrollTo() {
      const toElement = document.querySelector(`[role="${this.toElement}"]`);
      if (toElement) {
        toElement.scrollIntoView();
        toElement.focus();
      }
    },
  },
};
</script>
