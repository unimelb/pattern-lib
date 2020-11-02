<template>
  <div
    role="group"
    class="bg-light-blue filter-box">
    <h4 class="filter-box__header">
      Filter by
    </h4>

    <div
      v-for="(filter, filterIndex) in filters"
      :key="filterIndex"
      class="filter-box__filter">
      <p
        :aria-label="filter.filterBy"
        class="filter-box__filter-label">
        {{ filter.filterBy }}
      </p>

      <FilterDropdown
        :options="filter.options"
        :options-label="filter.optionsLabel"
        :placeholder-label="filter.placeholderLabel"
        @change="onChange(filter.name, $event)"
        @clear="onClearFilters(filter.name)" />
    </div>

    <div class="filter-box__btns-wrapper">
      <div class="filter-box__btn">
        <ButtonIcon
          no-icon
          element="button"
          width="fullwidth"
          @click.native.prevent="onClearFilters(null)">
          Clear filters
        </ButtonIcon>
      </div>

      <div class="filter-box__btn">
        <ButtonIcon
          no-icon
          element="button"
          class="btn--cta"
          width="fullwidth"
          @click.native.prevent="onUpdateResults">
          Update results
        </ButtonIcon>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonIcon from 'components/buttons/ButtonIcon.vue';
import FilterDropdown from '../filter-dropdown/FilterDropdown.vue';

export default {
  name: 'FilterBox',
  components: { ButtonIcon, FilterDropdown },
  props: {
    filters: {
      type: Array,
      required: true,
      validator(filtersArray) {
        if (!filtersArray.length) {
          return false;
        }

        return filtersArray.every(({
          filterBy, options, placeholderLabel, name,
        }) => (filterBy && typeof filterBy === 'string')
          && (Array.isArray(options) && options.length)
          && placeholderLabel
          && name && typeof name === 'string');
      },
    },
  },
  methods: {
    onChange(name, changedOptions) {
      this.$emit('change', { name, changedOptions });
    },
    onClearFilters(name) {
      this.$emit('clear', name);
    },
    onUpdateResults() {
      this.$emit('update');
    },
  },
};
</script>
