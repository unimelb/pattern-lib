<template>
  <div class="checkbox-filter">
    <div
      v-for="item in data"
      :key="item.id">
      <h3
        class="checkbox-filter__title" >{{ item.filterName }}</h3>

      <button
        v-if="isHidden"
        class="checkbox-filter__title"
        @click="[(isHidden = !isHidden)]">
        {{ item.filterName }}
        <SvgIcon
          :name="iconName"
          aria-label="chevron"
          class="card__icon"
          width="10px"
          height="10px"
        />
      </button>
    </div>

    <div>
      <div
        v-for="(item, index) in data[0].values"
        :key="index">
        <input
          :value="item.value"
          v-model="userInputData"
          type="checkbox"
          class="checkbox-filter__box"
          @change="emitEvent"
        >
        <label class="checkbox-filter__label">{{ item.value }}</label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: [Array, Object],
      default: () => [],
    },
  },

  data() {
    return {
      userInputData: [],
      isHidden: false,
      iconName: 'chevron-down',
    };
  },
  methods: {
    emitEvent() {
      const test = [];
      this.data.forEach((element) => {
        test.push(...element.filterOn);
      });
      this.$emit('event-data-input', { filterOn: test, value: this.userInputData });
    },
  },
};
</script>
