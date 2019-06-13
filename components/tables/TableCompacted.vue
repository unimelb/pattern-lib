<template>
  <div
    ref="table"
    class="table-compacted">
    <slot />
  </div>
</template>

<script>
export default {
  mounted() {
    const headings = this.$refs.table.querySelectorAll('thead th');

    for (let rows = this.$refs.table.querySelectorAll('tr:not(.header)'), i = rows.length - 1; i >= 0; i -= 1) {
      for (let cells = rows[i].querySelectorAll('td'), j = cells.length - 1; j >= 0; j -= 1) {
        if (headings[j]) {
          cells[j].setAttribute('data-label', (headings[j].textContent));
        }
      }
    }
  },
};
</script>
