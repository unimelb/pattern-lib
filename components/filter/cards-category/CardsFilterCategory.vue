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

    <FilterResultsCount
      :data="dataFiltered.length" />

    <FilterResults :show="showSSRCode">
      <slot />
    </FilterResults>

    <FilterResults :show="!showSSRCode">
      <div class="grid grid--4col">
        <ListItem
          v-for="(item, index) in dataFiltered"
          :key="index">
          <GenericCard
            :cols="3"
            :thumb="item.img_url"
            :title="item.title"
            :href="item.link"
            :tags="item.type">
            <div
              slot="sub-title-1"
              class="sub-title">
              <SvgIcon name="clock" />
              <span>{{ item.duration }} minutes</span>
            </div>
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
/*  eslint-disable */
      return this.data.filter((data) => {
        const {
          disciplines,
          type,
          study_level,
          title,
        } = data;

        return (selectedDiscipline === '' || disciplines.includes(selectedDiscipline))
        && (selectedType === '' || type.includes(selectedType))
        && (selectedStudyLevel === '' || study_level.match(studyLevelRegex))
        && (searchText === '' || title.match(searchTextRegex));
      });
    },
    animationclass() {
      if (this.searchText || this.selectedStudyLevel || this.selectedDiscipline || this.selectedType) {
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

        type.forEach((per) => {
          if (!filters.types.includes(per)) {
            filters.types.push(per);
          }
        });
      });

      // Sort filters.
      filters.study_levels.sort();
      filters.disciplines.sort();
      filters.types.sort();

      return filters;
    },
  },
};
</script>
