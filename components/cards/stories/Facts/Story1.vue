
<template>
  <SectionWrap>
    <div class="listing">
      <ListItem class="ListItem--desk-1of2"><CardFact /></ListItem>
      <ListItem class="ListItem--desk-1of2"><CardFact /></ListItem>
      <ListItem class="ListItem--desk-1of4"><CardFact /></ListItem>
      <ListItem class="ListItem--desk-1of4"><CardFact /></ListItem>
      <ListItem class="ListItem--desk-1of4"><CardFact /></ListItem>
      <ListItem class="ListItem--desk-1of4"><CardFact /></ListItem>
      <ListItem class="ListItem--desk-1of3"><CardFact /></ListItem>
      <ListItem class="ListItem--desk-2of3"><CardFact /></ListItem>
      <ListItem class="ListItem--desk-1of1"><CardFact /></ListItem>
      <ListItem class="ListItem--desk-1of1"><CardFact /></ListItem>
    </div>
  </SectionWrap>
</template>

<script>
import CardFact from './../../CardFacts.vue';

export default {
  components: { CardFact },
};
</script>
