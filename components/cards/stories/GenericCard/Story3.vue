<template>
  <SectionWrap class="bg-alt">
    <div class="grid grid--2col">
      <ListItem>
        <GenericCard
          :cols="3"
          title="Test 1">
          <div
            slot="sub-title-1"
            class="sub-title">
            <span>Sub-title 1</span>
          </div>
        </GenericCard>
      </ListItem>
    </div>
  </SectionWrap>
</template>

<script>
import GenericCard from '../../GenericCard.vue';
import genericCardDoc from './generic-card-docs.md';

export default {
  components: { GenericCard },
  readme: { custom: genericCardDoc },
};
</script>

<style>
.sub-title {
  display: flex;
  align-items: center;
  margin: 0;
}
</style>
