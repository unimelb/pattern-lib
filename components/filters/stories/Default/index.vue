<template>
  <div>Test</div>
</template>

<script>
import mockResults from './mockResults.js';

export default {
  name: 'Default',
  created() {
    mockResults();
  },
};
</script>
