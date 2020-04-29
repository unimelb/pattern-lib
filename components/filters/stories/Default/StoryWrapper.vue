<template>
  <BaseStoryWrapper
    v-slot="{ fetchData }"
    :fetch-data-creator="fetchDataCreator">
    <Default :fetch-data="fetchData" />
  </BaseStoryWrapper>
</template>

<script>
import BaseStoryWrapper from '../BaseStoryWrapper.vue';
import Default from './Default.vue';
import fetchDataCreator from './mockResults.js';

export default {
  name: 'StoryWrapper',
  components: { BaseStoryWrapper, Default },
  methods: {
    fetchDataCreator,
  },
};
</script>
