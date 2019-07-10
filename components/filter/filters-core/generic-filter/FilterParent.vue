<template>
  <div>
    <section-wrap bg-color="white">
      <div class="filter-parent">
        <input-filter
          v-if="inputData.length > 0"
          :data="inputData"
          @event-data-input="resultFromField"
        />
        <button
          aria-label="Filters"
          class="input-filter__search-button"
          @click="showDetails = !showDetails">
          <SvgIcon
            class="input-filter__search-button--icon"
            name="search"/>
          <span class="input-filter__search-button--text">Filters</span>
        </button>
      </div>

      <div v-show="showDetails">
        <CheckboxFilter
          v-if="checkboxData1.length > 0"
          :data="checkboxData1"
          @event-data-input="resultFromField"/>
        <CheckboxFilter
          v-if="checkboxData2.length > 0"
          :data="checkboxData2"
          @event-data-input="resultFromField"/>
        <CheckboxFilter
          v-if="checkboxData3.length > 0"
          :data="checkboxData3"
          @event-data-input="resultFromField"/>
        <CheckboxFilter
          v-if="checkboxData4.length > 0"
          :data="checkboxData4"
          @event-data-input="resultFromField"/>
      </div>
    </section-wrap>
  </div>
</template>

<script>
import InputFilter from '../input/InputFilter.vue';
import CheckboxFilter from '../checkbox/CheckboxFilter.vue';

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
      checkboxData1: [],
      checkboxData2: [],
      checkboxData3: [],
      checkboxData4: [],
      dataFiltered: [],
      filtersToApply: [],
      fullData: this.data,
      showDetails: false,
    };
  },
  beforeMount() {
    this.filterOn.forEach((element) => {
      if (element.type === 'input') {
        this.inputData.push(...element.filterOn);
      } else if (element.type === 'multi-select-1') {
        this.checkboxData1.push(element);
      } else if (element.type === 'multi-select-2') {
        this.checkboxData2.push(element);
      } else if (element.type === 'multi-select-3') {
        this.checkboxData3.push(element);
      } else if (element.type === 'multi-select-4') {
        this.checkboxData4.push(element);
      }
    });
  },
  methods: {
    resultFromField(obj) {
      // console.log('input event:', obj);

      this.filtersToApply.push(obj);

      // console.log('filters to apply', this.filtersToApply);
      this.applyFilters();
    },

    applyFilters() {
      const filterKeys = [];
      let filterValue;
      this.filtersToApply.forEach((element) => {
        if (!filterKeys.includes(...element.filterOn)) {
          filterKeys.push(...element.filterOn);
          filterValue = element.value;
        }
      });

      // more info: https://fusejs.io/
      const options = {
        shouldSort: true,
        tokenize: true,
        threshold: 0.2,
        location: 0,
        distance: 100,
        maxPatternLength: 32,
        minMatchCharLength: 1,
        keys: filterKeys,
      };

      // console.log('filter keys', filterKeys);
      // console.log('filter value', filterValue);

      if (filterValue instanceof Array) {
        filterValue.forEach((element) => {
          this.$search(element, this.fullData, options).then((results) => {
            if (this.dataFiltered.includes(results)) {
              this.$search(filterValue, this.dataFiltered, options).then((res) => {
                this.dataFiltered.push(...res);
              });
            } else {
              this.dataFiltered.push(...results);
            }
          });
        });
        this.sendDataToParent(this.dataFiltered);
        // console.log('fuse array', this.dataFiltered);
      } else {
        this.$search(filterValue, this.fullData, options).then((results) => {
          if (this.dataFiltered.includes(results)) {
            this.$search(filterValue, this.dataFiltered, options).then((res) => {
              this.dataFiltered = res;
            });
          } else {
            this.dataFiltered = results;
          }
          this.sendDataToParent(this.dataFiltered);
          // console.log('fuse string', this.dataFiltered);
        });
      }
    },

    sendDataToParent(d) {
      this.$emit('event-data', d);
    },
  },
};
</script>
