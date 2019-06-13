<template>
  <div class="search">
    <input
      v-model="query"
      type="text"
      placeholder="search"
      @change="onClickButton(filteredData, $event)">
    <h1
      v-for="(item, index) in filteredData"
      :key="index">{{ item.name }}</h1>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      default: () => [],
    },
  },

  data() {
    return {
      query: '',
    };
  },

  computed: {
    filteredData() {
      return this.data.filter(
        data => data.name.match(new RegExp(this.query, 'i'))
      );
    },
  },
};
</script>
