<template>
  <BaseStoryWrapper
    v-slot="{ fetchData }"
    :fetch-data-creator="fetchDataCreator">
    <Default :fetch-data="fetchData" />
  </BaseStoryWrapper>
</template>

<script>
import BaseStoryWrapper from '../BaseStoryWrapper.vue';
import fetchDataCreator from './helpers/mockResults';
import Default from './Default.vue';
import defaultReadme from './default.md';

export default {
  readme: { custom: defaultReadme, source: false, html: false },
  name: 'StoryWrapper',
  components: { BaseStoryWrapper, Default },
  methods: {
    fetchDataCreator,
  },
};
</script>
