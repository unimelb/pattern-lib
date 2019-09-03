<template>
  <SectionWrap bg-color="inverted">
    <h2 class="text-center">Find a Course</h2>
    <form class="form form--inline">
      <div class="form--inline__row form--inline__row--center">
        <span class="form--inline__select">
          <label
            class="form--inline__label"
            for="course_type">Type</label>
          <select
            id="course_type"
            name="course_type">
            <option>Undergraduate courses</option>
            <option>Graduate courses</option>
          </select>
        </span>
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
