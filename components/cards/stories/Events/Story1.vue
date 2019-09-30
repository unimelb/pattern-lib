<template>
  <SectionWrap class="bg-alt">
    <div class="grid grid--1col">
      <ListItem>
        <CardEvents
          thumb="https://via.placeholder.com/400x200"
          title="Test 1"
          href="#"
          excerpt="Lorem ipsum dolor sit amet, consectetur.">
          <div
            slot="sub-title-1"
            class="sub-title">
            <span>Sub-title 1</span>
          </div>
          <div
            slot="sub-title-2"
            class="sub-title">
            <SvgIcon name="calendar" />
            <span>March 31 1992</span>
          </div>
          <template slot="links">
            <a
              href="/"
              aria-label="View details of the event name">
              View generic details
              <SvgIcon
                class="link-icon"
                name="chevron-right"
                width="10"
                height="10" />
            </a>
            <a
              href="/"
              aria-label="View details of the staff name">
              View generic staff
              <SvgIcon
                class="link-icon"
                name="chevron-right"
                width="10"
                height="10" />
            </a>
          </template>
        </CardEvents>
      </ListItem>
      <ListItem>
        <CardEvents
          thumb="https://via.placeholder.com/800x400"
          title="Lorem ipsum dolor sit amet, consectetur"
          href="#"
          excerpt="Lorem ipsum dolor sit amet, consectetur.">
          <div
            slot="sub-title-1"
            class="sub-title">
            <span>Sub-title 1</span>
          </div>
          <div
            slot="sub-title-2"
            class="sub-title">
            <SvgIcon name="calendar" />
            <span>March 31 1992</span>
          </div>
          <template slot="links">
            <a
              href="/"
              aria-label="View details of the event name">
              View generic details
              <SvgIcon
                class="link-icon"
                name="chevron-right"
                width="10"
                height="10" />
            </a>
            <a
              href="/"
              aria-label="View details of the staff name">
              View generic staff
              <SvgIcon
                class="link-icon"
                name="chevron-right"
                width="10"
                height="10" />
            </a>
          </template>
        </CardEvents>
      </ListItem>
      <ListItem>
        <CardEvents
          thumb="https://via.placeholder.com/800x600"
          title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae magni natus quas placeat adipisci optio libero quibusdam vitae nobis."
          href="#"
          excerpt="Lorem ipsum dolor sit amet, consectetur.">
          <div
            slot="sub-title-1"
            class="sub-title">
            <span>Sub-title 1</span>
          </div>
          <div
            slot="sub-title-2"
            class="sub-title">
            <SvgIcon name="calendar" />
            <span>March 31 1992</span>
          </div>
          <template slot="links">
            <a
              href="/"
              aria-label="View details of the event name">
              View generic details
              <SvgIcon
                class="link-icon"
                name="chevron-right"
                width="10"
                height="10" />
            </a>
          </template>
        </CardEvents>
      </ListItem>
    </div>
  </SectionWrap>
</template>

<script>
import SvgIcon from '../../../icons/SvgIcon.vue';
import CardEvents from '../../CardEvents.vue';
import eventsCardDocs from './events-card-docs.md';

export default {
  components: { CardEvents, SvgIcon },
  readme: { custom: eventsCardDocs, source: true, html: true },
};
</script>
