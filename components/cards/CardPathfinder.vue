<template>
  <a v-if="!compact" :href="href" :aria-label="title" class="btn-owner card card--focus-box bg-inverted card--pathfinder">
    <SvgIcon class="card--focus-box__cnr card--focus-box__cnr--top-left" name="focus-top-left" width="54" height="54" />
    <SvgIcon class="card--focus-box__cnr card--focus-box__cnr--btm-right" name="focus-bottom-right" width="54" height="54" />
    <h3 class="card__header heading-section">{{ title }}</h3>
    <div class="card__inner">
      <p><slot ></slot></p>
    </div>
    <div class="card__footer">
      <ButtonIcon element="span" icon="chevron-right" class="btn--inverted btn--fullwidth">Find out more</ButtonIcon>
    </div>
  </a>
  <a v-else-if="compact" :href="href" :aria-label="title" class="btn-owner card card--focus-box bg-inverted card--pathfinder card--pathfinder--sml">
    <SvgIcon class="card--focus-box__cnr card--focus-box__cnr--top-left" name="focus-top-left" width="54" height="54" />
    <SvgIcon class="card--focus-box__cnr card--focus-box__cnr--btm-right" name="focus-bottom-right" width="54" height="54" />
    <div class="card__inner">
      <ButtonIcon element="span" icon="chevron-right" class="btn--inverted btn--fullwidth">{{ title }}</ButtonIcon>
      <p><slot></slot></p>
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
      default: 'http://www.google.com.au',
    },
    compact: {
      type: Boolean,
    },
  },
};

</script>
