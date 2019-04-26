<template>
  <div class="container">
    <div
      id="first-column"
      class="col">
      <div>
        <h1>School</h1>
        <label
          v-for="(item, index) in schools"
          :key="index">
          {{ item }}
          <input
            :id="item"
            :value="item"
            type="checkbox">
        </label>
      </div>
      <div>
        <h1>Disciplines</h1>
      </div>
    </div>
    <div
      id="second-column"
      class="col">
      <div>
        <h1>Performance type</h1>
      </div>
      <div>
        <h1>Location</h1>
      </div>
    </div>

    <div
      id="third-column"
      class="col">
      <h1>Dates</h1>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    schools: {
      type: Array,
      default: () => [],
    },
    perfomances: {
      type: Array,
      default: () => [],
    },
    dates: {
      type: Date,
      default: () => [],
    },
    disciplines: {
      type: Array,
      default: () => [],
    },
    locations: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  background-color: white;
  color: navy;
}

.col {
  flex: 1;
}
</style>
