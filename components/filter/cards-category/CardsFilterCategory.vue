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
          placeholder="Type to search title">
      </div>

      <div class="filter__container">
        <div class="grid">
          <div class="cell cell--tab-1of3">
            <label
              class="filter__label"
              for="studyLevel">Study level</label>
            <DropdownFilter
              id="studyLevel"
              v-model="selectedStudyLevel"
              :values="filters.study_levels" />
          </div>
          <div class="cell cell--tab-1of3">
            <label
              class="filter__label"
              for="disciplines">Area of Interest</label>
            <DropdownFilter
              id="disciplines"
              v-model="selectedDiscipline"
              :values="filters.disciplines" />
          </div>
          <div class="cell cell--tab-1of3">
            <label
              class="filter__label"
              for="types">Webinar type</label>
            <DropdownFilter
              id="types"
              v-model="selectedType"
              :values="filters.types" />
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
          @click="resetSearch">
          Reset all
        </button>
      </div>
    </div>

    <FilterResults :show="showSSRCode">
      <slot />
    </FilterResults>

    <FilterResults :show="!showSSRCode">
      <div
        v-for="(item, index) in dataFilteredInCategories"
        :key="index">
        <h1>{{ item.category.name }}</h1>
        <div
          class="grid grid--4col">
          <ListItem
            v-for="(childItem, i) in item.category.data"
            :key="i">
            <GenericCard
              :cols="3"
              :thumb="childItem.img_url"
              :title="childItem.title"
              :href="childItem.link">
              <div
                slot="sub-title-1"
                class="sub-title">
                <SvgIcon name="clock" />
                <span>{{ childItem.duration }} minutes</span>
              </div>
            </GenericCard>
          </ListItem>
        </div>
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
import FilterResults from '../filters-core/results/FilterResults.vue';

export default {
  components: {
    ListItem,
    SvgIcon,
    GenericCard,
    DropdownFilter,
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
      selectedStudyLevel: '',
      selectedDiscipline: '',
      selectedType: '',
      dataFiltered: this.data,
      filters: {
        study_levels: [],
        disciplines: [],
        types: [],
      },
      showSSRCode: this.showSsr,
    };
  },
  computed: {
    filteredData() {
      const {
        selectedDiscipline,
        selectedType,
        selectedStudyLevel,
        searchText,
      } = this;

      const studyLevelRegex = new RegExp(`^${escapeRegExp(selectedStudyLevel)}$`, 'i');
      const searchTextRegex = new RegExp(`${escapeRegExp(searchText)}`, 'i');
      const typeRegex = new RegExp(`^${escapeRegExp(selectedType)}$`, 'i');

      /* eslint-disable camelcase */
      return this.data.filter((data) => {
        const {
          disciplines,
          type,
          study_level,
          title,
        } = data;

        return (selectedDiscipline === '' || disciplines.includes(selectedDiscipline))
        && (selectedType === '' || type.match(typeRegex))
        && (selectedStudyLevel === '' || study_level.match(studyLevelRegex))
        && (searchText === '' || title.match(searchTextRegex));
      });
      /* eslint-enable camelcase */
    },
    animationclass() {
      if (this.searchText || this.selectedStudyLevel || this.selectedDiscipline || this.selectedType) {
        return 'filter__button--animated';
      }
      return '';
    },
    dataFilteredInCategories() {
      const categories = [...new Set(this.dataFiltered.map((item) => item.type))];
      const categoriesFiltered = [];

      categories.forEach((category) => {
        categoriesFiltered.push({ category: { name: category, data: this.dataFiltered.filter((item) => item.type === category) } });
      });

      return categoriesFiltered;
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
      this.selectedStudyLevel = '';
      this.selectedDiscipline = '';
      this.selectedType = '';
    },
    getFilters() {
      const filters = {
        study_levels: [],
        disciplines: [],
        types: [],
      };

      /* eslint-disable camelcase */
      this.data.forEach((element) => {
        const { study_level, disciplines, type } = element;

        if (!filters.study_levels.includes(study_level)) {
          filters.study_levels.push(study_level);
        }

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
