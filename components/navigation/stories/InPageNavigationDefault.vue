<template>
  <SectionWrap bg-color="white">
    <InPageNavigation
      color="navy"
      title="on this page"
      heading-level="h1" />
    <div style="height: 500px;">
      <h1 id="navigation-test1">
        Section1
      </h1>
    </div>
    <div style="height: 500px;">
      <h1 id="navigation-test2">
        Section2
      </h1>
    </div>
    <div style="height: 500px;">
      <h1
        id="navigation-test3">
        Section3 with a really really really really really really long heading
      </h1>
    </div>
    <div style="height: 500px;">
      <h1
        id="navigation-test4">
        Section4 with a really really really really really really really really really really really really long heading
      </h1>
    </div>
    <div style="height: 500px;">
      <h1 id="navigation-test5">
        Section5
      </h1>
    </div>
    <div style="height: 500px;">
      <h1 id="navigation-test6">
        Section6
      </h1>
    </div>
    <div style="height: 500px;">
      <h1 id="navigation-test7">
        Section7
      </h1>
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
