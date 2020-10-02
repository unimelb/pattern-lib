<template>
  <div class="filter-category">
    <ListingWrap cols="4">
      <ListItem>
        <label
          class="filter-category__label"
          for="studyLevel">Study level</label>
        <div class="filter-category__checkbox-container">
          <div
            v-for="level in filters.study_levels"
            :key="level.name">
            <BaseCheckbox
              ref="baseCheckbox"
              class="filter-category__checkbox"
              :name="level.name"
              :aria-label="level.name"
              :is-checked="level.isChecked"
              :label="level.name"
              display="block"
              @change="onCheckboxChange" />
          </div>
        </div>
      </ListItem>
      <ListItem>
        <label
          class="filter-category__label"
          for="disciplines">Area of Interest</label>
        <DropdownFilter
          id="disciplines"
          v-model="selectedDiscipline"
          :values="filters.disciplines" />
      </ListItem>
      <!-- <label
      for="types">Webinar type</label>
    <DropdownFilter
      id="types"
      v-model="selectedType"
      :values="filters.types" /> -->
      <ListItem>
        <label
          class="filter-category__label"
          for="input-search">Keywords</label>
        <input
          id="input-search"
          v-model="searchText"
          type="search"
          placeholder="Type to search title">
      </ListItem>
      <ListItem>
        <div class="filter-category__buttons">
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
              width="15px"
              height="15px"
              name="close" />
            Clear
          </button>
        </div>
      </ListItem>
    </ListingWrap>

    <FilterResults :show="showSSRCode">
      <slot />
    </FilterResults>

    <FilterResults :show="!showSSRCode">
      <transition-group
        name="list"
        tag="div">
        <div
          v-for="(item, index) in dataFilteredInCategories"
          :key="index">
          <h1>{{ item.category.name }}</h1>
          <ListingWrap cols="4">
            <ListItem
              v-for="(childItem, i) in selectedType.length ? item.category.data : item.category.data.slice(0, 4)"
              :key="i">
              <GenericCard
                :cols="3"
                :thumb="childItem.img_url"
                :title="childItem.title"
                :excerpt="childItem.study_level + ' - ' + childItem.disciplines"
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
            @click="showMoreButton(item.category.name)">
            Show all {{ item.category.data.length }}
            <SvgIcon
              name="arrow-right"
              width="16"
              height="16"
              aria-hidden="true" />
          </button>
        </div>
      </transition-group>
    </FilterResults>
  </div>
</template>

<script>
import escapeRegExp from 'lodash.escaperegexp';
import ListItem from 'components/listing/ListItem.vue';
import ListingWrap from 'components/listing/ListingWrap.vue';
import SvgIcon from 'components/icons/SvgIcon.vue';
import GenericCard from 'components/cards/GenericCard.vue';
import BaseCheckbox from 'components/base/base-checkbox/BaseCheckbox.vue';
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
    BaseCheckbox,
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
      selectedLevels: ['Undergraduate', 'Graduate'],
      dataFiltered: this.data,
      filters: {
        study_levels: [{
          name: 'Undergraduate',
          isChecked: true,
        },
        {
          name: 'Graduate',
          isChecked: true,
        }],
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
        && (this.selectedLevels.includes(study_level))
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
      this.filters.study_levels.forEach((element) => {
        element.isChecked = false;
      });
      this.selectedLevels = ['Undergraduate', 'Graduate'];
    },
    showMoreButton(category) {
      this.selectedType = category;
      this.filterDataButton();
    },
    getFilters() {
      const filters = {
        study_levels: this.filters.study_levels,
        disciplines: [],
        types: [],
      };

      /* eslint-disable camelcase */
      this.data.forEach((element) => {
        const { disciplines, type } = element;

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
    onCheckboxChange({ name }) {
      this.filters.study_levels.forEach((level) => {
        if (level.name === name) {
          level.isChecked = !level.isChecked;
        }
      });

      this.selectedLevels = this.checkedStudyLevelsName();
    },
    checkedStudyLevelsName() {
      return this.filters.study_levels.map((level) => {
        if (level.isChecked === true) {
          return level.name;
        }
        return null;
      });
    },
  },
};
</script>
