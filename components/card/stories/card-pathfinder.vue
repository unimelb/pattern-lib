<template>
  <a :href="{href}" class="btn-owner card card--focus-box bg-inverted card--pathfinder">
    <icon class="card--focus-box__cnr card--focus-box__cnr--top-left" name="focus-top-left" width="54" height="54" />
    <icon class="card--focus-box__cnr card--focus-box__cnr--btm-right" name="focus-bottom-right" width="54" height="54" />
    <h3 class="card__header heading-section">{{ title }}</h3>
    <div class="card__inner">
      <p>{{ excerpt }}</p>
    </div>
    <div class="card__footer">
      <button class="btn btn--inverted btn--fullwidth btn--icon btn--icon--chevron-right-inverted">Find out more</button>
    </div>
  </a>
</template>

<script>
import icon from './../../icons/stories/Icon.vue';

export default {
  name: 'CardPathfinder',
  components: { icon },
  props: {
    thumb: {
      type: String,
      default: 'http://via.placeholder.com/400x200',
    },
    title: {
      type: String,
      default: 'Test title',
    },
    href: {
      type: String,
      default: '#',
    },
    icon: {
      type: String,
      default: '#icon-learning-1',
    },
    excerpt: {
      type: String,
      default: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta quae doloribus, aliquid modi? Blanditiis quod, ullam aliquam provident, accusamus neque aut necessitatibus accusantium maxime voluptates sit consequatur illum tempora magnam.',
    },
  },
};

</script>
