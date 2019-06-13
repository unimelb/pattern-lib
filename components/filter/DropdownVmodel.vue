<template>
  <div class="dropdown">
    <select
      v-model="selectedOption"
      class="select-css"
      @input="emitEvent"
    >
      <option
        selected
        value=""
      >Show all</option>
      <option
        v-for="(value, index) in values"
        :key="index"
        :value="value"
        class="option"
      >{{ value.value }}</option>
    </select>
  </div>
</template>

<script>
export default {
  props: {
    values: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      selectedOption: '',
    };
  },
  computed: {
    filteredData() {
      return this.values.filter(
        values => values.value.match(new RegExp(this.selectedOption, 'i'))
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
