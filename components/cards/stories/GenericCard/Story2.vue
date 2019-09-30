<template>
  <SectionWrap class="bg-alt">
    <div class="grid grid--3col">
      <ListItem>
        <GenericCard
          :cols="3"
          title="Test 1" />
      </ListItem>
      <ListItem>
        <GenericCard
          :cols="3"
          title="Test 1" />
      </ListItem>
      <ListItem>
        <GenericCard
          :cols="3"
          title="Test 1" />
      </ListItem>
    </div>
  </SectionWrap>
</template>

<script>
import GenericCard from '../../GenericCard.vue';
import genericCardDocs from './generic-card-docs.md';

export default {
  components: { GenericCard },
  readme: { custom: genericCardDocs, source: true, html: true },
};
</script>
