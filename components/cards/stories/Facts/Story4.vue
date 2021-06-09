<template>
  <div>
    <CardFact
      title="With Small Header"
      sml-header />
    <CardFact title="Without small header" />
  </div>
</template>

<script>
import CardFact from '../../CardFacts.vue';

export default {
  components: { CardFact },
};
</script>
