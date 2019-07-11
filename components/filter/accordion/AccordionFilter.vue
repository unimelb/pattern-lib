<template>
  <div>
    <section-wrap bg-color="white">

      <div class="input-filter">
        <div class="input-filter__container">
          <input
            v-model="searchText"
            type="search"
            placeholder="Type to search title or description"
            class="input-filter__input"
          >
          <button
            aria-label="Search"
            class="input-filter__search-button"
            @click="filterDataButton">
            <SvgIcon
              class="input-filter__search-button--icon"
              name="search" />
            <span class="input-filter__search-button--text">Search</span>
          </button>
        </div>

        <div class="accordion-filter__search-box">
          <label class="accordion-filter__label">
            Discipline
            <DropdownVmodel
              v-model="selectedDiscipline"
              :values="filteredDisciplines"/>
          </label>

          <label class="accordion-filter__label">
            Location
            <DropdownVmodel
              v-model="selectedLocation"
              :values="filteredLocations"/>
          </label>

          <label class="accordion-filter__label">
            Audition Requirement
            <DropdownVmodel
              v-model="selectedAudition"
              :values="filteredAuditions"/>
          </label>
        </div>
      </div>
      <div class="accordion-filter__container">
        <FilterResultsCount :data="dataFiltered.length" />
        <button
          class="accordion-filter__button"
          @click="resetChecked">Reset all</button>
      </div>
    </section-wrap>
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
          && (data.name.match(new RegExp(this.searchText, 'i')) || data.overview.match(new RegExp(this.searchText, 'i')))
      );
    },
    filteredDisciplines() {
      const disciplines = [];
      this.data.forEach((element) => {
        disciplines.push(element.discipline);
      });
      return disciplines;
    },
    filteredLocations() {
      const locations = [];
      this.data.forEach((element) => {
        locations.push(element.location);
      });
      return locations;
    },
    filteredAuditions() {
      const auditions = [];
      this.data.forEach((element) => {
        auditions.push(element.audition);
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
      this.searchData = '';
    },
  },
};
</script>
