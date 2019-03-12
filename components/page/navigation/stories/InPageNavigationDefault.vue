<template>
  <in-page-navigation
    color="navy"
    title="on this page"
    heading-level="h2"/>
</template>

<script>
import InPageNavigation from '../InPageNavigation.vue';
import { codeBlock } from '../../../../.storybook/utils';

const out = codeBlock(
  "Use one of those colors: 'navy', 'teal', 'yellow', 'emerald', 'orange', 'green', 'purple', 'pink'"
);

export default {
  components: { InPageNavigation },
  readme: { custom: out, source: true, html: true },
};
</script>
