<template>
  <SectionWrap class="bg-alt">
    <div class="grid grid--2col">
      <ListItem>
        <GenericCard
          :cols="2"
          title="Test 1"/>
      </ListItem>
      <ListItem>
        <GenericCard
          :cols="2"
          title="Test 1"/>
      </ListItem>
    </div>
  </SectionWrap>
</template>

<script>
import GenericCard from '../../GenericCard.vue';
import genericCardDocs from './generic-card-docs.md';

export default {
  components: { GenericCard },
  readme: { custom: genericCardDocs },
};
</script>
