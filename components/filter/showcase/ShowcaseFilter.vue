<template>
  <div>
    <div class="form form--inline__row form--inline__row--center">
      <input
        v-model="searchData"
        aria-label="Card title"
        class="form--inline__search"
        type="search"
        placeholder="Type to search title or description"
      >
      <button
        class="form--inline__button form--inline__button--alt"
        aria-label="Search"
        @click="filterDataButton"
      >
        <SvgIcon
          class="form--inline__svg"
          name="search" />
        <span class="form--inline__button-label">Search</span>
      </button>
    </div>
    <div class="resultsContainer">
      <p class="results">{{ dataFiltered.length }} results</p>
      <p class="filtersApplied">(Filters applied)</p>
      <button @click="resetSearch">Clear results</button>
    </div>

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
              <span
                v-for="(item, index) in item.performance"
                :key="index">{{ item }}</span>
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
import InputFilter from '../InputFilter.vue';
import GenericCard from '../../cards/GenericCard.vue';

export default {
  components: { InputFilter, GenericCard },
  props: {
    data: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      searchData: '',
      dataFiltered: this.data,
    };
  },
  computed: {
    filteredData() {
      return this.data.filter(
        data => data.title.match(new RegExp(this.searchData, 'i'))
          || data.description.match(new RegExp(this.searchData, 'i'))
      );
    },
  },
  methods: {
    filterDataButton() {
      this.dataFiltered = this.filteredData;
    },
    resetSearch() {
      this.dataFiltered = this.data;
      this.searchData = '';
    },
  },
};
</script>
