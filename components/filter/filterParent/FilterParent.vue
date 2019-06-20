<template>
  <div>
    <section-wrap>
      <input-filter
        v-if="dataToInput.length > 0"
        :data="dataToInput"
        @event-data-input="resultFromInput"
      />
      <checkbox-filter
        v-if="dataForCheckbox.length > 0"
        :data="dataForCheckbox"/>
    </section-wrap>
    <filter-results :data="dataFromInput"/>
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
    };
  },
  computed: {
    dataToInput() {
      return [
        {
          value: 'Arts',
        },
        {
          value: 'Science',
        },
      ];
    },
    dataForCheckbox() {
      return '';
    },
  },
  methods: {
    resultFromInput(dataFromInput) {
      this.dataFromInput = dataFromInput;
    },
  },
};
</script>
