<template>
  <form class="form">
    <h2>Loose</h2>
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
      <StyledSelect
        id="f_q1"
        blue>
        <option>Undergraduate</option>
        <option>Postgraduate</option>
        <option>Reasearch</option>
        <option>Non-award</option>
      </StyledSelect>
    </div>

    <SectionWrap class="bg-white">
      <h2>Enclosed in a section</h2>
      <div class="row">
        <label for="f_q2">Type</label>
        <StyledSelect
          id="f_q2"
          blue>
          <option>Undergraduate</option>
          <option>Postgraduate</option>
          <option>Reasearch</option>
          <option>Non-award</option>
        </StyledSelect>
      </div>

      <h2 class="shim-pt2 shim-mb05">
        Grid
      </h2>
      <div class="grid">
        <div class="cell cell--tab-1of3">
          <label for="f_q3">Type</label>
          <StyledSelect
            id="f_q3"
            blue>
            <option>Undergraduate</option>
            <option>Postgraduate</option>
            <option>Reasearch</option>
            <option>Non-award</option>
          </StyledSelect>
        </div>
        <div class="cell cell--tab-2of3">
          <label for="f_q4">Type</label>
          <StyledSelect
            id="f_q4"
            blue>
            <option>Undergraduate</option>
            <option>Postgraduate</option>
            <option>Reasearch</option>
            <option>Non-award</option>
          </StyledSelect>
        </div>
      </div>
    </SectionWrap>
  </form>
</template>

<script>
import StyledSelect from '../StyledSelect.vue';

export default {
  components: { StyledSelect },
  readme: { html: true, source: false },
};
</script>
