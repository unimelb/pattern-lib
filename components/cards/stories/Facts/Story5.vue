<template>
  <SectionWrap>
    <div class="grid grid--center">
      <ListItem
        cols="1of2"
        class="cell--col-3"
      >
        <CardFact :top="true" />
      </ListItem>
      <ListItem
        cols="1of2"
        class="cell--col-3"
      >
        <CardFact :top="true" />
      </ListItem>
      <ListItem
        cols="1of1"
        class="cell--col-3"
      >
        <CardFact :top="true" />
      </ListItem>
      <ListItem
        cols="1of3"
        class="cell--col-3"
      >
        <CardFact :top="true" />
      </ListItem>
      <ListItem
        cols="2of3"
        class="cell--col-3"
      >
        <CardFact :top="true" />
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
