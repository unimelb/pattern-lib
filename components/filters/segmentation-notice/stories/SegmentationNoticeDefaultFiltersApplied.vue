<template>
  <SegmentationNotice
    :options="options"
    :is-default-filter-applied="true"
    :results-length="39"
    user-qualification="undergrad"
    @clear="onClear"
    @change="onChange" />
</template>

<script>
import options from '../../options.json';
import SegmentationNotice from '../SegmentationNotice.vue';

export default {
  name: 'SegmentationNoticeDefaultFiltersApplied',
  components: { SegmentationNotice },
  data() {
    return {
      options,
    };
  },
  methods: {
    onClear() {
      //
    },
    onChange() {
      //
    },
  },
};
</script>
