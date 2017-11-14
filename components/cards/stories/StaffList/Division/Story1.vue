
<template>
  <SectionWrap>
    <div class="listing grid">
      <ListItem class="cell--desk-1of3"><CardDivision title="Enterprise" name="Johnathan Smithersonite" meta="Vice President of A very long Position Description"/></ListItem>
      <ListItem class="cell--desk-1of3"><CardDivision title="Research Infrastructure and Systems" name="John Smith" meta="Position Description"/></ListItem>
      <ListItem class="cell--desk-1of3"><CardDivision title="Enterprise" name="Jane Citizen" meta="Position Description"/></ListItem>
      <ListItem class="cell--desk-1of3"><CardDivision title="Enterprise" name="John Smith" meta="Position Description"/></ListItem>
      <ListItem class="cell--desk-1of3"><CardDivision title="Research Infrastructure and Systems" name="Jane Doe" meta="Position Description"/></ListItem>
      <ListItem class="cell--desk-1of3"><CardDivision title="Enterprise" name="Jane Citizen" meta="Position Description"/></ListItem>
      <ListItem class="cell--desk-1of3"><CardDivision title="Enterprise" name="John Smith" meta="Position Description"/></ListItem>
      <ListItem class="cell--desk-1of3"><CardDivision title="Research Infrastructure and Systems" name="Jane Smith" meta="Position Description"/></ListItem>
      <ListItem class="cell--desk-1of3"><CardDivision title="Enterprise" name="Jane Citizen" meta="Position Description"/></ListItem>
    </div>
  </SectionWrap>
</template>

<script>
import CardDivision from './../../../CardDivision.vue';

export default {
  components: { CardDivision },
};
</script>
