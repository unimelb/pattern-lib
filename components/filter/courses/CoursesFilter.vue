<template>
  <div class="filter-category">
    <section-wrap bg-color="inverted-darker">
      <Loader :is-loading="isLoading">
        <div class="filter-category__container">
          <div class="filter-category__container-inner">
            <label
              class="filter-category__top-label"
              for="csp">Showing</label>
            <div class="filter-category__radio-container">
              <div class="filter-category__radio-inner">
                <input
                  id="all"
                  v-model="selectedCsp"
                  checked
                  type="radio"
                  name="csp"
                  :value="false">
                <label
                  class="filter-category__radio-label"
                  for="all">All</label>
              </div>
              <div class="filter-category__radio-inner">
                <input
                  id="csp"
                  v-model="selectedCsp"
                  type="radio"
                  name="csp"
                  :value="true">
                <label
                  class="filter-category__radio-label"
                  for="csp">CSP</label>
              </div>
            </div>
          </div>
          <div class="filter-category__container-inner">
            <label
              class="filter-category__top-label"
              for="delivery_modes">Study Mode</label>
            <DropdownFilter
              id="delivery_modes"
              v-model="selectedStudyMode"
              :values="filters.delivery_modes" />
          </div>
          <div class="filter-category__container-inner">
            <label
              class="filter-category__top-label"
              for="area_of_interest">Area of Interest</label>
            <DropdownFilter
              id="area_of_interest"
              v-model="selectedAreaOfInterest"
              :values="filters.area_of_interest" />
          </div>
          <div class="filter-category__container-inner">
            <label
              class="filter-category__top-label filter-category__top-label--hide"
              for="search-buttons">Filter and Clear</label>
            <div
              id="search-buttons"
              class="filter-category__buttons">
              <button
                class="filter-category__filter-btn"
                aria-label="Filter"
                @click="filterDataButton">
                <span>Filter</span>
              </button>
              <button
                class="filter-category__clear-btn"
                @click="clearSearch">
                <SvgIcon
                  class="filter-category__clear-btn-icon"
                  width="14px"
                  height="14px"
                  name="close" />
                Clear
              </button>
            </div>
          </div>
        </div>
        <LoadingOverlay
          :is-loading="isFetching"
          spinner-text="Fetching results">
          <FilterResults>
            <p
              id="filter-category-results"
              class="filter-category__results">
              <strong>
                {{ countTotalFilteredResults }} results
              </strong>
              found with
              <strong>
                {{ countFiltersApplied }}
              </strong>
              filters applied
            </p>
            <transition-group
              name="list"
              tag="div">
              <ul
                v-for="item in dataFilteredInCategories"
                :key="item.title"
                class="filter-category__section list-item">
                <li>Course name {{ item.title }}</li>
                <li>Study mode {{ item.delivery_modes }}</li>
                <li>Area of interest {{ item.area_of_interest }}</li>
                <li>CSP {{ item.csp }}</li>
              </ul>
            </transition-group>
          </FilterResults>
        </LoadingOverlay>
      </Loader>
    </section-wrap>
  </div>
</template>

<script>
import escapeRegExp from 'lodash.escaperegexp';
import SvgIcon from 'components/icons/SvgIcon.vue';
import Loader from 'components/loader/Loader.vue';
import LoadingOverlay from 'components/loader/LoadingOverlay.vue';
import DropdownFilter from '../filters-core/filters/DropdownFilter.vue';
import FilterResults from '../filters-core/results/FilterResults.vue';
import { TIMER_500 } from '../../../constants/timers';

export default {
  components: {
    SvgIcon,
    DropdownFilter,
    FilterResults,
    Loader,
    LoadingOverlay,
  },
  props: {
    data: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      selectedStudyMode: '',
      selectedAreaOfInterest: '',
      selectedCsp: false,
      dataFiltered: this.data,
      filters: {
        csp: [],
        delivery_modes: [],
        area_of_interest: [],
        types: [],
      },
      isLoading: false,
      isFetching: false,
      countFiltersApplied: 0,
    };
  },
  computed: {
    filteredData() {
      const {
        selectedStudyMode,
        selectedAreaOfInterest,
        selectedCsp,
      } = this;

      const selectedAreaOfInterestRegex = new RegExp(`${escapeRegExp(selectedAreaOfInterest)}`, 'i');

      /* eslint-disable camelcase */
      return this.data.filter((data) => {
        const {
          delivery_modes,
          area_of_interest,
          csp,
        } = data;

        return (selectedStudyMode === '' || delivery_modes.includes(selectedStudyMode))
        && (selectedAreaOfInterest === '' || area_of_interest.match(selectedAreaOfInterestRegex))
        && (csp === selectedCsp);
      });
      /* eslint-enable camelcase */
    },
    dataFilteredInCategories() {
      const categoriesFiltered = this.dataFiltered;
      return categoriesFiltered;
    },
    countTotalFilteredResults() {
      let countResults = 0;

      if (this.dataFilteredInCategories.length) {
        countResults = this.dataFilteredInCategories.length;
      }
      return countResults;
    },
  },
  mounted() {
    this.filters = this.getFilters();
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
    }, TIMER_500);
  },
  methods: {
    filterDataButton() {
      this.dataFiltered = this.filteredData;
      this.isFetching = true;
      this.countFiltersApplied = this.countFiltersAppliedCalculation();
      setTimeout(() => {
        this.isFetching = false;
      }, TIMER_500);
    },
    countFiltersAppliedCalculation() {
      let filtersApplied = 0;

      if (this.selectedStudyMode.length) {
        filtersApplied += 1;
      }

      if (this.selectedAreaOfInterest.length) {
        filtersApplied += 1;
      }

      if (this.selectedCsp.length) {
        filtersApplied += 1;
      }
      return filtersApplied;
    },
    clearSearch() {
      this.dataFiltered = this.data;
      this.selectedStudyMode = '';
      this.selectedAreaOfInterest = '';
      this.selectedCsp = '';
      this.countFiltersApplied = 0;
    },
    getFilters() {
      const filters = {
        csp: [],
        delivery_modes: [],
        area_of_interest: [],
      };

      /* eslint-disable camelcase */
      this.data.forEach((element) => {
        const {
          delivery_modes, area_of_interest, csp,
        } = element;


        if (!filters.csp.includes(csp)) {
          filters.csp.push(csp);
        }

        delivery_modes.forEach((dis) => {
          if (!filters.delivery_modes.includes(dis)) {
            filters.delivery_modes.push(dis);
          }
        });

        if (!filters.area_of_interest.includes(area_of_interest)) {
          filters.area_of_interest.push(area_of_interest);
        }
      });
      /* eslint-enable camelcase */

      // Sort filters.
      filters.csp.sort();
      filters.delivery_modes.sort();
      filters.area_of_interest.sort();

      return filters;
    },
  },
};
</script>
