<template>
  <SectionWrap bg-color="white">
    <in-page-navigation
      color="navy"
      title="on this page"
      heading-level="h1"/>
    <div style="height: 500px;">
      <h1 id="test1">Section1</h1>
    </div>
    <div style="height: 500px;">
      <h1 id="test2">Section2</h1>
    </div>
    <div style="height: 500px;">
      <h1 id="test3">Section3</h1>
    </div>
    <div style="height: 500px;">
      <h1 id="test4">Section4</h1>
    </div>
    <div style="height: 500px;">
      <h1 id="test5">Section5</h1>
    </div>
    <div style="height: 500px;">
      <h1 id="test6">Section6</h1>
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
