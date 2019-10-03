<template>
  <section-wrap class="bg-white">
    <welcome
      name="Professor Glynn Davis"
      title="Vice Chancellor"
      caption-text="The Vice-Chancellor is the Chief Executive Officer of the University."
      btn-text="Bio and Recent Publications">
      <h2>Welcome from the Vice-Chancellor</h2>
      <p>The academic enterprise is crucial in society. At the University of Melbourne, we support the highest quality research aimed at resolving serious challenges, both in the domain of knowledge and in people’s lives.</p>
      <p>We also take delight in helping undergraduate and postgraduate students become leaders who are academically outstanding, practically grounded and socially responsible. Thank you for taking the time to visit us.</p>
    </welcome>
  </section-wrap>
</template>

<script>
import Welcome from '../Welcome.vue';

export default {
  components: { Welcome },
  readme: { source: true, html: true },
};
</script>
