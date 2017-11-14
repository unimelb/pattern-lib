<template>
  <SectionWrap>
    <div class="listing grid listing--center">
      <ListItem class="cell--desk-1of4"><card-link inverted title="Test 1"/></ListItem>
      <ListItem class="cell--desk-1of4"><card-link inverted title="This is an even Longer title that totally goes over three lines"/></ListItem>
      <ListItem class="cell--desk-1of4"><card-link inverted title="This is a Longer title over two lines"/></ListItem>
    </div>
  </SectionWrap>
</template>

<script>
import CardLink from './../../../cards/CardLink.vue';

export default {
  components: { CardLink },
};

</script>
