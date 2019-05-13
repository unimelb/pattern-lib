<template>
  <section-wrap bg-color="white">
    <div>
      <label>
        Discipline
        <Dropdown v-model="searchDiscipline" :values="filteredDisciplines"/>
      </label>

      <label>
        Location
        <Dropdown v-model="searchLocation" :values="filteredLocations"/>
      </label>

      <label>
        Audition Requirement
        <input
          v-model="searchAudition"
          aria-label="Audition requirement"
          type="search"
          placeholder="Audition requirement"
        >
      </label>
    </div>
    <div v-for="(item, index) in filteredData" :key="index">
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
import Accordion from "../accordion/Accordion.vue";
import Dropdown from "../dropdown/Dropdown.vue";

export default {
  components: {
    Accordion,
    Dropdown
  },

  props: {
    data: {
      type: Array,
      default: () => []
    }
  },

  data() {
    return {
      searchDiscipline: "",
      searchLocation: "",
      searchAudition: "",
      selectedItem: false
    };
  },

  computed: {
    filteredData() {
      return this.data.filter(
        data =>
          data.discipline.match(new RegExp(this.searchDiscipline, "i")) &&
          data.location.match(new RegExp(this.searchLocation, "i")) &&
          data.audition.match(new RegExp(this.searchAudition, "i"))
      );
    },

    filteredDisciplines() {
      let disciplines = [];
      this.data.forEach(element => {
        disciplines.push(element.discipline);
      });
      return disciplines;
    },

    filteredLocations() {
      let locations = [];
      this.data.forEach(element => {
        locations.push(element.location);
      });
      return locations;
    },

    filteredAuditions() {
      let auditions = [];
      this.data.forEach(element => {
        auditions.push(element.audition);
      });
      return auditions;
    }
  }
};
</script>
