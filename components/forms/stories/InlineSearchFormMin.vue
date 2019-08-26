<template>
  <SectionWrap>
    <h2 class="text-center">Find a Course</h2>
    <form class="form form--inline form--inverse">
      <div class="form--inline__row form--inline__row--center">
        <input
          aria-label="Course title or keyword"
          class="form--inline__search"
          type="search"
          placeholder="Type to search courses">
        <button
          class="form--inline__button form--inline__button--alt"
          aria-label="Submit">
          <SvgIcon
            class="form--inline__svg"
            name="search" />
          <span class="form--inline__button-label">Search</span>
        </button>
      </div>
    </form>
  </SectionWrap>
</template>

<script>
import SvgIcon from '../../icons/SvgIcon.vue';
export default {
  components: {
    SvgIcon,
  },
};
</script>
