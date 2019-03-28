<template>
  <div>
    <label for="search">Search</label>
    <input id="search" type="text">
    <label for="school">School</label>
    <input id="school" type="text">
    <label for="discipline">Discipline</label>
    <input id="discipline" type="text">
    <label for="performance">Performance</label>
    <input id="performance" type="text">
    <label for="location">Location</label>
    <input id="location" type="text">
  </div>
</template>

<script>
export default {
  props: {
    search: {
      type: Boolean,
      default: false
    },
    school: {
      type: Boolean,
      default: false
    },
    discipline: {
      type: Boolean,
      default: false
    },
    performance: {
      type: Boolean,
      default: false
    },
    location: {
      type: Boolean,
      default: false
    }
  }
};
</script>