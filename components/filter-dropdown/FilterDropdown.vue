<template>
  <div
    :class="['filter-dropdown', { 'is-opened': isOpened, 'is-open-up': isOpenUp }]"
    @click.stop>
    <div
      ref="select"
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
import NestedCheckbox from './components/NestedCheckbox/index.vue';
import optionsValidator from './nestedCheckboxOptionsValidator';
import SvgIcon from '../icons/SvgIcon.vue';

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
      isOpened: false,
      isOpenUp: false,
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
    isOpened(value) {
      if (value) {
        this.checkDropdownDuration();
        window.addEventListener('click', this.closeDropdown);
      } else {
        window.removeEventListener('click', this.closeDropdown);
      }
    },
  },
  methods: {
    checkDropdownDuration() {
      const { body, select } = this.$refs;

      const selectRect = select.getBoundingClientRect();
      const bodyRect = body.getBoundingClientRect();

      const bodyHeight = bodyRect.bottom - bodyRect.top;
      const bodyBottomLine = selectRect.bottom + bodyHeight;

      this.isOpenUp = bodyBottomLine > window.innerHeight;
    },
    closeDropdown() {
      if (this.isOpened) {
        this.isOpened = !this.isOpened;
      }
    },
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
