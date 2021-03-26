<template>
  <Notice level="danger">
    <span>
      <strong>Notice!</strong> Better check yourself before you
      <a href="#">wreck</a> yourself
    </span>
  </Notice>
</template>

<script>
import Notice from '../Notice.vue';

export default {
  components: { Notice },
  readme: { source: true, html: true },
};
</script>
