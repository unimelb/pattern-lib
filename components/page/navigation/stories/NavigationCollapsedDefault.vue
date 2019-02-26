<template>
  <div>
    <NavigationCollapsed heading-level="h2"/>
  </div>
</template>

<script>
import NavigationCollapsed from '../NavigationCollapsed.vue';
import { codeBlock } from '../../../../.storybook/utils';

const out = codeBlock('<NavigationCollapsed heading-level="h2" />');

export default {
  components: { NavigationCollapsed },
  readme: { custom: out, source: false },
};
</script>
