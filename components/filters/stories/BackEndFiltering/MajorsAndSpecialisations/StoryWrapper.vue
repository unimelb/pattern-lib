<template>
  <BaseStoryWrapper
    v-slot="{ fetchData }"
    :fetch-data-creator="fetchDataCreator">
    <MajorsAndSpecialisations :fetch-data="fetchData" />
  </BaseStoryWrapper>
</template>

<script>
import BaseStoryWrapper from '../BaseStoryWrapper.vue';
import fetchDataCreator from './helpers/mockResults';
import MajorsAndSpecialisations from './MajorsAndSpecialisations.vue';
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
