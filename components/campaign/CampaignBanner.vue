<template>
  <section
    class="campaign-banner">
    <picture>
      <source
        v-if="imgSources.small && imgSources.small.length"
        :media="`(max-width: ${breakpoints.low}px)`"
        :srcset="composeSrcSet(imgSources.small)">
      <source
        v-if="imgSources.medium && imgSources.medium.length"
        :media="`(max-width: ${breakpoints.high}px)`"
        :srcset="composeSrcSet(imgSources.medium)">
      <img
        class="campaign-banner__image"
        :srcset="composeSrcSet(imgSources.large)"
        :src="imgSources.large[0].url"
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
    imgSources: {
      type: Object,
      required: true,
      validator: (value) => {
        const { large, medium } = value;
        const validateSrc = (src) => typeof src.url === 'string' && !Number.isNaN(src.pixelRatio);
        const validate = (size) => size && Array.isArray(size) && size.length
          && size.every(validateSrc);
        return large && medium && Object.values(value).every(validate);
      },
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
  },
  data: () => ({
    breakpoints: {
      low: 599,
      high: 768,
    },
  }),
  methods: {
    composeSrcSet(size) {
      const srcSetArray = size.map((src) => {
        const { url, pixelRatio: dpr } = src;
        if (url && typeof url === 'string' && dpr && !Number.isNaN(dpr)) {
          const dprPart = dpr ? ` ${dpr}x` : '';
          return `${url}${dprPart}`;
        }
        return null;
      });

      return srcSetArray.filter((src) => src).join(', ');
    },
  },
};
</script>
