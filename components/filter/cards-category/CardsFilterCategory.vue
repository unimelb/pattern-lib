<template>
  <div class="filter-category">
    <section-wrap bg-color="inverted-darker">
      <Loader :is-loading="isLoading">
        <div class="filter-category__container">
          <div class="filter-category__container-inner">
            <label
              class="filter-category__top-label"
              for="studyLevel">Study level</label>
            <div class="filter-category__radio-container">
              <div class="filter-category__radio-inner">
                <input
                  id="all"
                  v-model="selectedLevel"
                  checked
                  type="radio"
                  name="studyLevel"
                  value="">
                <label
                  class="filter-category__radio-label"
                  for="all">All</label>
              </div>
              <div
                v-for="level in filters.study_levels"
                id="studyLevel"
                :key="level"
                class="filter-category__radio-inner">
                <input
                  :id="level"
                  v-model="selectedLevel"
                  type="radio"
                  name="studyLevel"
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
              for="disciplines">Topic</label>
            <DropdownFilter
              id="disciplines"
              v-model="selectedDiscipline"
              :values="filters.disciplines" />
          </div>
          <div class="filter-category__container-inner">
            <label
              class="filter-category__top-label"
              for="input-search">Keywords</label>
            <input
              id="input-search"
              v-model="searchText"
              class="filter-category__input"
              type="search">
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
            <button
              v-if="selectedType.length"
              class="filter-category__section-btn shim-mb1"
              @click="clearSelectedType">
              <SvgIcon
                class="filter-category__section-btn-icon--left"
                name="arrow-left"
                width="16"
                height="16"
                aria-hidden="true" />
              Show all categories
            </button>
            <transition-group
              name="list"
              tag="div">
              <div
                v-for="item in dataFilteredInCategories"
                :key="item.category.name"
                class="filter-category__section list-item">
                <h2 class="title--lg">
                  {{ item.category.name }}
                </h2>
                <transition-group
                  name="list"
                  tag="div"
                  class="grid grid--4col">
                  <ListItem
                    v-for="childItem in selectedType.length ? item.category.data : item.category.data.slice(0, 4)"
                    :key="childItem.title"
                    class="list-item">
                    <GenericCard
                      hide-footer
                      :cols="3"
                      :thumb="childItem.img_url"
                      :title="childItem.title"
                      :href="childItem.link">
                      <div
                        slot="sub-title-1"
                        class="sub-title">
                        <SvgIcon :name="'clock'" />
                        <span>{{ childItem.duration }} minutes</span>
                      </div>
                    </GenericCard>
                  </ListItem>
                </transition-group>
                <button
                  v-if="!selectedType.length && item.category.data.length > 4"
                  class="filter-category__section-btn"
                  @click="showMoreButton(item.category.name)">
                  Show all {{ item.category.data.length }}
                  <SvgIcon
                    class="filter-category__section-btn-icon--right"
                    name="arrow-right"
                    width="16"
                    height="16"
                    aria-hidden="true" />
                </button>
              </div>
            </transition-group>
          </FilterResults>
        </LoadingOverlay>
      </Loader>
    </section-wrap>
  </div>
</template>

<script>
import escapeRegExp from 'lodash.escaperegexp';
import ListItem from 'components/listing/ListItem.vue';
import SvgIcon from 'components/icons/SvgIcon.vue';
import GenericCard from 'components/cards/GenericCard.vue';
import Loader from 'components/loader/Loader.vue';
import LoadingOverlay from 'components/loader/LoadingOverlay.vue';
import DropdownFilter from '../filters-core/filters/DropdownFilter.vue';
import FilterResults from '../filters-core/results/FilterResults.vue';
import { TIMER_500 } from '../../../constants/timers';

export default {
  components: {
    ListItem,
    SvgIcon,
    GenericCard,
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
      searchText: '',
      selectedDiscipline: '',
      selectedType: '',
      selectedLevel: '',
      dataFiltered: this.data,
      filters: {
        study_levels: [],
        disciplines: [],
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
        selectedDiscipline,
        selectedType,
        selectedLevel,
        searchText,
      } = this;

      const searchTextRegex = new RegExp(`${escapeRegExp(searchText)}`, 'i');
      const typeRegex = new RegExp(`^${escapeRegExp(selectedType)}$`, 'i');

      /* eslint-disable camelcase */
      return this.data.filter((data) => {
        const {
          disciplines,
          type,
          study_levels,
          title,
        } = data;

        return (selectedDiscipline === '' || disciplines.includes(selectedDiscipline))
        && (selectedLevel === '' || study_levels.includes(selectedLevel))
        && (selectedType === '' || type.match(typeRegex))
        && (searchText === '' || title.match(searchTextRegex));
      });
      /* eslint-enable camelcase */
    },
    dataFilteredInCategories() {
      const categories = [...new Set(this.dataFiltered.map((item) => item.type))];
      const categoriesFiltered = [];

      categories.sort();
      categories.forEach((category) => {
        categoriesFiltered.push({ category: { name: category, data: this.dataFiltered.filter((item) => item.type === category) } });
      });

      return categoriesFiltered;
    },
    countTotalFilteredResults() {
      let countResults = 0;

      if (this.dataFilteredInCategories.length) {
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        countResults = this.dataFilteredInCategories.map((item) => item.category.data.length).reduce(reducer);
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
      if (this.searchText.length) {
        filtersApplied += 1;
      }

      if (this.selectedDiscipline.length) {
        filtersApplied += 1;
      }

      if (this.selectedType.length) {
        filtersApplied += 1;
      }

      if (this.selectedLevel.length) {
        filtersApplied += 1;
      }
      return filtersApplied;
    },
    clearSearch() {
      this.dataFiltered = this.data;
      this.searchText = '';
      this.selectedDiscipline = '';
      this.selectedType = '';
      this.selectedLevel = '';
      this.countFiltersApplied = 0;
    },
    clearSelectedType() {
      this.dataFiltered = this.data;
      this.selectedType = '';
      this.filterDataButton();
    },
    showMoreButton(category) {
      this.selectedType = category;
      this.filterDataButton();
      this.$scrollTo('#filter-category-results');
    },
    getFilters() {
      const filters = {
        study_levels: [],
        disciplines: [],
        types: [],
      };

      /* eslint-disable camelcase */
      this.data.forEach((element) => {
        const { disciplines, study_levels, type } = element;

        study_levels.forEach((studyLevel) => {
          if (!filters.study_levels.includes(studyLevel)) {
            filters.study_levels.push(studyLevel);
          }
        });

        disciplines.forEach((dis) => {
          if (!filters.disciplines.includes(dis)) {
            filters.disciplines.push(dis);
          }
        });

        if (!filters.types.includes(type)) {
          filters.types.push(type);
        }
      });
      /* eslint-enable camelcase */

      // Sort filters.
      filters.study_levels.sort();
      filters.disciplines.sort();
      filters.types.sort();

      return filters;
    },
  },
};
</script>
