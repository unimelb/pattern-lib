<template>
  <SectionTwoCol direction="right">
    <div slot="main">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium animi aperiam architecto, assumenda at esse
      est exercitationem maiores non quae ratione recusandae repellat repellendus sequi temporibus totam ut voluptas
      voluptatum.
    </div>
    <div slot="side">
      <FilterBox
        :options="options"
        filter-by="Course types"
        placeholder-label="course types"
        options-label="Course types to include:" />
    </div>
  </SectionTwoCol>
</template>

<script>
import SectionTwoCol from '../../../section/SectionTwoCol.vue';
import options from '../../options.json';
import FilterBox from '../FilterBox.vue';
import filterBox from './filter-box.md';

export default {
  readme: { custom: filterBox, source: true, html: false },
  name: 'FilterBoxAside',
  components: { SectionTwoCol, FilterBox },
  data() {
    return {
      options,
    };
  },
};
</script>
