<template>
  <section
    :style="{ backgroundImage: 'url(https://cms.unimelb.edu.au/__data/assets/image/0020/3612125/nike-logo-soft.png)' }"
    class="section section--divider bg-inverted">
    <div class="section__inner--short section--divider__inner">
      <h3 class="heading-section">
        {{ title }}
      </h3>
      <p v-if="subtitle && subtitle.length">
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
