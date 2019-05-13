<template>
  <section-wrap bg-color="white">
    <label>
      Discipline
      <input
        v-model="searchDiscipline"
        aria-label="Discipline"
        type="search"
        placeholder="Discipline"
      >
    </label>

    <label>
      Location
      <input
        v-model="searchLocation"
        aria-label="Location"
        type="search"
        placeholder="Location"
      >
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

export default {
  components: {
    Accordion,
  },

  props: {
    data: {
      type: Array,
      default: () => [],
    },
  },

  data() {
    return {
      searchDiscipline: '',
      searchLocation: '',
      searchAudition: '',
    };
  },

  computed: {
    filteredData() {
      return this.data.filter(
        data => data.discipline.match(new RegExp(this.searchDiscipline, 'i'))
          && data.location.match(new RegExp(this.searchLocation, 'i'))
          && data.audition.match(new RegExp(this.searchAudition, 'i'))
      );
    },
  },
};
</script>
