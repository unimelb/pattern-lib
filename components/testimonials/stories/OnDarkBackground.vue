<template>
  <section-wrap
    long
    bg-color="inverted">
    <Testimonials
      name="Hannah Kerber"
      year="2016"
      thumb="https://source.unsplash.com/featured/?portrait"
      post="FTV Foundations Student"
      testimonials="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto autem consequatur debitis doloremque enim, est et exercitationem fugit hic minima nihil optio perferendis quam quos ratione saepe, temporibus veniam voluptate? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque et fuga fugit iusto labore magnam non nostrum odio odit officiis perferendis possimus, quas rem reprehenderit! Ab eaque maiores quidem!"
    />
  </section-wrap>
</template>

<script>
import Testimonials from '../Testimonials.vue';

export default {
  components: { Testimonials },
  readme: { source: true, html: true },
};
</script>
