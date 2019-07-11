<template>
  <div>
    <section-wrap bg-color="white">
      <div class="input-filter">
        <div class="input-filter__container">
          <input
            v-model="searchData"
            type="search"
            placeholder="Type to search title or description"
            class="input-filter__input"
          >
          <button
            aria-label="Search"
            class="input-filter__search-button"
            @click="filterDataButton">
            <SvgIcon
              class="input-filter__search-button--icon"
              name="search" />
            <span class="input-filter__search-button--text">Search</span>
          </button>
        </div>
        <div class="accordion-filter__search-box">
          <label class="accordion-filter__label">
            School
            <DropdownVmodel
              v-model="selectedSchool"
              :values="filteredSchools"/>
          </label>
          <label class="accordion-filter__label">
            Disciplines
            <DropdownVmodel
              v-model="selectedDiscipline"
              :values="filteredDisciplines"/>
          </label>
          <label class="accordion-filter__label">
            Location
            <DropdownVmodel
              v-model="selectedLocation"
              :values="filteredLocations"/>
          </label>

          <label class="accordion-filter__label">
            Performance type
            <DropdownVmodel
              v-model="selectedPerformance"
              :values="filteredPerformances"/>
          </label>
        </div>
      </div>

      <div class="cards-filter__container">
        <FilterResultsCount :data="dataFiltered.length" />
        <button
          class="cards-filter__button"
          @click="resetSearch">Clear results</button>
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
import GenericCard from '../../cards/GenericCard.vue';
import DropdownVmodel from '../../dropdown/DropdownVmodel.vue';
import FilterResultsCount from '../filters-core/results-count/FilterResultsCount.vue';
export default {
  components: { GenericCard, DropdownVmodel, FilterResultsCount },
  props: {
    data: {
      type: Array,
      default: () => [],
    },
    filterOn: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      searchData: '',
      selectedSchool: '',
      selectedDiscipline: '',
      selectedLocation: '',
      selectedPerformance: '',
      dataFiltered: this.data,
    };
  },
  computed: {
    filteredData() {
      return this.data.filter(
        data => (data.title.match(new RegExp(this.searchData, 'i'))
          || data.description.match(new RegExp(this.searchData, 'i')))
          && data.school.match(new RegExp(this.selectedSchool, 'i'))
          && data.disciplines.match(new RegExp(this.selectedDiscipline, 'i'))
          && data.location.match(new RegExp(this.selectedLocation, 'i'))
          && data.performance.match(new RegExp(this.selectedPerformance, 'i'))
      );
    },
    filteredSchools() {
      const schools = [];
      this.data.forEach((element) => {
        schools.push(element.school);
      });
      return schools;
    },
    filteredDisciplines() {
      const disciplines = [];
      this.data.forEach((element) => {
        disciplines.push(element.disciplines);
      });
      return disciplines;
    },
    filteredLocations() {
      const locations = [];
      this.data.forEach((element) => {
        locations.push(element.location);
      });
      return locations;
    },
    filteredPerformances() {
      const performances = [];
      this.data.forEach((element) => {
        performances.push(element.performances);
      });
      return performances;
    },
  },
  methods: {
    filterDataButton() {
      this.dataFiltered = this.filteredData;
    },
    resetSearch() {
      this.dataFiltered = this.data;
      this.searchData = '';
      this.selectedSchool = '';
      this.selectedDiscipline = '';
      this.selectedLocation = '';
      this.selectedPerformance = '';
    },
  },
};
</script>
