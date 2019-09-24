<template>
  <section
    :style="{ backgroundImage: 'url(https://cms.unimelb.edu.au/__data/assets/image/0005/2353784/UoM-soft-3.png)' }"
    class="section section--divider bg-inverted"
  >
    <div class="section__inner--short section--divider__inner">
      <h3 class="heading-section">
        {{ title }}
      </h3>
      <p v-if="subtitle && subtitle.length > 0">
        {{ subtitle }}
      </p>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
      required: true,
    },
    subtitle: {
      type: String,
      default: '',
      required: false,
    },
  },
};
</script>
