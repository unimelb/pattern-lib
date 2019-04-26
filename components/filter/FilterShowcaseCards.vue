<template>
  <div>
    <SectionWrap bg-color="inverted">
      <form class="form form--inline">
        <div class="form--inline__row form--inline__row--center">
          <input
            v-model="searchData"
            aria-label="Card title"
            class="form--inline__search"
            type="search"
            placeholder="Type to search title or description"
          >
          <button class="form--inline__button form--inline__button--alt" aria-label="Search">
            <SvgIcon class="form--inline__svg" name="search"/>
            <span class="form--inline__button-label">Search</span>
          </button>
          <button
            class="form--inline__button form--inline__button-border form--inline__button--alt test"
            aria-label="Filters"
            @click="!showDetails"
          >
            <SvgIcon class="form--inline__svg" name="external"/>
            <span class="form--inline__button-label">Filters</span>
          </button>
        </div>
      </form>
      <FilterDetails v-show="showDetails"></FilterDetails>
    </SectionWrap>

    <SectionWrap class="bg-alt">
      <div class="grid grid--3col">
        <ListItem v-for="(item, index) in filteredData" :key="index">
          <GenericCard
            :cols="3"
            :thumb="item.img_url"
            :title="item.title"
            :href="item.link"
            :excerpt="item.description"
          >
            <div slot="sub-title-1" class="sub-title">
              <span v-for="(item, index) in item.performance" :key="index">{{ item }}</span>
            </div>
            <div slot="sub-title-2" class="sub-title">
              <SvgIcon name="calendar"/>
              <span>{{ item.start_time }}</span>
            </div>
            <template slot="links">
              <a :href="item.link">View showcase ></a>
            </template>
          </GenericCard>
        </ListItem>
      </div>
    </SectionWrap>
  </div>
</template>
<script>
import FilterDetails from "./FilterDetails.vue";
import GenericCard from "../cards/GenericCard.vue";

export default {
  components: { FilterDetails, GenericCard },
  props: {
    data: {
      type: Array,
      default: ""
    }
  },
  data() {
    return {
      searchData: "",
      showDetails: false
    };
  },
  computed: {
    filteredData() {
      return this.data.filter(
        data =>
          data.title.match(new RegExp(this.searchData, "i")) ||
          data.description.match(new RegExp(this.searchData, "i"))
      );
    }
  }
};
</script>

<style scoped>
.test {
  margin-left: 30px;
}

.form--inline__button-border {
  border-radius: 3px 3px 3px 3px;
}
</style>

