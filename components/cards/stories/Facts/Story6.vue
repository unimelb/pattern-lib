<template>
  <SectionWrap>
    <div class="grid grid--center">
      <ListItem cols="1of2">
        <CardFact :thin="true" />
      </ListItem>
      <ListItem cols="1of2">
        <CardFact :thin="true" />
      </ListItem>
      <ListItem cols="3of4">
        <CardFact :thin="true" />
      </ListItem>
      <ListItem cols="1of3">
        <CardFact :thin="true" />
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
