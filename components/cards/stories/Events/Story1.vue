<template>
  <SectionWrap class="bg-alt">
    <div class="grid grid--1col">
      <ListItem>
        <CardEvents
          thumb="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Star_wars2.svg/1200px-Star_wars2.svg.png"
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
          <template slot="links">
            <a href="/">View generic details ></a>
            <a href="/">View generic staff ></a>
          </template>
        </CardEvents>
      </ListItem>
      <ListItem>
        <CardEvents
          thumb="https://is4-ssl.mzstatic.com/image/thumb/Video69/v4/e4/3d/a1/e43da14b-0354-62fb-304c-ad53f8ba9fa6/pr_source.lsr/268x0w.png"
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
          <template slot="links">
            <a href="/">View generic details ></a>
            <a href="/">View generic staff ></a>
          </template>
        </CardEvents>
      </ListItem>
    </div>
  </SectionWrap>
</template>

<script>
import CardEvents from '../../CardEvents.vue';
import eventsCardDocs from './events-card-docs.md';

export default {
  components: { CardEvents },
  readme: { custom: eventsCardDocs, source: true, html: true },
};
</script>
