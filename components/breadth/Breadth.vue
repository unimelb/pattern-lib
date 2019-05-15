<template>
  <section-wrap bg-color="white">
    <div class="breadth search-box">
      <label class="label">
        Discipline
        <DropdownVmodel
          v-model="selectedDiscipline"
          :values="filteredDisciplines"/>
      </label>

      <label>
        Location
        <DropdownVmodel
          v-model="selectedLocation"
          :values="filteredLocations"/>
      </label>

      <label>
        Audition Requirement
        <DropdownVmodel
          v-model="selectedAudition"
          :values="filteredAuditions"/>
      </label>
    </div>

    <button
      aria-label="Reset all"
      @click="resetChecked">Reset all</button>
    <div
      v-for="(item, index) in filteredData"
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
  </section-wrap>
</template>

<script>
import Accordion from '../accordion/Accordion.vue';
import DropdownVmodel from '../dropdown/DropdownVmodel.vue';

export default {
  components: {
    Accordion,
    DropdownVmodel,
  },

  props: {
    data: {
      type: Array,
      default: () => [],
    },
  },

  data() {
    return {
      selectedDiscipline: '',
      selectedLocation: '',
      selectedAudition: '',
    };
  },

  computed: {
    filteredData() {
      return this.data.filter(
        data => data.discipline.match(new RegExp(this.selectedDiscipline, 'i'))
          && data.location.match(new RegExp(this.selectedLocation, 'i'))
          && data.audition.match(new RegExp(this.selectedAudition, 'i'))
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
    resetChecked() {
      this.selectedDiscipline = '';
      this.selectedLocation = '';
      this.selectedAudition = '';
    },
  },
};
</script>
