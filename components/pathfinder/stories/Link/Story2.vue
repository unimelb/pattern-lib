<template>
  <SectionWrap>
    <div class="listing grid listing--center">
      <ListItem class="cell--desk-1of4"><card-link inverted title="Test 1"/></ListItem>
      <ListItem class="cell--desk-1of4"><card-link inverted title="Test 2"/></ListItem>
      <ListItem class="cell--desk-1of4"><card-link inverted title="This is a Longer title over two lines"/></ListItem>
      <ListItem class="cell--desk-1of4"><card-link inverted title="Ranking and Statistics"/></ListItem>
    </div>
  </SectionWrap>
</template>

<script>
import CardLink from './../../../cards/CardLink.vue';

export default {
  components: { CardLink },
};

</script>
