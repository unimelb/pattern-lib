<template>
  <div>
    <h2>Select using options array</h2>
    <StyledSelect
      v-model="text"
      :options="options" />

    <p>
      {{ text }}
    </p><h2>Select using options element</h2>
    <StyledSelect
      v-model="text2">
      <option>Option 1</option>
      <option>Option 2</option>
    </StyledSelect>

    <p>{{ text2 }}</p>
  </div>
</template>

<script>
import StyledSelect from '../../forms/StyledSelect.vue';

export default {
  components: { StyledSelect },
  readme: { source: true, html: true },
  data: () => ({
    options: [],
    text: '',
    text2: '',
  }),
  mounted() {
    this.options = [
      'Option 1',
      'Option 2',
    ];
  },
};
</script>
