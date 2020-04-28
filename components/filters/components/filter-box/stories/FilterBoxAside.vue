<template>
  <SectionTwoCol direction="right">
    <div slot="main">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium animi aperiam architecto, assumenda at esse
      est exercitationem maiores non quae ratione recusandae repellat repellendus sequi temporibus totam ut voluptas
      voluptatum.
    </div>
    <div slot="side">
      <FilterBox
        :filters="[
          {
            name: 'courseTypes',
            filterBy: 'Course types',
            options: options,
            placeholderLabel: {
              plural: 'course types',
              singular: 'course type',
            },
            optionsLabel: 'Course types to include:',
          },
        ]" />
    </div>
  </SectionTwoCol>
</template>

<script>
import SectionTwoCol from 'components/section/SectionTwoCol.vue';
import options from '../../options.json';
import FilterBox from '../FilterBox.vue';
import filterBox from './filter-box.md';

export default {
  readme: { custom: filterBox, source: false, html: false },
  name: 'FilterBoxAside',
  components: { SectionTwoCol, FilterBox },
  data() {
    return {
      options,
    };
  },
};
</script>
