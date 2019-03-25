<template>
  <SectionWrap class="bg-alt colour-cycle--alt">
    <TableExpandable/>
  </SectionWrap>
</template>

<script>
import TableExpandable from '../TableExpandable.vue';
export default {
  components: { TableExpandable },
  readme: { source: true, html: true },
};
</script>
