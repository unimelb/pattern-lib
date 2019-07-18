<template>
  <div class="styled-select">
    <select
      :id="id"
      v-model="selectedOption"
      @change="emitEvent"
    >
      <option
        selected
        value=""
      >Show all</option>
      <option
        v-for="(value, index) in values"
        :key="index"
        :value="value.value || value"
      >{{ value.label || value }}</option>
    </select>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: [String, Boolean],
      default: () => false,
    },
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
  methods: {
    emitEvent(event) {
      this.$emit('input', event.target.value);
    },
  },
};
</script>
