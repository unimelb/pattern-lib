<template>
  <section-wrap
    small
    class="bg-white">
    <Welcome
      name="Professor Glynn Davis"
      title="Vice Chancellor">
      <h2>Welcome</h2>
      <p>The academic enterprise is crucial in society. At the University of Melbourne, we support the highest quality research aimed at resolving serious challenges, both in the domain of knowledge and in people’s lives.</p>
    </Welcome>
  </section-wrap>
</template>

<script>
import Welcome from '../Welcome.vue';

export default {
  components: { Welcome },
  readme: { source: true, html: true },
};
</script>
