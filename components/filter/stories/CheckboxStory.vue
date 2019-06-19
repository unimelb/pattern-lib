<template>
  <div>
    <CheckboxFilter
      :data="data"
      @event-data-filtered="test"/>
    <li
      v-for="(item, index) in filteredData"
      :key="index">{{ item }}</li>
  </div>
</template>

<script>
import CheckboxFilter from '../base/CheckboxFilter';

export default {
  components: {
    CheckboxFilter,
  },
  readme: { source: true, html: true },
  data() {
    return {
      filteredData: [],
      data: ['test1', 'test2', 'test3'],
    };
  },
  methods: {
    test(dataFromParent) {
      this.filteredData = dataFromParent;
    },
  },
};
</script>
