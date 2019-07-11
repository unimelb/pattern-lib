<template>
  <div>
    <div class="filter">
      <div class="filter-input-container">
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
      <div class="grid">
        <div class="cell cell--tab-1of3">
          <label class="filter__label">
            Location
            <DropdownVmodel
              v-model="selectedLocation"
              :values="filteredLocations"
              class="filter__dropdown"/>
          </label>
        </div>
        <div class="cell cell--tab-1of3">
          <label class="filter__label">
            Discipline
            <DropdownVmodel
              v-model="selectedDiscipline"
              :values="filteredDisciplines"
              class="filter__dropdown"/>
          </label>
        </div>
        <div class="cell cell--tab-1of3">
          <label class="filter__label">
            Audition Requirement
            <DropdownVmodel
              v-model="selectedAudition"
              :values="filteredAuditions"
              class="filter__dropdown"/>
          </label>
        </div>
      </div>

      <div class="filter-button-container">
        <button
          class="filter-button-container__search-button"
          aria-label="Search"
          @click="filterDataButton">
          <SvgIcon
            class="filter-button-container__search-button--icon"
            name="search" />
          <span>Search</span>
        </button>
        <button
          class="filter-button-container__search-button"
          @click="resetChecked"
        >Reset all</button>
      </div>
    </div>
    <FilterResultsCount
      :data="dataFiltered.length"
      class="filter__results" />

    <div
      v-for="(item, index) in dataFiltered"
      :key="index">
      <accordion :name="item.name">
        <table class="table table--striped">
          <tr>
            <td>
              <strong>Location</strong>
              <br>
              {{ item.location }}
            </td>
            <td>
              <strong>Points</strong>
              <br>
              {{ item.points }}
            </td>
            <td>
              <strong>Discipline</strong>
              <br>
              {{ item.discipline }}
            </td>
            <td>
              <strong>Audition requirement</strong>
              <br>
              {{ item.audition }}
            </td>
            <td>
              <strong>Study Abroad</strong>
              <br>
              {{ item.abrod }}
            </td>
          </tr>
          <tr>
            <td colspan="5">
              {{ item.overview }}
              <br>
              <button-icon size="xsml">{{ item.buttonText }}</button-icon>
            </td>
          </tr>
        </table>
      </accordion>
    </div>
  </div>
</template>

<script>
import Accordion from '../../accordion/Accordion.vue';
import DropdownVmodel from '../../dropdown/DropdownVmodel.vue';
import FilterResultsCount from '../filters-core/results-count/FilterResultsCount.vue';

export default {
  components: {
    Accordion,
    DropdownVmodel,
    FilterResultsCount,
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
      selectedLocation: '',
      selectedAudition: '',
      dataFiltered: this.data,
    };
  },
  computed: {
    filteredData() {
      return this.data.filter(
        data => data.discipline.match(new RegExp(this.selectedDiscipline, 'i'))
          && data.location.match(new RegExp(this.selectedLocation, 'i'))
          && data.audition.match(new RegExp(this.selectedAudition, 'i'))
          && data.name.match(new RegExp(this.searchText, 'i'))
      );
    },
    filteredDisciplines() {
      const disciplines = [];
      this.data.forEach((element) => {
        if (!disciplines.includes(element.discipline)) {
          disciplines.push(element.discipline);
        }
      });
      return disciplines;
    },
    filteredLocations() {
      const locations = [];
      this.data.forEach((element) => {
        if (!locations.includes(element.location)) {
          locations.push(element.location);
        }
      });
      return locations;
    },
    filteredAuditions() {
      const auditions = [];
      this.data.forEach((element) => {
        if (!auditions.includes(element.audition)) {
          auditions.push(element.audition);
        }
      });
      return auditions;
    },
  },
  methods: {
    filterDataButton() {
      this.dataFiltered = this.filteredData;
    },
    resetChecked() {
      this.dataFiltered = this.data;
      this.selectedDiscipline = '';
      this.selectedLocation = '';
      this.selectedAudition = '';
      this.searchText = '';
    },
  },
};
</script>
