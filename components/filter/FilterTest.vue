<template>
  <div>
    <h1>Filter</h1>

    <input type="text" v-model="searchTitle" placeholder="Search Title">
    <input type="text" v-model="searchType" placeholder="Search Type">
    <label>
      Perfomance type
      <Dropdown v-model="searchType" :values="getTypes"/>
    </label>
    <input type="text" v-model="searchSchool" placeholder="Search School">
    <input type="text" v-model="searchDisciplines" placeholder="Search Disciplines">

    <div v-for="(item, index) in filteredData" :key="index">
      <h2>Title: {{ item.title }}</h2>
      <p>Type: {{ item.type }}</p>
      <p>School: {{ item.school }}</p>
      <p>Discipline: {{ item.disciplines }}</p>
    </div>

    <SectionWrap class="bg-alt">
      <div class="grid grid--2col">
        <ListItem v-for="(item, index) in filteredData" :key="index">
          <GenericCard
            :cols="2"
            thumb="https://via.placeholder.com/400x200"
            :title="item.title"
            href="#"
            :excerpt="item.disciplines"
          >
            <div slot="sub-title-1" class="sub-title">
              <span>Sub-title 1</span>
            </div>
            <div slot="sub-title-2" class="sub-title">
              <SvgIcon name="calendar"/>
              <span>March 31 1992</span>
            </div>
            <div slot="sub-title-3" class="sub-title">
              <span>Theme: Lorem ipsum.</span>
            </div>
            <template slot="links">
              <a href="/">View generic details ></a>
              <a href="/">View generic staff ></a>
            </template>
          </GenericCard>
        </ListItem>
      </div>
    </SectionWrap>
  </div>
</template>
<script>
import Dropdown from "../dropdown/Dropdown.vue";
import GenericCard from "../cards/GenericCard.vue";

export default {
  components: { Dropdown, GenericCard },
  data() {
    return {
      data: [
        {
          title: "test 1 aa",
          type: "season", //array
          school: "a", //array
          disciplines: "arts" //array
        },
        {
          title: "test 2 bb",
          type: "perfomance",
          school: "b",
          disciplines: "music"
        },
        {
          title: "test 1 aa",
          type: "season",
          school: "a",
          disciplines: "arts"
        },
        {
          title: "test 1 aa",
          type: "season",
          school: "a",
          disciplines: "arts"
        }
      ],
      searchTitle: "",
      searchType: "",
      searchSchool: "",
      searchDisciplines: ""
    };
  },
  computed: {
    filteredData() {
      return this.data.filter(data => {
        return (
          data.title.match(this.searchTitle) &&
          data.type.match(this.searchType) &&
          data.school.match(this.searchSchool) &&
          data.disciplines.match(this.searchDisciplines)
        );
      });
    },
    getTypes() {
      let types = [];
      this.data.forEach(element => {
        types.push(element.type);
      });
      return types;
    }
  }
};
</script>