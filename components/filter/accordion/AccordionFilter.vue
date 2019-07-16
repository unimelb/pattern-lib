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
            <DropdownVmodel
              id="locations"
              v-model="selectedLocation"
              :values="filters.locations"/>
          </div>
          <div class="cell cell--tab-1of3">
            <label
              class="filter__label"
              for="disciplines">Discipline</label>
            <DropdownVmodel
              id="disciplines"
              v-model="selectedDiscipline"
              :values="filters.disciplines"/>
          </div>
          <div class="cell cell--tab-1of3">
            <label
              class="filter__label"
              for="auditions">Audition Requirement</label>
            <DropdownVmodel
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
      :data="dataFiltered.length"
      class="filter__results" />

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
                  <ButtonIcon size="xsml">{{ item.buttonText }}</ButtonIcon>
                </td>
              </tr>
            </table>
          </accordion>
        </div>
      </transition-group>
    </FilterResults>
  </div>
</template>

<script>
import Accordion from '../../accordion/Accordion.vue';
import DropdownVmodel from '../../dropdown/DropdownVmodel.vue';
import FilterResultsCount from '../filters-core/results-count/FilterResultsCount.vue';
import ButtonIcon from '../../buttons/ButtonIcon.vue';
import SvgIcon from '../../icons/SvgIcon.vue';
import FilterResults from '../filters-core/results/FilterResults.vue';

export default {
  components: {
    Accordion,
    DropdownVmodel,
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
        data => data.discipline.match(new RegExp(this.selectedDiscipline, 'i'))
          && data.location.match(new RegExp(this.selectedLocation, 'i'))
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

        if (!filters.locations.includes(element.location)) {
          filters.locations.push(element.location);
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
