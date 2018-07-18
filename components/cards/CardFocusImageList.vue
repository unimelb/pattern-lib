<template>
  <a
    :is="element"
    :href="element === 'a' ? href : false"
    :class="classes"
    class="card card--image-focus">
    <h3
      v-if="titleabove === true"
      :class="{'text-italic': hero, 'heading-section': hero}">{{ title }}</h3>
    <div
      v-if="!progressive"
      :class="{'card__thumb--full': fullImg, 'card__thumb--tall': tall}"
      class="card__thumb">
      <img
        :src="img"
        :placeholder="progressive ? placeholder : false"
        class="card__thumb"
        alt="">
    </div>
    <progressive-img
      v-if="progressive"
      :src="img"
      :placeholder="progressive ? placeholder : false"
      :class="{'card__thumb--full': fullImg, 'card__thumb--tall': tall}"
      class="card__thumb"/>
    <div
      :class="{'card__inner--tight': tight}"
      class="card__inner">
      <h3 v-if="titleabove === false">{{ title }}</h3>
      <slot/>
      <ButtonIcon
        v-if="element === 'a'"
        element="span"
        class="btn--fullwidth">{{ title }}</ButtonIcon>
    </div>
  </a>
</template>

<script>
export default {
  props: {
    placeholder: {
      type: String,
      default: '',
    },
    progressive: {
      type: Boolean,
      default: false,
    },
    img: {
      type: String,
      default: '',
    },
    fullImg: {
      type: Boolean,
      default: false,
    },
    tall: {
      type: Boolean,
      default: false,
    },
    hero: {
      type: Boolean,
      default: false,
    },
    tight: {
      type: Boolean,
      default: false,
    },
    noFocus: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: 'Test title',
    },
    titleabove: {
      type: Boolean,
      default: false,
    },
    color: {
      type: String,
      default: '',
    },
    meta: {
      type: String,
      default: 'Test title',
    },
    href: {
      type: String,
      default: '#',
    },
    element: {
      type: String,
      default: 'a',
    },
    excerpt: {
      type: String,
      default: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta quae doloribus, aliquid modi? Blanditiis quod, ullam aliquam provident, accusamus neque aut necessitatibus accusantium maxime voluptates sit consequatur illum tempora magnam.',
    },
  },
  computed: {
    classes() {
      return {
        [`card--image-focus--col-${this.color}`]: this.color && this.color.length > 0,
        'btn-owner': this.element && this.element === 'a',
        'card--image-no-focus': !!this.noFocus,
      };
    },
  },
};
</script>
