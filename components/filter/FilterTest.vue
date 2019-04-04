<template>
  <div>
    <h1>Filter</h1>

    <input
      v-model="searchTitle"
      type="text"
      placeholder="Search Title">
    <input
      v-model="searchDescription"
      type="text"
      placeholder="Search Description">

    <SectionWrap class="bg-alt">
      <div class="grid grid--3col">
        <ListItem
          v-for="(item, index) in filteredData"
          :key="index">
          <GenericCard
            :cols="3"
            :thumb="item.img_url"
            :title="item.title"
            :href="item.link"
            :excerpt="item.description"
          >
            <div
              slot="sub-title-1"
              class="sub-title">
              <span>{{ item.performance }}</span>
            </div>
            <div
              slot="sub-title-2"
              class="sub-title">
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
import GenericCard from '../cards/GenericCard.vue';
import cardsData from './data.json';

export default {
  components: { GenericCard },
  data() {
    return {
      searchTitle: '',
      searchDescription: '',
      cardsData,
    };
  },
  computed: {
    filteredData() {
      return this.cardsData.filter(
        data => data.title.match(new RegExp(this.searchTitle, 'i'))
          && data.description.match(new RegExp(this.searchDescription, 'i'))
      );
    },
  },
};
</script>
