<template>
  <SectionWrap class="bg-alt">
    <div class="grid grid--3col">
      <ListItem>
        <GenericCard
          :cols="3"
          thumb="https://matrix-cms.unimelb.edu.au/__data/assets/image/0022/82903/pattern-library-staff-placeholder.png"
          title="Test 1"
          href="#"
          excerpt="Lorem ipsum dolor sit amet, consectetur."
        >
          <div
            slot="sub-title-1"
            class="sub-title">
            <SvgIcon name="calendar"/>
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
            <SvgIcon name="calendar"/>
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
          :cols="3"
          thumb="https://matrix-cms.unimelb.edu.au/__data/assets/image/0022/82903/pattern-library-staff-placeholder.png"
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
          :cols="3"
          thumb="https://matrix-cms.unimelb.edu.au/__data/assets/image/0022/82903/pattern-library-staff-placeholder.png"
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
    </div>
  </SectionWrap>
</template>

<script>
import SvgIcon from '../../../icons/SvgIcon.vue';
import GenericCard from '../../GenericCard.vue';
import verticalCard from './vertical-card-docs.md';

export default {
  components: { GenericCard, SvgIcon },
  readme: { custom: verticalCard, source: true, html: true },
};
</script>
