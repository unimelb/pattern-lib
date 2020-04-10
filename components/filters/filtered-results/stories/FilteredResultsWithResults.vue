<template>
  <FilteredResults
    :items="items.length"
    :filters="filters.length"
    :secondary-message="getSecondaryMessage()"
    :callback="changeCategory">
    <div class="grid grid--center grid--2col">
      <ListItem
        v-for="item in items"
        :key="item.id">
        <GenericCard
          :thumb="item.thumb"
          :title="item.name"
          :href="item.href"
          :excerpt="item.excerpt"
          :tags="item.tags"
          :cols="item.cols" />
      </ListItem>
    </div>
  </FilteredResults>
</template>

<script>
import FilteredResults from '../FilteredResults.vue';
import GenericCard from '../../../cards/GenericCard.vue';

export default {
  readme: { source: true, html: false },
  components: { FilteredResults, GenericCard },
  data() {
    return {
      items: [{
        id: 'key1',
        name: 'Some category name1',
        cols: 2,
      }, {
        id: 'key2',
        name: 'Some category name2',
        cols: 2,
      }, {
        id: 'key3',
        name: 'Some category name3',
        cols: 2,
      }, {
        id: 'key4',
        name: 'Some category name4',
        cols: 2,
      }, {
        id: 'key5',
        name: 'Some category name5',
        cols: 2,
      }, {
        id: 'key6',
        name: 'Some category name6',
        cols: 2,
      }],
      filters: [],
    };
  },
  methods: {
    changeCategory(value) {
      this.$emit('popup:event', value);
      // eslint-disable-next-line no-alert
      alert('It works!');
    },
    getSecondaryMessage() {
      return 'Some secondary message.';
    },
  },
};
</script>
