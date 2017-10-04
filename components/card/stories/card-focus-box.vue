<template>
  <div class="btn-owner card card--focus-box ">
    <icon class="card--focus-box__cnr card--focus-box__cnr--top-left" name="focus-top-left" width="54" height="54" />
    <icon class="card--focus-box__cnr card--focus-box__cnr--btm-right" name="focus-bottom-right" width="54" height="54" />

    <div class="card__inner ">
      <!-- <icon class="card--focus-box__icon" :name="icon" width="170" height="170" /> -->
      <img class="card--focus-box__icon" :src="exampleIcon" alt="">
      <h3>{{title}}</h3>
      <p>{{excerpt}}</p>
    </div>
  </div>
</template>

<script>
  import exampleIcon from './learning-and-teaching1.svg';

  import icon from './../../icons/stories/Icon.vue';
  export default {
    name: 'CardFocusBox',
    components: { icon },
    data: () => ({ exampleIcon }),
    props: {
      thumb: {
        type: String,
        default: "http://via.placeholder.com/400x200"
      },
      title: {
        type: String,
        default: "Test title"
      },
      href: {
        type: String,
        default: "#"
      },
      excerpt: {
        type: String,
        default: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta quae doloribus, aliquid modi? Blanditiis quod, ullam aliquam provident, accusamus neque aut necessitatibus accusantium maxime voluptates sit consequatur illum tempora magnam.'
      }
    }
  }

</script>
