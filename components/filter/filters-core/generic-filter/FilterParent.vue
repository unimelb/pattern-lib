<template>
  <div>
    <section-wrap bg-color="white">
      <input-filter
        v-if="inputData.length > 0"
        :data="inputData"
        @event-data-input="resultFromInput"
      />
      <checkbox-filter
        v-if="checkboxData.length > 0"
        :data="checkboxData"
        title="Select School"
        @event-data-checkbox="resultFromCheckbox"
      />
      <button @click="resetButton">Clear All button</button>
    </section-wrap>
    <filter-results
      :input="dataFromInput"
      :checkbox="dataFromCheckbox" />
  </div>
</template>

<script>
import InputFilter from '../input/InputFilter.vue';
import CheckboxFilter from '../checkbox/CheckboxFilter';
import FilterResults from '../results/FilterResults.vue';

export default {
  components: {
    InputFilter,
    CheckboxFilter,
    FilterResults,
  },
  props: {
    data: {
      type: [Array, Object],
      default: () => [],
    },
  },
  data() {
    return {
      dataFromInput: [],
      dataFromCheckbox: [],
      inputData: [],
      checkboxData: [],
    };
  },
  beforeMount() {
    this.data.forEach((element) => {
      if (element.type === 'input') {
        this.inputData.push(...element.values);
      } else if (element.type === 'multi-select') {
        this.checkboxData.push(...element.values);
      }
    });
  },
  methods: {
    resultFromInput(dataFromInput) {
      this.dataFromInput = dataFromInput;
    },
    resultFromCheckbox(dataFromCheckbox) {
      this.dataFromCheckbox = dataFromCheckbox;
    },
    resetButton() {},
  },
};
</script>
