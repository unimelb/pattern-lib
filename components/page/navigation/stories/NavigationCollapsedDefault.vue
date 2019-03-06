<template>
  <div>
    <NavigationCollapsed heading-level="h2"/>
  </div>
</template>

<script>
import NavigationCollapsed from '../NavigationCollapsed.vue';
import { codeBlock } from '../../../../.storybook/utils';

const out = codeBlock(
  '<navigation-collapsed heading-level="h2"></navigation-collapsed>'
);

export default {
  components: { NavigationCollapsed },
  readme: { custom: out, source: false },
};
</script>
