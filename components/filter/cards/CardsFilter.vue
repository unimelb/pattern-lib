<template>
  <div>
    <div class="filter">
      <div class="filter__input-container">
        <label
          for="input-search"
          hidden> Title </label>
        <input
          id="input-search"
          v-model="searchText"
          class="filter__input"
          type="search"
          placeholder="Type to search title"
        >
      </div>
      <div class="grid">
        <div class="cell cell--tab-1of3">
          <label class="filter__label">
            School
            <DropdownVmodel
              v-model="selectedSchool"
              :values="filteredSchools"
              class="filter__dropdown"/>
          </label>
        </div>
        <div class="cell cell--tab-1of3">
          <label class="filter__label">
            Discipline
            <DropdownVmodel
              v-model="selectedDiscipline"
              :values="filteredDisciplines"
              class="filter__dropdown"/>
          </label>
        </div>
        <div class="cell cell--tab-1of3">
          <label class="filter__label">
            Performance type
            <DropdownVmodel
              v-model="selectedPerformance"
              :values="filteredPerformances"
              class="filter__dropdown"/>
          </label>
        </div>
      </div>

      <div class="filter__button-container">
        <button
          :class="animationclass"
          class="filter__button"
          aria-label="Search"
          @click="filterDataButton">
          <SvgIcon
            class="filter__button--icon"
            name="search" />
          <span>Search</span>
        </button>
        <button
          class="filter__button"
          @click="resetSearch"
        >Reset all</button>
      </div>
    </div>
    <FilterResultsCount
      :data="dataFiltered.length"
      class="filter__results" />

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
            <a :href="item.link">
              View showcase
              <SvgIcon
                class="link-icon"
                name="chevron-right"
                width="10"
                height="10"/>
            </a>
          </template>
        </GenericCard>
      </ListItem>
    </div>
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
  },
  data() {
    return {
      searchText: '',
      selectedSchool: '',
      selectedDiscipline: '',
      selectedPerformance: '',
      dataFiltered: this.data,
    };
  },
  computed: {
    filteredData() {
      return this.data.filter(
        data => (this.selectedDiscipline === '' || data.disciplines.includes(this.selectedDiscipline))
          && (this.selectedPerformance === '' || data.performance.includes(this.selectedPerformance))
          && data.school.match(new RegExp(this.selectedSchool, 'i'))
          && data.title.match(new RegExp(this.searchText, 'i'))
      );
    },
    filteredSchools() {
      const schools = [];
      this.data.forEach((element) => {
        if (!schools.includes(element.school)) {
          schools.push(element.school);
        }
      });
      return schools;
    },
    filteredDisciplines() {
      const disciplines = [];
      this.data.forEach((element) => {
        if (!disciplines.includes(...element.disciplines)) {
          disciplines.push(...element.disciplines);
        }
      });
      return disciplines;
    },
    filteredPerformances() {
      const performances = [];
      this.data.forEach((element) => {
        if (!performances.includes(...element.performance)) {
          performances.push(...element.performance);
        }
      });
      return performances;
    },
    animationclass() {
      if (this.searchText || this.selectedSchool || this.selectedDiscipline || this.selectedPerformance) {
        return 'filter__button--animated';
      }
      return '';
    },
  },
  methods: {
    filterDataButton() {
      this.dataFiltered = this.filteredData;
    },
    resetSearch() {
      this.dataFiltered = this.data;
      this.searchText = '';
      this.selectedSchool = '';
      this.selectedDiscipline = '';
      this.selectedPerformance = '';
    },
  },
};
</script>
