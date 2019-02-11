<template>
  <div>
    <InPageNavigation
      card-title="on this page"
      jump-nav-class=".data-jump-nav"/>
    <h1
      id="h1"
      class="data-jump-nav">h1</h1>
    <h2
      id="h2"
      class="data-jump-nav">h2</h2>
    <h3
      id="h3"
      class="data-jump-nav">h3</h3>
  </div>
</template>

<script>
import InPageNavigation from '../InPageNavigation.vue';
import { codeBlock } from '../../../../.storybook/utils';

const out = codeBlock(`<InPageNavigation card-title="on this page" jump-nav-class=".data-jump-nav" />`);

export default {
  components: { InPageNavigation },
  readme: { custom: out, source: false },
};
</script>
