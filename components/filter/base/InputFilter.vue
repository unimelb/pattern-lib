<template>
  <div class="search">
    <input
      v-model="query"
      type="text"
      placeholder="search"
      @input="emitEvent">
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
        data => data.value.match(new RegExp(this.query, 'i'))
      );
    },
  },
  mounted() {
    this.$emit('event-testing', this.filteredData);
  },
  methods: {
    emitEvent() {
      this.$emit('event-testing', this.filteredData);
    },
  },
};
</script>
