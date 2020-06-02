<template>
  <div>
    <ButtonIcon @click.native.prevent="toggleBeErrors">
      toggle BE error
    </ButtonIcon>
    <span>Throw BE error: {{ isBeErrorThrown ? 'on' : 'off' }}</span>
    <br>
    <ButtonIcon @click.native.prevent="simulateInitialMount">
      simulate initial mount
    </ButtonIcon>

    <slot
      v-if="isComponentVisible"
      :fetchData="fetchData" />
  </div>
</template>

<script>
export default {
  name: 'BaseStoryWrapper',
  props: {
    fetchDataCreator: {
      type: Function,
      required: true,
    },
  },
  data() {
    return {
      isBeErrorThrown: false,
      isComponentVisible: true,
    };
  },
  methods: {
    async fetchData(payload) {
      return this.fetchDataCreator(payload, this.isBeErrorThrown);
    },
    simulateInitialMount() {
      this.isComponentVisible = false;

      this.$nextTick(() => {
        this.isComponentVisible = true;
      });
    },
    toggleBeErrors() {
      this.isBeErrorThrown = !this.isBeErrorThrown;
    },
  },
};
</script>
