
<template>
  <div>
    <CardFact
      title="With Small Header"
      sm-header />
    <CardFact title="Without small header" />
  </div>
</template>

<script>
import CardFact from '../../CardFacts.vue';

export default {
  components: { CardFact },
};
</script>
