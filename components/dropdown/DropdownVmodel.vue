<template>
  <div class="dropdown">
    <select
      v-model="selectedOption"
      class="select-css"
      @input="event => { $emit('input', event.target.value)}"
    >
      <option
        selected
        value=""
      >Show all</option>
      <option
        v-for="(value, index) in values"
        :key="index"
        :value="value.value || value"
        class="option"
      >{{ value.label || value }}</option>
    </select>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      default: null,
    },
    values: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      selectedOption: null,
    };
  },
  watch: {
    value(newValue) {
      this.selectedOption = newValue;
    },
  },
  mounted() {
    this.selectedOption = this.value;
  },
};
</script>
