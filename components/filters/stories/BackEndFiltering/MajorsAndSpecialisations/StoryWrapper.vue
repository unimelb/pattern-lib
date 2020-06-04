<template>
  <BaseStoryWrapper
    v-slot="{ fetchData }"
    :fetch-data-creator="fetchDataCreator">
    <MajorsAndSpecialisations :fetch-data="fetchData" />
  </BaseStoryWrapper>
</template>

<script>
import BaseStoryWrapper from '../BaseStoryWrapper.vue';
import MajorsAndSpecialisations from './MajorsAndSpecialisations.vue';
import fetchDataCreator from './mockResults';
import majorsAndSpecialisations from './majorsAndSpecialisations.md';

export default {
  readme: { custom: majorsAndSpecialisations, source: false, html: false },
  name: 'StoryWrapper',
  components: { BaseStoryWrapper, MajorsAndSpecialisations },
  methods: {
    fetchDataCreator,
  },
};
</script>
