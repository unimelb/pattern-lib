<template>
  <div>
    <filter-parent :data="filterData"/>
  </div>
</template>

<script>
import FilterParent from '../filterParent/FilterParent.vue';

export default {
  components: {
    FilterParent,
  },
  data() {
    return {
      filterData: [
        {
          type: 'input',
          value: 'Arts',
        },
        {
          type: 'input',
          value: 'Science',
        },
        {
          type: 'checkbox',
          value: 'Test1',
        },
        {
          type: 'checkbox',
          value: 'Test2',
        },
        {
          type: 'checkbox',
          value: 'Test3',
        },
      ],
    };
  },
};
</script>
