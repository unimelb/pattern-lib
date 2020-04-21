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

    <MajorsAndSpecialisations
      v-if="isComponentVisible"
      :fetch-data="fetchData" />
  </div>
</template>

<script>
import MajorsAndSpecialisations from './MajorsAndSpecialisations.vue';
import fetchDataCreator from './mockResults.js';

export default {
  name: 'StoryWrapper',
  components: { MajorsAndSpecialisations },
  data() {
    return {
      isBeErrorThrown: false,
      isComponentVisible: true,
    };
  },
  methods: {
    async fetchData(payload) {
      return fetchDataCreator(payload, this.isBeErrorThrown);
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
