<template>
  <div class="showcase__container">
    <div>
      [search input]
      [search button]
      [filter checkboxes]
      <ul>
        <li
          v-for="filter in filters"
          :key="filter.id"
        >
          {{ filter.label }}
        </li>
      </ul>
    </div>
    <div>[results grid]</div>
    <div>[pagination placeholder]</div>
  </div>
</template>

<script>
export default {
  props: {
    filters: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.showcase__container {
  border: 1px solid red;
}
</style>
