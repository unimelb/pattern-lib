<template>
  <SectionWrap>
    <div class="listing grid listing--center">
      <ListItem class="cell--desk-1of4"><card-link inverted title="Ranking and Statistics" /></ListItem>
      <ListItem class="cell--desk-1of4"><card-link inverted title="Test 2" /></ListItem>
      <ListItem class="cell--desk-1of4"><card-link inverted title="Test 3" /></ListItem>
    </div>
  </SectionWrap>
</template>

<script>
import CardLink from './../../../cards/CardLink.vue';

export default {
  components: { CardLink },
};

</script>
