<template>
  <div>
    <SectionWrap bg-color="inverted">
      <form class="form form--inline">
        <div class="form--inline__row form--inline__row--center">
          <span class="form--inline__select">
            <label class="form--inline__label" for="course_type">Type</label>
            <select id="course_type" name="course_type">
              <option>Undergraduate courses</option>
              <option>Graduate courses</option>
            </select>
          </span>
          <input
            v-model="searchTitle"
            aria-label="Card title"
            class="form--inline__search"
            type="search"
            placeholder="Type to search title"
          >
          <button class="form--inline__button form--inline__button--alt" aria-label="Submit">
            <SvgIcon class="form--inline__svg" name="search"/>
            <span class="form--inline__button-label">Search</span>
          </button>

          <input
            v-model="searchDescription"
            aria-label="Card description"
            class="form--inline__search"
            type="search"
            placeholder="Type to search description"
          >
          <button class="form--inline__button form--inline__button--alt" aria-label="Submit">
            <SvgIcon class="form--inline__svg" name="search"/>
            <span class="form--inline__button-label">Search</span>
          </button>
        </div>
      </form>
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
              <span>{{ item.performance }}</span>
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
import GenericCard from "../cards/GenericCard.vue";
import cardsData from "./data.json";

export default {
  components: { GenericCard },
  data() {
    return {
      searchTitle: "",
      searchDescription: "",
      cardsData
    };
  },
  computed: {
    filteredData() {
      return this.cardsData.filter(
        data =>
          data.title.match(new RegExp(this.searchTitle, "i")) &&
          data.description.match(new RegExp(this.searchDescription, "i"))
      );
    }
  }
};
</script>

