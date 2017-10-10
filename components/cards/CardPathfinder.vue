<template>
  <a :href="href" class="btn-owner card card--focus-box bg-inverted card--pathfinder">
    <icon class="card--focus-box__cnr card--focus-box__cnr--top-left" name="focus-top-left" width="54" height="54" />
    <icon class="card--focus-box__cnr card--focus-box__cnr--btm-right" name="focus-bottom-right" width="54" height="54" />
    <h3 class="card__header heading-section">{{ title }}</h3>
    <div class="card__inner">
      <slot ></slot>
    </div>
    <div class="card__footer">
      <button class="btn btn--inverted btn--fullwidth">Find out more</button>
    </div>
  </a>
</template>

<script>
export default {
  name: 'CardPathfinder',
  props: {
    title: {
      type: String,
    },
    href: {
      type: String,
      default: '#',
    },
  },
};

</script>
