<template>
  <div>
    <select class="select">
      <option
        v-for="(value, index) in values"
        :key="index"
        :value="value"
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
  },
};
</script>


<style scoped>
.select {
  border: 1px;
  border-color: #979797;
}
</style>
