<template>
  <section class="section section--divider bg-inverted" style="background-image: url(&quot;http://cms.unimelb.edu.au/__data/assets/image/0005/2353784/UoM-soft-3.png&quot;);">
    <div class="section__inner--short section--divider__inner">
      <h3 class="heading-section">{{title}}</h3>
      <p v-if="subtitle && subtitle.length > 0">{{subtitle}}</p>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: false,
    },
  },
};
</script>
