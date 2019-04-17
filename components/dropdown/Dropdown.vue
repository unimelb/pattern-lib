<template>
  <div>
    <select
      :value="selected"
      class="select"
      @change="callback"
    >
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
    values: {
      type: Array,
      required: true,
    },
    callback: {
      type: Function,
      default: () => {},
    },
    selectedItem: {
      type: [String, Boolean],
      default: false,
    },
  },
  computed: {
    selected() {
      const defaultValue = this.values[0] ? this.values[0].value : false;
      const selectedValue = this.selectedItem;
      return selectedValue || defaultValue;
    },
  },
};
</script>


<style scoped>
.select {
  border: 1px;
  border-color: #979797;
}
</style>
