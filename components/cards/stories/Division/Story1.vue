
<template>
  <section-wrap>
    <div class="listing listing--three">
      <list-item><card-division title="Enterprise" name="John Smith" meta="Position Description"/></list-item>
      <list-item><card-division title="Research Infrastructure and Systems" name="John Smith" meta="Position Description"/></list-item>
      <list-item><card-division title="Enterprise" name="Jane Citizen" meta="Position Description"/></list-item>
      <list-item><card-division title="Enterprise" name="John Smith" meta="Position Description"/></list-item>
      <list-item><card-division title="Research Infrastructure and Systems" name="Jane Doe" meta="Position Description"/></list-item>
      <list-item><card-division title="Enterprise" name="Jane Citizen" meta="Position Description"/></list-item>
      <list-item><card-division title="Enterprise" name="John Smith" meta="Position Description"/></list-item>
      <list-item><card-division title="Research Infrastructure and Systems" name="Jane Smith" meta="Position Description"/></list-item>
      <list-item><card-division title="Enterprise" name="Jane Citizen" meta="Position Description"/></list-item>
    </div>
  </section-wrap>
</template>

<script>
import CardDivision from './../../CardDivision.vue';

export default {
  components: { CardDivision },
};
</script>
