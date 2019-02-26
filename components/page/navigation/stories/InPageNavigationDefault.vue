<template>
  <div>
    <in-page-navigation
      title="on this page"
      heading-level="h2"/>
  </div>
</template>

<script>
import InPageNavigation from '../InPageNavigation.vue';
import { codeBlock } from '../../../../.storybook/utils';

const out = codeBlock(
  '<in-page-navigation title="on this page" heading-level="h2" />'
);

export default {
  components: { InPageNavigation },
  readme: { custom: out, source: false },
};
</script>
