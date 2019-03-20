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
            <span>Sub-title 1</span>
          </div>
          <div
            slot="sub-title-2"
            class="sub-title">
            <SvgIcon name="calendar"/>
            <span>March 31 1992</span>
          </div>
          <div
            slot="sub-title-3"
            class="sub-title">
            <span>Theme: Lorem ipsum.</span>
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
}
</style>
