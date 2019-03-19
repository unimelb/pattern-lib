<template>
  <Notice level="warning">
    <span>
      <strong>Notice!</strong> Better check yourself before you wreck yourself
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
