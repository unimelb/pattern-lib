<template>
  <div class="filter-courses">
    <Loader :is-loading="isLoading">
      <div class="filter-courses__results-count">
        <p
          id="filter-courses-results"
          class="filter-courses__results">
          <strong>
            {{ countTotalFilteredResults }} results
          </strong>
          found with
          <strong>
            {{ countFiltersApplied }}
          </strong>
          {{ filtersAppliedLabel }}
        </p>
      </div>
      <div class="filter-courses__container">
        <div
          class="filter-courses__container-inner">
          <label
            class="filter-courses__top-label"
            for="csp">Showing</label>
          <div class="filter-courses__radio-container">
            <div class="filter-courses__radio-inner">
              <input
                id="all"
                v-model="selectedCsp"
                type="radio"
                name="csp"
                value="all">
              <label
                class="filter-courses__radio-label"
                for="all">All</label>
            </div>
            <div class="filter-courses__radio-inner">
              <input
                id="csp"
                v-model="selectedCsp"
                checked
                type="radio"
                name="csp"
                :value="true">
              <label
                class="filter-courses__radio-label"
                for="csp">Commonwealth Supported Places</label>
            </div>
          </div>
        </div>
        <div class="filter-courses__container-inner">
          <label
            class="filter-courses__top-label"
            for="delivery_modes">Study Mode</label>
          <DropdownFilter
            id="delivery_modes"
            v-model="selectedStudyMode"
            :values="filters.delivery_modes" />
        </div>
        <div class="filter-courses__container-inner">
          <label
            class="filter-courses__top-label"
            for="area_of_interest">Area of Interest</label>
          <DropdownFilter
            id="area_of_interest"
            v-model="selectedAreaOfInterest"
            :values="filters.area_of_interest" />
        </div>
        <div class="filter-courses__container-inner">
          <label
            class="filter-courses__top-label filter-courses__top-label--hide"
            for="search-buttons">Filter and Clear</label>
          <div
            id="search-buttons"
            class="filter-courses__buttons">
            <!-- add the button icon component -->
            <ButtonIcon
              class="btn--cta filter-courses__filter-btn"
              no-icon
              aria-label="Filter"
              element="button"
              @click.native.prevent="filterDataButton">
              Filter
            </ButtonIcon>
            <button
              class="filter-courses__clear-btn"
              @click="clearSearch">
              <SvgIcon
                class="filter-courses__clear-btn-icon"
                width="14px"
                height="14px"
                :name="'close'" />
              Clear
            </button>
          </div>
        </div>
      </div>
      <LoadingOverlay
        :is-loading="isFetching"
        spinner-text="Fetching results">
        <FilterResults>
          <ResponsiveTable>
            <table
              class="filter-courses__table">
              <tr>
                <th class="filter-courses__table-heading">
                  Course Name
                </th>
                <th class="filter-courses__table-heading">
                  Study Mode
                </th>
                <th class="filter-courses__table-heading">
                  Area of Interest
                </th>
                <th class="filter-courses__table-heading">
                  CSP available 2021
                </th>
              </tr>
              <tr v-if="!dataFilteredIn.length">
                <td
                  colspan="4"
                  class="filter-courses__table--no-results">
                  No results found
                </td>
              </tr>
              <tr
                v-for="item in dataFilteredIn"
                v-else
                :key="item.title">
                <td class="filter-courses__table-data">
                  <a :href="item.url">
                    {{ item.title }}
                  </a>
                </td>
                <td class="filter-courses__table-data">
                  {{ item.delivery_modes.join(', ') }}
                </td>
                <td class="filter-courses__table-data">
                  {{ item.area_of_interest }}
                </td>
                <td class="filter-courses__table-data">
                  {{ item.csp | booleanTranslation }}
                </td>
              </tr>
            </table>
          </ResponsiveTable>
        </FilterResults>
      </LoadingOverlay>
    </Loader>
  </div>
</template>

<script>
import SvgIcon from 'components/icons/SvgIcon.vue';
import ButtonIcon from 'components/buttons/ButtonIcon.vue';
import Loader from 'components/loader/Loader.vue';
import LoadingOverlay from 'components/loader/LoadingOverlay.vue';
import ResponsiveTable from 'components/tables/ResponsiveTable.vue';
import DropdownFilter from '../filters-core/filters/DropdownFilter.vue';
import FilterResults from '../filters-core/results/FilterResults.vue';
import { TIMER_500 } from '../../../constants/timers';

export default {
  components: {
    SvgIcon,
    ButtonIcon,
    DropdownFilter,
    FilterResults,
    Loader,
    LoadingOverlay,
    ResponsiveTable,
  },
  filters: {
    booleanTranslation(value) {
      if (value === true) {
        return 'Yes';
      }
      return 'No';
    },
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
      selectedCsp: true,
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
    filtersAppliedLabel() {
      if (this.countFiltersApplied === 1) {
        return 'filter applied';
      }
      return 'filters applied';
    },
    filteredData() {
      const {
        selectedStudyMode,
        selectedAreaOfInterest,
        selectedCsp,
      } = this;

      /* eslint-disable camelcase */
      return this.data.filter((data) => {
        const {
          delivery_modes,
          area_of_interest,
          csp,
        } = data;

        return (selectedStudyMode === '' || delivery_modes.includes(selectedStudyMode))
        && (selectedAreaOfInterest === '' || area_of_interest === selectedAreaOfInterest)
        && (selectedCsp === 'all' || csp === selectedCsp);
      });
      /* eslint-enable camelcase */
    },
    dataFilteredIn() {
      const categoriesFiltered = this.dataFiltered;
      return categoriesFiltered;
    },
    countTotalFilteredResults() {
      let countResults = 0;

      if (this.dataFilteredIn.length) {
        countResults = this.dataFilteredIn.length;
      }
      return countResults;
    },
  },
  mounted() {
    this.filters = this.getFilters();
    this.filterDataButton();
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

      if (this.selectedCsp === true) {
        filtersApplied += 1;
      }
      return filtersApplied;
    },
    clearSearch() {
      this.isFetching = true;
      this.dataFiltered = this.data;
      this.selectedStudyMode = '';
      this.selectedAreaOfInterest = '';
      this.selectedCsp = 'all';
      this.countFiltersApplied = 0;
      setTimeout(() => {
        this.isFetching = false;
      }, TIMER_500);
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
