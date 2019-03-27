<template>
  <SectionWrap class="bg-alt">
    <div class="grid grid--2col">
      <ListItem>
        <GenericCard
          :cols="2"
          title="Test 1">
          <div
            slot="sub-title-1"
            class="sub-title">
            <SvgIcon name="calendar"/>
            <span>Lorem ipsum</span>
          </div>
        </GenericCard>
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

<style>
.sub-title {
  display: flex;
  align-items: center;
  margin: 0;

  svg {
    margin: 0 5px 0 0;
  }
}
</style>
