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
                  value="">
                <label
                  class="filter-category__radio-label"
                  for="all">All</label>
              </div>
              <div
                v-for="level in filters.csp"
                id="csp"
                :key="level"
                class="filter-category__radio-inner">
                <input
                  :id="level"
                  v-model="selectedCsp"
                  type="radio"
                  name="csp"
                  :value="level">
                <label
                  class="filter-category__radio-label"
                  :for="level">{{ level }}</label>
              </div>
            </div>
          </div>
          <div class="filter-category__container-inner">
            <label
              class="filter-category__top-label"
              for="study_mode">Study Mode</label>
            <DropdownFilter
              id="study_mode"
              v-model="selectedStudyMode"
              :values="filters.study_mode" />
          </div>
          <div class="filter-category__container-inner">
            <label
              class="filter-category__top-label"
              for="faculty">Area of Interest</label>
            <DropdownFilter
              id="faculty"
              v-model="selectedFaculty"
              :values="filters.faculty" />
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
                <li>Study mode {{ item.study_mode }}</li>
                <li>Area of interest {{ item.faculty }}</li>
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
      selectedFaculty: '',
      selectedCsp: '',
      dataFiltered: this.data,
      filters: {
        csp: [],
        study_mode: [],
        faculty: [],
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
        selectedFaculty,
        selectedCsp,
      } = this;

      /* eslint-disable camelcase */
      return this.data.filter((data) => {
        const {
          study_mode,
          faculty,
          csp,
        } = data;

        return (selectedStudyMode === '' || study_mode.includes(selectedStudyMode))
        && (selectedFaculty === '' || faculty.includes(selectedFaculty))
        && (selectedCsp === '' || csp.includes(selectedCsp));
      });
      /* eslint-enable camelcase */
    },
    dataFilteredInCategories() {
      const categoriesFiltered = this.dataFiltered;

      console.log(categoriesFiltered);

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

      if (this.selectedFaculty.length) {
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
      this.selectedFaculty = '';
      this.selectedCsp = '';
      this.countFiltersApplied = 0;
    },
    getFilters() {
      const filters = {
        csp: [],
        study_mode: [],
        faculty: [],
      };

      /* eslint-disable camelcase */
      this.data.forEach((element) => {
        const {
          study_mode, faculty, csp,
        } = element;


        csp.forEach((cspChoice) => {
          if (!filters.csp.includes(cspChoice)) {
            filters.csp.push(cspChoice);
          }
        });

        study_mode.forEach((dis) => {
          if (!filters.study_mode.includes(dis)) {
            filters.study_mode.push(dis);
          }
        });

        faculty.forEach((dis) => {
          if (!filters.faculty.includes(dis)) {
            filters.faculty.push(dis);
          }
        });
      });
      /* eslint-enable camelcase */

      // Sort filters.
      filters.csp.sort();
      filters.study_mode.sort();
      filters.faculty.sort();

      return filters;
    },
  },
};
</script>
