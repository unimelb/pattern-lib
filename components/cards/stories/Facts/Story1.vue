<template>
  <SectionWrap>
    <div class="grid grid--center">
      <ListItem cols="1of2">
        <CardFact />
      </ListItem>
      <ListItem cols="1of2">
        <CardFact />
      </ListItem>
      <ListItem cols="1of1">
        <CardFact />
      </ListItem>
      <ListItem cols="1of3">
        <CardFact />
      </ListItem>
      <ListItem cols="2of3">
        <CardFact />
      </ListItem>
      <ListItem cols="2of3">
        <CardFact />
      </ListItem>
      <ListItem cols="1of3">
        <CardFact />
      </ListItem>
      <ListItem cols="1of4">
        <CardFact />
      </ListItem>
      <ListItem cols="1of4">
        <CardFact />
      </ListItem>
      <ListItem cols="1of4">
        <CardFact />
      </ListItem>
      <ListItem cols="1of4">
        <CardFact />
      </ListItem>
      <ListItem cols="1of2">
        <CardFact />
      </ListItem>
      <ListItem cols="1of2">
        <CardFact />
      </ListItem>
    </div>
  </SectionWrap>
</template>

<script>
import CardFact from '../../CardFacts.vue';

export default {
  components: { CardFact },
};
</script>
