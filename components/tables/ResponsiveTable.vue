<template>
  <div
    ref="table"
    :class="classes"
    class="responsive-table">
    <div
      class="responsive-table__inner"
      @scroll="handleScroll">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isAtStartOfTable: true,
      isAtEndOfTable: false,
      isTableWiderThanWindow: false,
    };
  },
  computed: {
    classes() {
      return {
        'responsive-table--start': !this.isAtStartOfTable,
        'responsive-table--end': !this.isAtEndOfTable && this.isTableWiderThanWindow,
      };
    },
  },
  mounted() {
    this.isTableWiderThanWindow = this.checkTableWidth();
  },
  methods: {
    handleScroll(elem) {
      this.isAtEndOfTable = this.checkAtEndOfTable(elem);
      this.isAtStartOfTable = this.checkAtStartOfTable(elem);
    },
    checkTableWidth() {
      // Delay a bit so the table can expand to it's full width.
      return setTimeout(() => {
        const containerWidth = this.$refs.table.getBoundingClientRect().width;
        const tableWidth = this.$refs.table.querySelector('table').getBoundingClientRect().width;

        return tableWidth > containerWidth;
      }, 50);
    },
    checkAtEndOfTable(elem) {
      const containerWidth = this.$refs.table.getBoundingClientRect().width;
      const tableWidth = this.$refs.table.querySelector('table').getBoundingClientRect().width;
      const scrollLeftPosition = elem.target.scrollLeft;

      return scrollLeftPosition + containerWidth >= tableWidth;
    },
    checkAtStartOfTable(elem) {
      const scrollLeftPosition = elem.target.scrollLeft;

      return scrollLeftPosition === 0;
    },
  },
};
</script>
