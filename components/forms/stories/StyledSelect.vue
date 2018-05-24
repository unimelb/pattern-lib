<template>
  <form class="form">
    <div class="row">
      <label for="f_q0">Type</label>
      <StyledSelect id="f_q0">
        <option>Undergraduate</option>
        <option>Postgraduate</option>
        <option>Reasearch</option>
        <option>Non-award</option>
      </StyledSelect>
    </div>
    <div class="row">
      <label for="f_q1">Type</label>
      <StyledSelect blue id="f_q1">
        <option>Undergraduate</option>
        <option>Postgraduate</option>
        <option>Reasearch</option>
        <option>Non-award</option>
      </StyledSelect>
    </div>
  </form>
</template>

<script>
import StyledSelect from '../StyledSelect.vue';

export default {
  components: { StyledSelect },
  readme: { html: true, source: false },
};
</script>
