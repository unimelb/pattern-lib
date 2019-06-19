<template>
  <section-wrap bg-color="white">
    <InputFilter
      :data="data"
      @event-data-filtered="test"
    />
    <h1
      v-for="(item, index) in filteredData"
      :key="index">{{ item.value }}</h1>
  </section-wrap>
</template>

<script>
import InputFilter from '../base/InputFilter.vue';

export default {
  components: { InputFilter },
  readme: { source: true, html: true },
  data() {
    return {
      filteredData: [],
      data: [
        {
          value: 'arts',
        },
        {
          value: 'science',
        },
      ],
    };
  },
  methods: {
    test(dataFromParent) {
      this.filteredData = dataFromParent;
    },
  },
};
</script>
