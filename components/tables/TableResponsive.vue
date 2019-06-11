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
    {{ isAtEndOfTable }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      isAtEndOfTable: false,
    };
  },
  computed: {
    classes() {
      return {
        'table-responsive--start': this.isAtEndOfTable,
        'table-responsive--end': !this.isAtEndOfTable,
      };
    },
  },
  methods: {
    handleScroll(elem) {
      this.isAtEndOfTable = this.checkAtEndOfTable(elem);
    },
    checkAtEndOfTable(elem) {
      return elem.target.scrollLeft + window.innerWidth >= this.$refs.table.querySelector('table').getBoundingClientRect().width;
    },
  },
};
</script>
