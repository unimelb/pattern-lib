<template>
  <div>
    <section-wrap bg-color="white">
      <input-filter
        v-if="inputData.length > 0"
        :data="inputData"
        @event-data-input="resultFromField"
      />
    </section-wrap>
  </div>
</template>

<script>
import InputFilter from '../input/InputFilter.vue';
import CheckboxFilter from '../checkbox/CheckboxFilter';
const _ = require('lodash');

export default {
  components: {
    InputFilter,
    CheckboxFilter,
  },
  props: {
    data: {
      type: [Array, Object],
      default: () => [],
    },
    filterOn: {
      type: [Array, Object],
      default: () => [],
    },
  },
  data() {
    return {
      inputData: [],
      dataFiltered: [],
      filtersToApply: [],
      fullData: this.data,
    };
  },
  beforeMount() {
    this.filterOn.forEach((element) => {
      if (element.type === 'input') {
        this.inputData.push(...element.filterOn);
      }
    });
  },
  methods: {
    resultFromField(obj) {
      console.log('input event:', obj);
      
      this.filtersToApply.push(obj);

      console.log("filters to apply", this.filtersToApply);
      this.applyFilters();
    },

    applyFilters() {

      var useConditions = search => a => Object.keys(search).every(k => 
        a[k] === search[k] ||
        Array.isArray(search[k]) && search[k].includes(a[k]) ||
        typeof search[k] === 'object' && +search[k].min <= a[k] &&  a[k] <= +search[k].max ||
        typeof search[k] === 'function' && search[k](a[k])
    );
console.log("new", this.fullData.filter(useConditions(this.filtersToApply)));


      this.dataFiltered = _.filter(this.fullData, (record) => {
        let hasValue = false;

        console.log("full data", this.fullData);

        // Go through each filter and filter on value.
        _.forEach(this.filtersToApply, (value) => {
          const keysToCheck = _.pick(record, value.filterOn);
          // const valuesToCheck = _.values(keysToCheck);

          console.log("test", _.find(keysToCheck, value.value));
          console.log("test2", _.includes(keysToCheck, value.value));

          hasValue = _.includes(keysToCheck, value.value);

          console.log("value value", value.value);

          // If one value is found then display the record and exit.
          if (hasValue) {
            return false;
          }
        });

        return hasValue;
      });
      console.log('filtered data', this.dataFiltered);
    },
    sendDataToParent(d) {
      this.$emit('event-data', d);
    },
  },
};
</script>
