<template>
  <div
    ref="table"
    :class="classes"
    class="compacted-table">
    <slot />
  </div>
</template>

<script>
export default {
  data() {
    return {
      hasHeadings: false,
    };
  },
  computed: {
    classes() {
      return [{
        'compacted-table--headings': !this.hasHeadings,
      }];
    },
  },
  mounted() {
    this.mobifyTable();
  },
  methods: {
    mobifyTable() {
      const headings = this.$refs.table.querySelectorAll('thead th');
      const rows = this.$refs.table.querySelectorAll('tr:not(.table__header)');
      const mobileHeadingCell = 0;

      this.hasHeadings = this.$refs.table.querySelectorAll('.table__header').length;

      rows.forEach((row, rowIndex) => {
        const cells = rows[rowIndex].querySelectorAll('td');

        cells.forEach((cell, cellIndex) => {
          if (!this.hasHeadings) {
            cells[mobileHeadingCell].classList.add('table__mobile-title');
            rows[rowIndex].setAttribute('data-mobile-heading', (cells[mobileHeadingCell].textContent));
          }

          if (headings[cellIndex]) {
            cells[cellIndex].setAttribute('data-label', (`${headings[cellIndex].textContent.trim()}:`));
          }
        });
      });
    },
  },
};
</script>
