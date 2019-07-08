<template>
  <div>
    <section-wrap bg-color="white">
      <input-filter
        v-if="inputData.length > 0"
        :data="inputData"
        @event-data-input="resultFromInput"
      />

      <div>
        <checkbox-filter
          v-if="checkboxData1.length > 0"
          :data="checkboxData1"
          title="Select School"
          @event-data-input="resultFromCheckbox" />
        <checkbox-filter
          v-if="checkboxData2.length > 0"
          :data="checkboxData2"
          title="Select School"
          @event-data-input="resultFromCheckbox" />
      </div>
    </section-wrap>
    <!--
testing purposes
    -->

    <section-wrap bg-color="inverted">

      <div>
        <h1>filter results of input: {{ dataFromInput }}</h1>
        <h1
          v-for="(item, index) in dataFromInput"
          :key="index">{{ item.value }}</h1>
      </div>
      <div>
        <h1>filter results of checkbox: checkbox 1{{ checkboxData1 }} checkbox 2 {{ checkboxData2 }}</h1>
        <li
          v-for="(item, index) in dataFromCheckbox"
          :key="index">{{ item }}</li>
      </div>
    </section-wrap>
    <SectionWrap class="bg-alt">
      <div class="grid grid--3col">
        <ListItem
          v-for="(item, index) in dataFiltered"
          :key="index">
          <GenericCard
            :cols="3"
            :thumb="item.img_url"
            :title="item.title"
            :href="item.link"
            :excerpt="item.description"
          >
            <div
              slot="sub-title-1"
              class="sub-title">
              <SvgIcon name="info" />
              <span
                v-for="(item, index) in item.performance"
                :key="index">
                <span v-if="index > 0">{{ ', ' }}</span>
                <span>{{ item }}</span>
              </span>
            </div>
            <div
              slot="sub-title-2"
              class="sub-title">
              <SvgIcon name="calendar" />
              <span>{{ item.start_time }}</span>
            </div>
            <template slot="links">
              <a :href="item.link">View showcase ></a>
            </template>
          </GenericCard>
        </ListItem>
      </div>
    </SectionWrap>

  </div>
</template>

<script>
import GenericCard from '../../../cards/GenericCard.vue';
import InputFilter from '../input/InputFilter.vue';
import CheckboxFilter from '../checkbox/CheckboxFilter';
import FilterResults from '../results/FilterResults.vue';

export default {
  components: {
    InputFilter,
    CheckboxFilter,
    FilterResults,
    GenericCard,
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
      dataFromInput: [],
      dataFromCheckbox: [],
      inputData: [],
      checkboxData1: [],
      checkboxData2: [],
      fullData: [],
      dataFiltered: [],
      filtersToApply: [],
    };
  },
  beforeMount() {
    this.filterOn.forEach((element) => {
      if (element.type === 'input') {
        this.inputData.push(...element.values);
      } else if (element.type === 'multi-select-1') {
        this.checkboxData1.push(...element.values);
      } else if (element.type === 'multi-select-2') {
        this.checkboxData2.push(...element.values);
      }
    });
    this.dataFiltered = this.data;
  },
  methods: {
    resultFromField(obj) {
      // this.data.filter(data => data.[filterOn])

      this.filtersToApply.push(obj);

      this.applyFilters();

    // filteredData() {
    //   return this.data.filter(data => data.title.match(new RegExp(this.userInputData, 'i')));
    // },

    //   this.dataFromInput = dataFromInput;
    //   this.sendDataToParent(dataFromInput);
    },
    resultFromCheckbox(dataFromCheckbox) {
      this.dataFiltered = this.data.filter(data => dataFromCheckbox.includes(data.school));
      if (this.dataFromCheckbox.includes(...dataFromCheckbox) === false) {
        this.dataFromCheckbox.push(...dataFromCheckbox);
        this.fullData.push(...dataFromCheckbox);
      } else {
        this.dataFromCheckbox = [];
        this.dataFromCheckbox.push(...dataFromCheckbox);
      }
      this.sendDataToParent(dataFromCheckbox);
    },
    applyFilters() {
      // do filtering with lodash

      // emit event to parent with filtered data
    },
    resetButton() {},
    sendDataToParent(d) {
      this.$emit('event-data', d);
    },
  },
};
</script>
