<template>
  <div>
    <navigation-collapsed heading-level="h1"/>
    <div style="height: 500px;">
      <h1 id="test1">Section1</h1>
    </div>
    <div style="height: 500px;">
      <h1 id="test2">Section2</h1>
    </div>
    <div style="height: 500px;">
      <h1 id="test3">Section3</h1>
    </div>
    <div style="height: 500px;">
      <h1 id="test4">Section4</h1>
    </div>
    <div style="height: 500px;">
      <h1 id="test5">Section5</h1>
    </div>
    <div style="height: 500px;">
      <h1 id="test6">Section6</h1>
    </div>
  </div>

</template>

<script>
import NavigationCollapsed from '../NavigationCollapsed.vue';

export default {
  components: { NavigationCollapsed },
  readme: { source: true, html: true },
};
</script>
