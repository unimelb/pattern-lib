<template>
  <div class="card card--focus-box bg-white">
    <svg
      width="54"
      height="54"
      focusable="false"
      role="presentation"
      class="card--focus-box__cnr card--focus-box__cnr--top-left"
    >
      <use
        xmlns:xlink="http://www.w3.org/1999/xlink"
        xlink:href="#icon-focus-top-left"
      />
    </svg>
    <svg
      width="54"
      height="54"
      focusable="false"
      role="presentation"
      class="card--focus-box__cnr card--focus-box__cnr--btm-right"
    >
      <use
        xmlns:xlink="http://www.w3.org/1999/xlink"
        xlink:href="#icon-focus-bottom-right"
      />
    </svg>
    <div class="card__inner">
      <p class="split-section__quote">
        {{ quote }}
      </p>
      <p
        v-if="cite"
        class="split-section__quote-cite"
      >
        {{ cite }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    quote: {
      type: String,
      default: '',
    },
    cite: {
      type: String,
      default: '',
    },
  },
};
</script>
