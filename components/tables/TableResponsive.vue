<template>
  <div
    ref="table"
    :class="classes"
    class="table-responsive">
    <div
      class="table-responsive__inner"
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
    };
  },
  computed: {
    classes() {
      return {
        'table-responsive--start': !this.isAtStartOfTable,
        'table-responsive--end': !this.isAtEndOfTable,
      };
    },
  },
  methods: {
    handleScroll(elem) {
      this.isAtEndOfTable = this.checkAtEndOfTable(elem);
      this.isAtStartOfTable = this.checkAtStartOfTable(elem);
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
