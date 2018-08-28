<template>
  <a
    :href="href"
    :aria-label="title"
    :class="classes">
    <SvgIcon
      class="card--focus-box__cnr card--focus-box__cnr--top-left"
      name="focus-top-left"
      width="54"
      height="54" />
    <SvgIcon
      class="card--focus-box__cnr card--focus-box__cnr--btm-right"
      name="focus-bottom-right"
      width="54"
      height="54" />
    <div
      v-if="!compact"
      class="card__header heading-section"
      v-html="title"/>
    <div
      v-if="!titleonly"
      class="card__inner">
      <ButtonIcon
        v-if="compact"
        element="span"
        icon="chevron-right"
        class="btn--inverted btn--fullwidth">{{ title }}</ButtonIcon>
      <p><slot/></p>
    </div>
    <div
      v-if="!compact"
      class="card__footer">
      <ButtonIcon
        element="span"
        icon="chevron-right"
        class="btn--inverted btn--fullwidth">Find out more</ButtonIcon>
    </div>
  </a>
</template>

<script>
export default {
  name: 'CardPathfinder',
  props: {
    title: {
      type: String,
      default: '',
    },
    href: {
      type: String,
      default: 'http://www.google.com.au',
    },
    compact: {
      type: Boolean,
      default: false,
    },
    titleonly: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    classes() {
      return {
        'btn-owner card card--focus-box bg-inverted card--pathfinder': true,
        'card--pathfinder--sml': this.compact || this.titleonly,
      };
    },
  },
};

</script>
