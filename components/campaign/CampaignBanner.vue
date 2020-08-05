<template>
  <section
    class="campaign-banner">
    <img
      :src="imgSrc"
      :alt="backgroundAltText">
    <div class="campaign-banner__container">
      <h1>redefine<br>possible</h1>
      <p>{{ text }}</p>
      <ButtonIcon
        v-if="showButton"
        class="btn--secondary"
        :href="href"
        size="sml">
        LEARN MORE
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
    showButton: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    imgSrc: '',
    breakpoints: {
      wide: 768,
      narrow: 480,
    },
    resizeListener: null,
  }),
  mounted() {
    this.resizeListener = window.addEventListener('resize', this.resolveProperBackground);
    this.resolveProperBackground();
  },
  destroyed() {
    window.removeEventListener(this.resizeListener);
  },
  methods: {
    resolveProperBackground() {
      const width = document.documentElement.clientWidth;

      switch (true) {
        case width <= this.breakpoints.narrow:
          this.imgSrc = this.background.small;
          break;
        case width > this.breakpoints.narrow && width <= this.breakpoints.wide:
          this.imgSrc = this.background.medium;
          break;
        default:
          this.imgSrc = this.background.large;
      }
    },
  },
};
</script>
