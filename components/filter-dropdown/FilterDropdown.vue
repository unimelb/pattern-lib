<template>
  <div :class="['filter-dropdown', { 'is-opened': isOpened }]">
    <div
      class="filter-dropdown__select"
      @click="onClose">
      <div class="filter-dropdown__label">
        lorem
      </div>

      <div class="filter-dropdown__icon">
        <SvgIcon
          name="chevron-down"
          class="push-icon__icon" />
      </div>
    </div>

    <div
      ref="body"
      class="filter-dropdown__body">
      <div
        v-if="optionsLabel"
        class="filter-dropdown__options-label">
        {{ optionsLabel }}
      </div>

      <NestedCheckbox
        :options="copiedOptions"
        @change="onChange" />

      <div class="filter-dropdown__actions">
        <ButtonIcon
          no-icon
          width="fullwidth"
          @click.native.prevent="onClearClick">
          Clear filter
        </ButtonIcon>

        <ButtonIcon
          no-icon
          class="btn--cta"
          width="fullwidth"
          @click.native.prevent="onApplyClick">
          Apply filter
        </ButtonIcon>
      </div>
    </div>
  </div>
</template>

<script>
import _ from 'lodash';
import NestedCheckbox from './components/NestedCheckbox';
import optionsValidator from './nestedCheckboxOptionsValidator';
import SvgIcon from '../icons/SvgIcon';

export default {
  components: { NestedCheckbox, SvgIcon },
  props: {
    options: {
      type: Array,
      required: true,
      validator: optionsValidator,
    },
    defaultOptions: {
      type: Array,
      validator: optionsValidator,
      default: null,
    },
    optionsLabel: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      isOpened: true,
      copiedOptions: _.cloneDeep(this.options),
      defaultCopiedOptions: this.defaultOptions
        ? this.defaultOptions
        : _.cloneDeep(this.options),
    };
  },
  watch: {
    options(updatedOptions) {
      this.copiedOptions = _.cloneDeep(updatedOptions);
    },
    isOpened() {
      // console.log(this.$refs.body); // TODO
    },
  },
  methods: {
    onClose() {
      this.isOpened = !this.isOpened;
      this.copiedOptions = _.cloneDeep(this.options);
    },
    onChange(changedOptions) {
      this.copiedOptions = changedOptions;
    },
    onClearClick() {
      this.isOpened = !this.isOpened;
      this.$emit('change', this.defaultCopiedOptions);
    },
    onApplyClick() {
      this.isOpened = !this.isOpened;
      this.$emit('change', this.copiedOptions);
    },
  },
};
</script>
