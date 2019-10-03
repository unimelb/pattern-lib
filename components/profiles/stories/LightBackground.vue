<template>
  <section-wrap
    long
    bg-color="alt">
    <AlumniProfiles
      name="Julia Gillard AC"
      thumb="https://source.unsplash.com/featured/?portrait"
      text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto autem consequatur debitis doloremque enim, est et exercitationem fugit hic minima nihil optio perferendis quam quos ratione saepe, temporibus veniam voluptate? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque et fuga fugit iusto labore magnam non nostrum odio odit officiis perferendis possimus, quas rem reprehenderit! Ab eaque maiores quidem!" />
  </section-wrap>
</template>

<script>
import AlumniProfiles from '../alumni-profiles/AlumniProfiles';

export default {
  components: { AlumniProfiles },
  readme: { source: true, html: true },
};
</script>
