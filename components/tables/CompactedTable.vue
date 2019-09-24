<template>
  <div
    ref="table"
    :class="classes"
    class="compacted-table"
  >
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
      const mobileHeadingCell = 0;

      this.hasHeadings = this.$refs.table.querySelectorAll('.table__header').length > 0;

      for (let rows = this.$refs.table.querySelectorAll('tr:not(.table__header)'), i = rows.length - 1; i >= 0; i -= 1) {
        for (let cells = rows[i].querySelectorAll('td'), j = cells.length - 1; j >= 0; j -= 1) {
          if (!this.hasHeadings) {
            cells[mobileHeadingCell].classList.add('table__mobile-title');
            rows[i].setAttribute('data-mobile-heading', (cells[mobileHeadingCell].textContent));
          }

          if (headings[j]) {
            cells[j].setAttribute('data-label', (`${headings[j].textContent.trim()}:`));
          }
        }
      }
    },
  },
};
</script>
