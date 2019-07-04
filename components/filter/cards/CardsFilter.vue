<template>
  <div>
    <section-wrap bg-color="white">
      <filter-parent v-if="filterOn.length" :data="filterOn" @event-data="dataFromFilterParent" />
      <div class="input-filter">
        <input
          v-model="searchData"
          type="search"
          placeholder="Type to search title or description"
          class="input-filter__input"
        />
        <button aria-label="Search" class="input-filter__search-button" @click="filterDataButton">
          <SvgIcon class="input-filter__search-button--icon" name="search" />
          <span class="input-filter__search-button--text">Search</span>
        </button>
      </div>

      <div class="cards-filter__container">
        <FilterResultsCount :data="dataFiltered.length" />
        <button class="cards-filter__button" @click="resetSearch">Clear results</button>
      </div>
    </section-wrap>
    <SectionWrap class="bg-alt">
      <div class="grid grid--3col">
        <ListItem v-for="(item, index) in dataFiltered" :key="index">
          <GenericCard
            :cols="3"
            :thumb="item.img_url"
            :title="item.title"
            :href="item.link"
            :excerpt="item.description"
          >
            <div slot="sub-title-1" class="sub-title">
              <SvgIcon name="info" />
              <span v-for="(item, index) in item.performance" :key="index">
                <span v-if="index > 0">{{ ', ' }}</span>
                <span>{{ item }}</span>
              </span>
            </div>
            <div slot="sub-title-2" class="sub-title">
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
import GenericCard from "../../cards/GenericCard.vue";
import FilterResultsCount from "../filters-core/results-count/FilterResultsCount.vue";
import FilterParent from "../filters-core/generic-filter/FilterParent.vue";

export default {
  components: { GenericCard, FilterResultsCount, FilterParent },
  props: {
    data: {
      type: Array,
      default: () => []
    },
    filterOn: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      searchData: "",
      dataFiltered: this.data,
      dataFiltered2: [{}]
    };
  },
  computed: {
    filteredData() {
      return this.data.filter(
        data =>
          data.title.match(new RegExp(this.searchData, "i")) ||
          data.description.match(new RegExp(this.searchData, "i"))
      );
    }
  },
  methods: {
    filterDataButton() {
      this.dataFiltered = this.filteredData;
    },
    resetSearch() {
      this.dataFiltered = this.data;
      this.searchData = "";
    },
    dataFromFilterParent(a) {
      console.log("data from parent", a);
      this.crossDataFromFilterWithExisting(a);
    },
    crossDataFromFilterWithExisting(filtered) {
      this.data.forEach(element => {
        // look for the filter name and match with data to filter and get the results
        if ((element.disciplines = filtered)) {
          this.dataFiltered2.push(element);
        }
      });
      console.log(this.dataFiltered2);
    }
  }
};
</script>
