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
              for="locations">Location</label>
            <DropdownFilter
              id="locations"
              v-model="selectedLocation"
              :values="filters.locations"/>
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
              for="auditions">Audition Requirement</label>
            <DropdownFilter
              id="auditions"
              v-model="selectedAudition"
              :values="filters.auditions"/>
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
      :data="dataFiltered.length" />

    <FilterResults :show="showSSRCode">
      <slot />
    </FilterResults>

    <FilterResults :show="!showSSRCode">
      <transition-group
        name="fade"
        tag="div">
        <div
          v-for="(item, index) in dataFiltered"
          :key="index"
          class="accordion-list">
          <accordion :name="item.name">
            <table class="table table--striped table--tight table--is-compacted">
              <tbody>
                <colgroup>
                  <col width="30%">
                  <col width="70%">
                </colgroup>
                <tr>
                  <th scope="row">Location</th>
                  <td>{{ item.location.join(', ') }}</td>
                </tr>
                <tr>
                  <th scope="row">Semester</th>
                  <td>{{ item.semester.join(', ') }}</td>
                </tr>
                <tr>
                  <th scope="row">Points</th>
                  <td>{{ item.points }}</td>
                </tr>
                <tr>
                  <th scope="row">Discipline</th>
                  <td>{{ item.discipline }}</td>
                </tr>
                <tr>
                  <th scope="row">Audition requirement</th>
                  <td>{{ item.audition }}</td>
                </tr>
                <tr>
                  <th scope="row">Study Abroad</th>
                  <td>{{ item.abroad }}</td>
                </tr>
              </tbody>
            </table>
            <p>
              {{ item.overview }}
            </p>
            <ButtonIcon size="xsml">{{ item.buttonText }}</ButtonIcon>
          </accordion>
        </div>
      </transition-group>
    </FilterResults>
  </div>
</template>

<script>
import Accordion from '../../accordion/Accordion.vue';
import DropdownFilter from '../filters-core/filters/DropdownFilter.vue';
import FilterResultsCount from '../filters-core/results-count/FilterResultsCount.vue';
import ButtonIcon from '../../buttons/ButtonIcon.vue';
import SvgIcon from '../../icons/SvgIcon.vue';
import FilterResults from '../filters-core/results/FilterResults.vue';

export default {
  components: {
    Accordion,
    DropdownFilter,
    FilterResultsCount,
    ButtonIcon,
    SvgIcon,
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
      selectedLocation: '',
      selectedAudition: '',
      dataFiltered: this.data,
      filters: {
        disciplines: [],
        locations: [],
        auditions: [],
      },
      showSSRCode: this.showSsr,
    };
  },
  computed: {
    filteredData() {
      return this.data.filter(
        data => (this.selectedLocation === '' || data.location.includes(this.selectedLocation))
          && data.discipline.match(new RegExp(this.selectedDiscipline, 'i'))
          && data.audition.match(new RegExp(this.selectedAudition, 'i'))
          && data.name.match(new RegExp(this.searchText, 'i'))
      );
    },
    animationclass() {
      if (this.searchText || this.selectedDiscipline || this.selectedLocation || this.selectedAudition) {
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
      this.selectedDiscipline = '';
      this.selectedLocation = '';
      this.selectedAudition = '';
      this.searchText = '';
    },
    getFilters() {
      const filters = {
        disciplines: [],
        locations: [],
        auditions: [],
      };

      this.data.forEach((element) => {
        if (!filters.disciplines.includes(element.discipline)) {
          filters.disciplines.push(element.discipline);
        }

        if (!filters.locations.includes(...element.location)) {
          filters.locations.push(...element.location);
        }

        if (!filters.auditions.includes(element.audition)) {
          filters.auditions.push(element.audition);
        }
      });

      return filters;
    },
  },
};
</script>
