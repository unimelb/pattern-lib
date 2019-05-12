<template>
  <div>
    <div class="container">
      <form class="formContainer">
        <div>
          <input
            class="formInput"
            aria-label="Course title or keyword"
            type="search"
            placeholder="Type to search courses"
          >
          <button
            class="buttonSearch"
            aria-label="Submit">
            <SvgIcon
              height="10px"
              width="10px"
              name="search"/>
            <span>Search</span>
          </button>
          <button
            class="buttonSearch"
            aria-label="Filter"
            @click="showFilterDetails = !showFilterDetails"
          >Filter</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import FilterDetails from './FilterDetails.vue';

export default {
  components: { FilterDetails },
  data() {
    return {
      showFilterDetails: false,
    };
  },
};
</script>

<style scoped>
.container {
  display: flex;
  background-color: #094183;
  height: 104px;
  color: white;
  justify-content: center;
  align-items: center;
}

.formContainer {
  display: flex;
}

.formInput {
  width: 590px;
  height: 46px;
}

.buttonSearch {
  width: 146px;
  height: 46px;
}
</style>
