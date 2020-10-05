<template>
  <div class="filter-category">
    <section-wrap bg-color="inverted-darker">
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
                width="18px"
                height="18px"
                name="close" />
              Clear
            </button>
          </div>
        </div>
      </div>

      <FilterResults :show="showSSRCode">
        <slot />
      </FilterResults>

      <FilterResults :show="!showSSRCode">
        <transition-group
          name="list"
          tag="div">
          <div
            v-for="(item, index) in dataFilteredInCategories"
            :key="index"
            class="filter-category__section">
            <h2 class="filter-category__category-label">
              {{ item.category.name }}
            </h2>
            <ListingWrap cols="4">
              <ListItem
                v-for="(childItem, i) in selectedType.length ? item.category.data : item.category.data.slice(0, 4)"
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
            </ListingWrap>
            <button
              v-if="!selectedType.length && item.category.data.length > 4"
              class="filter-category__show-all-btn"
              @click="showMoreButton(item.category.name)">
              Show all {{ item.category.data.length }}
              <SvgIcon
                class="filter-category__show-all-btn-icon"
                name="expand"
                width="16"
                height="16"
                aria-hidden="true" />
            </button>
          </div>
        </transition-group>
      </FilterResults>
    </section-wrap>
  </div>
</template>

<script>
import escapeRegExp from 'lodash.escaperegexp';
import ListItem from 'components/listing/ListItem.vue';
import ListingWrap from 'components/listing/ListingWrap.vue';
import SvgIcon from 'components/icons/SvgIcon.vue';
import GenericCard from 'components/cards/GenericCard.vue';
import DropdownFilter from '../filters-core/filters/DropdownFilter.vue';
import FilterResults from '../filters-core/results/FilterResults.vue';

export default {
  components: {
    ListItem,
    ListingWrap,
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
      selectedDiscipline: '',
      selectedType: '',
      selectedLevel: '',
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
          study_level,
          title,
        } = data;

        return (selectedDiscipline === '' || disciplines.includes(selectedDiscipline))
        && (selectedLevel === '' || study_level.match(selectedLevel))
        && (selectedType === '' || type.match(typeRegex))
        && (searchText === '' || title.match(searchTextRegex));
      });
      /* eslint-enable camelcase */
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
    clearSearch() {
      this.dataFiltered = this.data;
      this.searchText = '';
      this.selectedDiscipline = '';
      this.selectedType = '';
      this.selectedLevel = '';
    },
    showMoreButton(category) {
      this.selectedType = category;
      this.filterDataButton();
    },
    getFilters() {
      const filters = {
        study_levels: [],
        disciplines: [],
        types: [],
      };

      /* eslint-disable camelcase */
      this.data.forEach((element) => {
        const { disciplines, study_level, type } = element;

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
