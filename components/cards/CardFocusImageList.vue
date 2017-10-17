<template>
  <div v-if="element === 'div'" class="card card--image-focus" :class="colorClasses">
    <h3 v-if="titleabove === true" :class="{'text-italic': hero, 'heading-section': hero}">{{ title }}</h3>
    <progressive-background :src="img" :placeholder="placeholder" class="card__thumb" :class="{'card__thumb--full': fullimg}" />
    <div class="card__inner" :class="{'card__inner--tight': hero}">
      <h3 v-if="titleabove === false">{{ title }}</h3>
      <slot></slot>
    </div>
  </div>
  <a v-else-if="element === 'a'" href="" class="btn-owner card card--image-focus" :class="colorClasses">
    <progressive-background :src="img" :placeholder="placeholder" class="card__thumb" :class="{'card__thumb--full': fullimg}" />
    <div class="card__inner" :class="{'card__inner--tight': hero}">
      <h3>{{ title }}</h3>
      <slot></slot>
      <ButtonIcon element="button" class="btn--fullwidth">{{ title }}</ButtonIcon>
    </div>
  </a>
</template>

<script>
export default {
  props: {
    placeholder: {
      type: String,
    },
    img: {
      type: String,
    },
    fullimg: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: 'Test title',
    },
    titleabove: {
      type: Boolean,
    },
    hero: {
      type: Boolean,
    },
    color: {
      type: String,
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
    colorClasses() {
      return {
        [`card--image-focus--col-${this.color}`]: this.color && this.color.length > 0,
      };
    },
  },
};
</script>
