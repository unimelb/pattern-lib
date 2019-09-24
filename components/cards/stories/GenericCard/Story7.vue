<template>
  <SectionWrap bg-color="inverted">
    <div class="grid grid--3col">
      <ListItem>
        <GenericCard
          :cols="3"
          title="Test 1"
        >
          <template slot="links">
            <a
              href="/"
              aria-label="View details of the event name"
            >View generic details
              <SvgIcon
                class="link-icon"
                name="chevron-right"
                width="10"
                height="10"
              /></a>
            <a
              href="/"
              aria-label="View details of the staff name"
            >View generic staff
              <SvgIcon
                class="link-icon"
                name="chevron-right"
                width="10"
                height="10"
              /></a>
          </template>
        </GenericCard>
      </ListItem>
      <ListItem>
        <GenericCard
          :cols="3"
          title="Test 1"
          excerpt="Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit amet, consectetur."
        >
          <template slot="links">
            <a
              href="/"
              aria-label="View details of the event name"
            >View generic details
              <SvgIcon
                class="link-icon"
                name="chevron-right"
                width="10"
                height="10"
              /></a>
            <a
              href="/"
              aria-label="View details of the staff name"
            >View generic staff
              <SvgIcon
                class="link-icon"
                name="chevron-right"
                width="10"
                height="10"
              /></a>
          </template>
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
