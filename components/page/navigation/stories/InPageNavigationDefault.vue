<template>
  <SectionWrap bg-color="white">
    <in-page-navigation
      color="navy"
      title="on this page"
      heading-level="h2"/>
    <div style="height: 500px;">
      <h2 id="test1">Section1</h2>
    </div>
    <div style="height: 500px;">
      <h2 id="test2">Section2</h2>
    </div>
    <div style="height: 500px;">
      <h2 id="test3">Section3</h2>
    </div>
    <div style="height: 500px;">
      <h2 id="test4">Section4</h2>
    </div>
    <div style="height: 500px;">
      <h2 id="test5">Section5</h2>
    </div>
    <div style="height: 500px;">
      <h2 id="test6">Section6</h2>
    </div>
  </SectionWrap>
</template>

<script>
import InPageNavigation from '../InPageNavigation.vue';
import inPageNavigationDocs from './in-page-navigation-docs.md';

export default {
  components: { InPageNavigation },
  readme: { custom: inPageNavigationDocs, source: true, html: true },
};
</script>
