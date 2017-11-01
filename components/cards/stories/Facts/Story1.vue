
<template>
  <SectionWrap>
    <div class="listing">
      <ListItem cols="1of2"><CardFact /></ListItem>
      <ListItem cols="1of2"><CardFact /></ListItem>
      <ListItem cols="1of1"><CardFact /></ListItem>
      <ListItem cols="1of3"><CardFact /></ListItem>
      <ListItem cols="2of3"><CardFact /></ListItem>
      <ListItem cols="2of3"><CardFact /></ListItem>      
      <ListItem cols="1of3"><CardFact /></ListItem>
      <ListItem cols="1of4"><CardFact /></ListItem>
      <ListItem cols="1of4"><CardFact /></ListItem>
      <ListItem cols="1of4"><CardFact /></ListItem>
      <ListItem cols="1of4"><CardFact /></ListItem>
      <ListItem cols="1of2"><CardFact /></ListItem>
      <ListItem cols="1of2"><CardFact /></ListItem>
    </div>
  </SectionWrap>
</template>

<script>
import SampleImage1 from './building.svg';
import SampleImage2 from './international-students.svg';
import CardFact from './../../CardFacts.vue';

export default {
  components: { CardFact },
  data() {
    return {
      SampleImage1,
      SampleImage2,
    };
  },
};
</script>
