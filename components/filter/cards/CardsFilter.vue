<template>
  <div>
    <section-wrap bg-color="white">
      <FilterParent
        :data="data"
        :filter-on="filterOn"
        @event-data="eventWithFilteredData"/>

      <div class="cards-filter__container">
        <FilterResultsCount :data="dataFiltered.length" />
        <button
          class="cards-filter__button"
        >Clear results</button>
      </div>
    </section-wrap>
    <SectionWrap class="bg-alt">
      <div class="grid grid--3col">
        <ListItem
          v-for="(item, index) in dataFiltered"
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
              <SvgIcon name="info" />
              <span
                v-for="(item, index) in item.performance"
                :key="index">
                <span v-if="index > 0">{{ ', ' }}</span>
                <span>{{ item }}</span>
              </span>
            </div>
            <div
              slot="sub-title-2"
              class="sub-title">
              <SvgIcon name="calendar" />
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
import FilterParent from '../filters-core/generic-filter/FilterParent.vue';
import FilterResultsCount from '../filters-core/results-count/FilterResultsCount.vue';
import GenericCard from '../../cards/GenericCard.vue';

export default {
  components: { FilterParent, GenericCard, FilterResultsCount },
  props: {
    data: {
      type: Array,
      default: () => [],
    },
    filterOn: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      searchData: '',
      dataFiltered: this.data,
    };
  },
  methods: {
    eventWithFilteredData(obj) {
      console.log("from filter parent", obj);
    },
  },
};
</script>
