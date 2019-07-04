<template>
  <div>
    <CheckboxFilter
      :data="data"
      title="School"
      @event-data-filtered="test"/>
    <sectionWrap>
      <h1>Filter results:</h1>
      <li
        v-for="(item, index) in filteredData"
        :key="index">{{ item }}</li>
    </sectionWrap>
  </div>
</template>

<script>
import CheckboxFilter from '../filters-core/checkbox/CheckboxFilter.vue';

export default {
  components: {
    CheckboxFilter,
  },
  readme: { source: true, html: true },
  data() {
    return {
      filteredData: [],
      data: ['Test1', 'Test2', 'Test3'],
    };
  },
  methods: {
    test(dataFromParent) {
      this.filteredData = dataFromParent;
    },
  },
};
</script>
