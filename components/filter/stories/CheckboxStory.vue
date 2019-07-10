<template>
  <div>
    <CheckboxFilter
      :data="data"/>
  </div>
</template>

<script>
import CheckboxFilter from '../filters-core/checkbox/CheckboxFilter.vue';

export default {
  components: {
    CheckboxFilter,
  },
  readme: { source: true, html: true },
  data() {
    return {
      data: [{
        filterName: 'school',
        filterOn: ['school'],
        type: 'multi-select-1',
        values: [
          {
            id: '1',
            value: 'Victorian College of the Arts',
          },
          {
            id: '2',
            value: 'Melbourne Conservatorium of Music',
          },
          {
            id: '3',
            value: 'Testing',
          },
        ],
      }],
    };
  },
};
</script>
