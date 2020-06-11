<template>
  <StyledSelect
    :id="id"
    v-model="selectedOption"
    :callback="emitEvent">
    <option
      selected
      value="">
      Show all
    </option>
    <option
      v-for="(item, index) in values"
      :key="index"
      :value="item.value || item">
      {{ item.label || item }}
    </option>
  </StyledSelect>
</template>

<script>
import StyledSelect from '../../../forms/StyledSelect.vue';

export default {
  components: { StyledSelect },
  props: {
    id: {
      type: [String, Boolean],
      default: () => false,
    },
    value: {
      type: String,
      default: null,
    },
    values: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      selectedOption: null,
    };
  },
  watch: {
    value(newValue) {
      this.selectedOption = newValue;
    },
  },
  mounted() {
    this.selectedOption = this.value;
  },
  methods: {
    emitEvent(event) {
      this.$emit('input', event.target.value);
    },
  },
};
</script>
