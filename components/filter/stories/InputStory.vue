<template>
  <div>
    <section-wrap bg-color="white">
      <InputFilter
        :data="data"
        @event-data-filtered="test"/>
    </section-wrap>
    <h1
      v-for="(item, index) in filteredData"
      :key="index">{{ item.value }}</h1>
  </div>
</template>

<script>
import InputFilter from '../InputFilter.vue';

export default {
  components: { InputFilter },
  readme: { source: true, html: true },
  data() {
    return {
      filteredData: [],
      data: [
        {
          value: 'Arts',
        },
        {
          value: 'Science',
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
