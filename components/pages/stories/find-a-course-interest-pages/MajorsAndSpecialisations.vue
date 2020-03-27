<template>
  <SectionTwoCol direction="right">
    <div slot="main">
      <div>
        40 results found with 0 filters applied. Apply default filters for Domestic undergraduate?
      </div>
      <hr>

      <div class="grid grid--2col">
        <ListItem
          v-for="(result, resultIndex) in results"
          :key="resultIndex">
          <GenericCard
            :cols="2"
            :title="result.name" />
        </ListItem>
      </div>
    </div>
    <div slot="side">
      <div class="bg-light-blue filter-block">
        <h4>Filter by</h4>

        <p>Course types</p>

        <FilterDropdown
          :options="filterDropdownOptions"
          options-label="Course types to include:"
          placeholder-label="course types"
          @change="onChange" />

        <div class="filter-block__btns-wrapper">
          <ButtonIcon no-icon>
            Clear filters
          </ButtonIcon>

          <ButtonIcon
            no-icon>
            Update results
          </ButtonIcon>
        </div>
      </div>
    </div>
  </SectionTwoCol>
</template>

<script>
import SectionTwoCol from '../../../section/SectionTwoCol.vue';
import FilterDropdown from '../../../filter-dropdown/FilterDropdown.vue';
import filterDropdownOptions from '../../../filter-dropdown/stories/options';
import ButtonIcon from '../../../buttons/ButtonIcon.vue';
import ListItem from '../../../listing/ListItem.vue';
import GenericCard from '../../../cards/GenericCard.vue';

export default {
  name: 'MajorsAndSpecialisations',
  components: {
    SectionTwoCol, FilterDropdown, ButtonIcon, ListItem, GenericCard,
  },
  data() {
    return {
      filterDropdownOptions,
      results: [
        {
          type: 'major',
          name: 'Ancient World Studies',
        },
        {
          type: 'major',
          name: 'Anthropology',
        },
      ],
    };
  },
  methods: {
    onChange(changedOptions) {
      this.filterDropdownOptions = changedOptions;
    },
  },
};
</script>
