<template>
  <div class="content-block">
    <TableCentered />
  </div>
</template>

<script>
import TableCentered from './TableCentered.vue';
import TableWrapDoc from './table-wrapped.md';

export default {
  components: { TableCentered },
  readme: { custom: TableWrapDoc, source: false, html: false },
};
</script>
