<template>
  <div>
    <div class="filter">
      <div class="filter__container">
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

      <div class="filter__container">
        <div class="grid">
          <div class="cell cell--tab-1of3">
            <label
              class="filter__label"
              for="school">School</label>
            <DropdownFilter
              id="school"
              v-model="selectedSchool"
              :values="filters.schools"/>
          </div>
          <div class="cell cell--tab-1of3">
            <label
              class="filter__label"
              for="disciplines">Discipline</label>
            <DropdownFilter
              id="disciplines"
              v-model="selectedDiscipline"
              :values="filters.disciplines"/>
          </div>
          <div class="cell cell--tab-1of3">
            <label
              class="filter__label"
              for="performances">Performance type</label>
            <DropdownFilter
              id="performances"
              v-model="selectedPerformance"
              :values="filters.performances"/>
          </div>
        </div>
      </div>

      <div class="filter__container filter__container--centered">
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
      :data="dataFiltered.length"/>

    <FilterResults :show="showSSRCode">
      <slot />
    </FilterResults>

    <FilterResults :show="!showSSRCode">
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
              <span>{{ item.performance.join(', ') }}</span>
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
    </FilterResults>
  </div>
</template>

<script>
import escapeRegExp from 'lodash.escaperegexp';
import ListItem from '../../listing/ListItem.vue';
import SvgIcon from '../../icons/SvgIcon.vue';
import GenericCard from '../../cards/GenericCard.vue';
import DropdownFilter from '../filters-core/filters/DropdownFilter.vue';
import FilterResultsCount from '../filters-core/results-count/FilterResultsCount.vue';
import FilterResults from '../filters-core/results/FilterResults.vue';

export default {
  components: {
    ListItem,
    SvgIcon,
    GenericCard,
    DropdownFilter,
    FilterResultsCount,
    FilterResults,
  },
  props: {
    data: {
      type: Array,
      default: () => [],
    },
    showSsr: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      searchText: '',
      selectedSchool: '',
      selectedDiscipline: '',
      selectedPerformance: '',
      dataFiltered: this.data,
      filters: {
        schools: [],
        disciplines: [],
        performances: [],
      },
      showSSRCode: this.showSsr,
    };
  },
  computed: {
    filteredData() {
      const {
        selectedDiscipline,
        selectedPerformance,
        selectedSchool,
        searchText,
      } = this;

      const schoolRegex = new RegExp(`^${escapeRegExp(selectedSchool)}$`, 'i');
      const searchTextRegex = new RegExp(`${escapeRegExp(searchText)}`, 'i');

      return this.data.filter((data) => {
        const {
          disciplines,
          performance,
          school,
          title,
        } = data;

        return (selectedDiscipline === '' || disciplines.includes(selectedDiscipline))
        && (selectedPerformance === '' || performance.includes(selectedPerformance))
        && (selectedSchool === '' || school.match(schoolRegex))
        && (searchText === '' || title.match(searchTextRegex));
      });
    },
    animationclass() {
      if (this.searchText || this.selectedSchool || this.selectedDiscipline || this.selectedPerformance) {
        return 'filter__button--animated';
      }
      return '';
    },
  },
  mounted() {
    this.filters = this.getFilters();
  },
  methods: {
    filterDataButton() {
      this.dataFiltered = this.filteredData;

      this.showSSRCode = false;
    },
    resetSearch() {
      this.dataFiltered = this.data;
      this.searchText = '';
      this.selectedSchool = '';
      this.selectedDiscipline = '';
      this.selectedPerformance = '';
    },
    getFilters() {
      const filters = {
        schools: [],
        disciplines: [],
        performances: [],
      };

      this.data.forEach((element) => {
        const { school, disciplines, performance } = element;

        if (!filters.schools.includes(school)) {
          filters.schools.push(school);
        }

        disciplines.forEach((dis) => {
          if (!filters.disciplines.includes(dis)) {
            filters.disciplines.push(dis);
          }
        });

        performance.forEach((per) => {
          if (!filters.performances.includes(per)) {
            filters.performances.push(per);
          }
        });
      });

      // Sort filters.
      filters.schools.sort();
      filters.disciplines.sort();
      filters.performances.sort();

      return filters;
    },
  },
};
</script>
