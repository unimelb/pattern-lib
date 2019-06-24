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
        @event-data-checkbox="resultFromCheckbox"
      />
      <button @click="resetButton">Clear All button</button>
    </section-wrap>
    <filter-results :data="dataToFilterResults"/>
  </div>
</template>

<script>
import InputFilter from '../InputFilter.vue';
import CheckboxFilter from '../CheckboxFilter.vue';
import FilterResults from './FilterResults.vue';

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
  computed: {
    dataToFilterResults() {
      return this.dataFromInput;
    },
  },
  beforeMount() {
    this.data.forEach((element) => {
      if (element.type === 'input') {
        this.inputData.push(element);
      } else if (element.type === 'checkbox') {
        this.checkboxData.push(element);
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
