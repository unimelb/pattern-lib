<template>
  <section
    class="campaign-banner">
    <picture>
      <source
        v-if="background.small"
        :media="`(max-width: ${narrowBreakpoint}px)`"
        :srcset="background.small">
      <source
        v-if="background.medium"
        :media="`(max-width: ${wideBreakpoint}px)`"
        :srcset="background.medium">
      <img
        class="campaign-banner__image"
        :src="background.large"
        :alt="backgroundAltText">
    </picture>
    <div class="campaign-banner__container">
      <h1 class="campaign-banner__heading">
        redefine<br>possible
      </h1>
      <p class="campaign-banner__text">
        {{ text }}
      </p>
      <ButtonIcon
        v-if="showButton"
        class="btn--secondary"
        :href="href"
        size="sml">
        {{ buttonText }}
      </ButtonIcon>
    </div>
  </section>
</template>

<script>
import ButtonIcon from '../buttons/ButtonIcon.vue';

export default {
  components: { ButtonIcon },
  props: {
    background: {
      type: Object,
      required: true,
      validator: (value) => value.large && typeof value.large === 'string',
    },
    backgroundAltText: {
      type: String,
      default: 'banner background',
    },
    href: {
      type: String,
      default: '#',
    },
    text: {
      type: String,
      default: 'lorem ipsum',
    },
    buttonText: {
      type: String,
      default: 'learn more',
    },
    showButton: {
      type: Boolean,
      default: false,
    },
    wideBreakpoint: {
      type: Number,
      default: 768,
    },
    narrowBreakpoint: {
      type: Number,
      default: 480,
    },
  },
};
</script>
