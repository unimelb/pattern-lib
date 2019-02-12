<template>
  <div>
    <InPageNavigation
      card-title="on this page"
      heading-level="h2"/>
    <h2 id="a">Example 1</h2>
    <h2 id="b">Example 2</h2>
    <h2 id="c">Example 3</h2>
  </div>
</template>

<script>
import InPageNavigation from '../InPageNavigation.vue';
import { codeBlock } from '../../../../.storybook/utils';

const out = codeBlock(
  '<InPageNavigation card-title="on this page" heading-level="h2" />'
);

export default {
  components: { InPageNavigation },
  readme: { custom: out, source: false },
};
</script>
