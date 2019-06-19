<template>
  <div class="breadth search-box">
    <label class="label">
      Generic
      <DropdownVmodel
        v-model="selectedValue"
        :values="data"
        @event-data-filtered="test"/>
    </label>
    <h1
      v-for="(item, index) in filteredData"
      :key="index">{{ item.value }}</h1>
  </div>
</template>

<script>
import DropdownVmodel from '../base/DropdownVmodel.vue';

export default {
  components: {
    DropdownVmodel,
  },
  readme: { source: true, html: true },
  data() {
    return {
      selectedValue: '',
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
