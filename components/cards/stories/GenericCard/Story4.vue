<template>
  <SectionWrap class="bg-alt">
    <div class="grid grid--2col">
      <ListItem>
        <GenericCard
          :cols="2"
          href="www.unimelb.edu.au"
          title="Test 1">
          <div
            slot="sub-title-1"
            class="sub-title">
            <SvgIcon name="calendar" />
            <span>Lorem ipsum</span>
          </div>
        </GenericCard>
      </ListItem>
    </div>
  </SectionWrap>
</template>

<script>
import SvgIcon from '../../../icons/SvgIcon.vue';
import GenericCard from '../../GenericCard.vue';
import genericCardDocs from './generic-card-docs.md';

export default {
  components: { GenericCard, SvgIcon },
  readme: { custom: genericCardDocs, source: true, html: true },
};
</script>
