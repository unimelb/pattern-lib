<template>
  <div>
    <div class="container">
      <div
        v-if="!isMobile"
        id="first-column"
        class="col">
        <div class="filter-block">
          <h1 class="filter-block_title">School</h1>
          <check-list
            ref="checkListSchool"
            :is-show-button="false"
            :is-filter-check-list="true"
            :checked-count="1">
            <ol
              slot="list"
            >
              <li
                v-for="(item, index) in schools"
                :key="index">
                {{ item }}
              </li>
            </ol>
          </check-list>
        </div>
        <div class="filter-block">
          <h1 class="filter-block_title">Disciplines</h1>
          <check-list
            ref="checkListDisciplines"
            :is-show-button="false"
            :is-filter-check-list="true"
            :checked-count="1">
            <ol
              slot="list"
            >
              <li
                v-for="(item, index) in disciplines"
                :key="index">
                {{ item }}
              </li>
            </ol>
          </check-list>
        </div>
      </div>

      <Accordion
        v-if="isMobile"
        name="School">
        <check-list
          ref="checkListSchool"
          :is-show-button="false"
          :is-filter-check-list="true"
          :checked-count="1">
          <ol
            slot="list"
          >
            <li
              v-for="(item, index) in schools"
              :key="index">
              {{ item }}
            </li>
          </ol>
        </check-list>
      </Accordion>
      <Accordion
        v-if="isMobile"
        name="Disciplines">
        <check-list
          ref="checkListDisciplines"
          :is-show-button="false"
          :is-filter-check-list="true"
          :checked-count="1">
          <ol
            slot="list"
          >
            <li
              v-for="(item, index) in disciplines"
              :key="index">
              {{ item }}
            </li>
          </ol>
        </check-list>
      </Accordion>

      <div
        v-if="!isMobile"
        id="second-column"
        class="col">
        <div class="filter-block">
          <h1 class="filter-block_title">Performance type</h1>
          <check-list
            ref="checkListPerformance"
            :is-show-button="false"
            :is-filter-check-list="true"
            :checked-count="1">
            <ol
              slot="list"
            >
              <li
                v-for="(item, index) in perfomances"
                :key="index">
                {{ item }}
              </li>
            </ol>
          </check-list>
        </div>
        <div class="filter-block">
          <h1 class="filter-block_title">Locations</h1>
          <check-list
            ref="checkListLocations"
            :is-show-button="false"
            :is-filter-check-list="true"
            :checked-count="1">
            <ol
              slot="list"
            >
              <li
                v-for="(item, index) in locations"
                :key="index">
                {{ item }}
              </li>
            </ol>
          </check-list>
        </div>
      </div>


      <Accordion
        v-if="isMobile"
        name="Performance type">
        <check-list
          ref="checkListPerformance"
          :is-show-button="false"
          :is-filter-check-list="true"
          :checked-count="1">
          <ol
            slot="list"
          >
            <li
              v-for="(item, index) in perfomances"
              :key="index">
              {{ item }}
            </li>
          </ol>
        </check-list>
      </Accordion>
      <Accordion
        v-if="isMobile"
        name="Locations">
        <check-list
          ref="checkListLocations"
          :is-show-button="false"
          :is-filter-check-list="true"
          :checked-count="1">
          <ol
            slot="list"
          >
            <li
              v-for="(item, index) in locations"
              :key="index">
              {{ item }}
            </li>
          </ol>
        </check-list>
      </Accordion>

      <div
        v-if="!isMobile"
        id="third-column"
        class="col">
        <h1 class="filter-block_title">Dates</h1>
        <p class="filter-block_title-dates">Starting:</p>
        <div class="sq-form-question-answer">
          <input
            type="hidden"
            value="dmy">
          <select
            v-model="selectedDayStarting"
            class="sq-form-field">
            <option value="--"/>
            <option
              v-for="(item, index) in 31"
              :key="index">{{ item }}</option>
          </select>
          <select
            v-model="selectedMonthsStarting"
            class="sq-form-field">
            <option value="--"/>
            <option value="1">January</option>
            <option value="2">February</option>
            <option value="3">March</option>
            <option value="4">April</option>
            <option value="5">May</option>
            <option value="6">June</option>
            <option value="7">July</option>
            <option value="8">August</option>
            <option value="9">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>
          <select
            v-model="selectedYearStarting"
            class="sq-form-field">
            <option value="--"/>
            <option
              v-for="(item, index) in range"
              :key="index">{{ item }}</option>
          </select>
          <input
            type="hidden"
            value="">
          <input
            type="hidden"
            value="">
          <input
            type="hidden"
            value="">
        </div>

        <p class="filter-block_title-dates">Ending:</p>
        <div class="sq-form-question-answer">
          <input
            type="hidden"
            value="dmy">
          <select
            v-model="selectedDayEnding"
            class="sq-form-field">
            <option value="--"/>
            <option
              v-for="(item, index) in 31"
              :key="index">{{ item }}</option>
          </select>
          <select
            v-model="selectedMonthsEnding"
            class="sq-form-field">
            <option value="--"/>
            <option value="1">January</option>
            <option value="2">February</option>
            <option value="3">March</option>
            <option value="4">April</option>
            <option value="5">May</option>
            <option value="6">June</option>
            <option value="7">July</option>
            <option value="8">August</option>
            <option value="9">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>
          <select
            v-model="selectedYearEnding"
            class="sq-form-field">
            <option value="--"/>
            <option
              v-for="(item, index) in range"
              :key="index">{{ item }}</option>
          </select>
          <input
            type="hidden"
            value="">
          <input
            type="hidden"
            value="">
          <input
            type="hidden"
            value="">
        </div>
      </div>

      <Accordion
        v-if="isMobile"
        name="Dates">
        <p class="filter-block_title-dates">Starting:</p>
        <div class="sq-form-question-answer">
          <input
            type="hidden"
            value="dmy">
          <select
            v-model="selectedDayStarting"
            class="sq-form-field">
            <option value="--"/>
            <option
              v-for="(item, index) in 31"
              :key="index">{{ item }}</option>
          </select>
          <select
            v-model="selectedMonthsStarting"
            class="sq-form-field">
            <option value="--"/>
            <option value="1">January</option>
            <option value="2">February</option>
            <option value="3">March</option>
            <option value="4">April</option>
            <option value="5">May</option>
            <option value="6">June</option>
            <option value="7">July</option>
            <option value="8">August</option>
            <option value="9">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>
          <select
            v-model="selectedYearStarting"
            class="sq-form-field">
            <option value="--"/>
            <option
              v-for="(item, index) in range"
              :key="index">{{ item }}</option>
          </select>
          <input
            type="hidden"
            value="">
          <input
            type="hidden"
            value="">
          <input
            type="hidden"
            value="">
        </div>

        <p class="filter-block_title-dates">Ending:</p>
        <div class="sq-form-question-answer">
          <input
            type="hidden"
            value="dmy">
          <select
            v-model="selectedDayEnding"
            class="sq-form-field">
            <option value="--"/>
            <option
              v-for="(item, index) in 31"
              :key="index">{{ item }}</option>
          </select>
          <select
            v-model="selectedMonthsEnding"
            class="sq-form-field">
            <option value="--"/>
            <option value="1">January</option>
            <option value="2">February</option>
            <option value="3">March</option>
            <option value="4">April</option>
            <option value="5">May</option>
            <option value="6">June</option>
            <option value="7">July</option>
            <option value="8">August</option>
            <option value="9">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>
          <select
            v-model="selectedYearEnding"
            class="sq-form-field">
            <option value="--"/>
            <option
              v-for="(item, index) in range"
              :key="index">{{ item }}</option>
          </select>
          <input
            type="hidden"
            value="">
          <input
            type="hidden"
            value="">
          <input
            type="hidden"
            value="">
        </div>
      </Accordion>
    </div>


    <div class="filter-button_group">
      <button
        class="form--inline__button-border form--inline__button--reset"
        aria-label="Reset all"
        @click="resetChecked"
      >
        Reset all
      </button>
      <button
        class="form--inline__button-border form--inline__button--apply bg-inverted"
        aria-label="Apply"
      >
        Apply
      </button>
    </div>
  </div>
</template>

<script>
import CheckList from '../check-list/CheckList.vue';
import ContentBlock from '../content-block/ContentBlock.vue';
import Accordion from '../accordion/Accordion.vue';

export default {
  components: { CheckList, Accordion },
  decorator: ContentBlock,
  decoratorProps: { size: 'sml' },
  props: {
    schools: {
      type: Array,
      default: () => [],
    },
    perfomances: {
      type: Array,
      default: () => [],
    },
    dates: {
      type: Date,
      default: () => [],
    },
    disciplines: {
      type: Array,
      default: () => [],
    },
    locations: {
      type: Array,
      default: () => [],
    },
    isMobile: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    start: 1900,
    end: 2099,
    selectedDayStarting: '',
    selectedMonthsStarting: '',
    selectedYearStarting: '',
    selectedDayEnding: '',
    selectedMonthsEnding: '',
    selectedYearEnding: '',
  }),
  computed: {
    range() {
      return Array(this.end - this.start + 1).fill().map((_, idx) => this.start + idx);
    },
  },
  methods: {
    resetChecked() {
      this.$refs.checkListSchool.resetChecked();
      this.$refs.checkListDisciplines.resetChecked();
      this.$refs.checkListPerformance.resetChecked();
      this.$refs.checkListLocations.resetChecked();
      this.selectedDayStarting = '';
      this.selectedMonthsStarting = '';
      this.selectedYearStarting = '';
      this.selectedDayEnding = '';
      this.selectedMonthsEnding = '';
      this.selectedYearEnding = '';
    },
  },
};
</script>
