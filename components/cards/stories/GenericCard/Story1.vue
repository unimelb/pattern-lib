<template>
  <SectionWrap class="bg-alt">
    <div class="grid grid--2col">
      <ListItem>
        <GenericCard
          :cols="2"
          thumb
          title="Test 1"
          href="#"
          excerpt="Lorem ipsum dolor sit amet, consectetur."
        >
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
          <template slot="links">
            <a
              href="/"
              aria-label="View details of the event name">View generic details ></a>
            <a
              href="/"
              aria-label="View details of the staff name">View generic staff ></a>
          </template>
        </GenericCard>
      </ListItem>
      <ListItem>
        <GenericCard
          :cols="2"
          thumb="https://via.placeholder.com/400x200"
          title="Test 2"
          href="#"
          excerpt="Lorem ipsum dolor sit amet, consectetur."
        >
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
