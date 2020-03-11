<template>
  <div
    class="filter-dropdown"
    @click.stop>
    <div
      ref="select"
      :class="classSelect"
      data-testid="filter-dropdown-select"
      @click="onSelectClick">
      <div class="filter-dropdown__label">
        {{ placeholderText }}
      </div>

      <div class="filter-dropdown__icon">
        <SvgIcon
          name="chevron-down"
          class="push-icon__icon" />
      </div>
    </div>

    <div
      ref="body"
      data-testid="filter-dropdown-body"
      :class="classBody">
      <div
        v-if="optionsLabel"
        data-testid="filter-dropdown-options-label"
        class="filter-dropdown__options-label">
        {{ optionsLabel }}
      </div>

      <NestedCheckbox
        :options="copiedOptions"
        @change="onChange" />

      <div class="filter-dropdown__actions">
        <div class="filter-dropdown__action">
          <ButtonIcon
            no-icon
            data-testid="filter-dropdown-btn-clear"
            width="fullwidth"
            @click.native.prevent="onClearClick">
            Clear filter
          </ButtonIcon>
        </div>

        <div class="filter-dropdown__action">
          <ButtonIcon
            no-icon
            data-testid="filter-dropdown-btn-apply"
            class="btn--cta"
            width="fullwidth"
            @click.native.prevent="onApplyClick">
            Apply filter
          </ButtonIcon>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import cloneDeep from 'lodash.clonedeep';
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
    placeholderLabel: {
      type: String,
      required: true,
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
      copiedOptions: cloneDeep(this.options),
      defaultCopiedOptions: this.defaultOptions
        ? this.defaultOptions
        : cloneDeep(this.options),
    };
  },
  computed: {
    classSelect() {
      const { isOpened, isOpenUp } = this;

      return [
        'filter-dropdown__select',
        {
          'filter-dropdown__select--is-opened': isOpened && !isOpenUp,
          'filter-dropdown__select--is-opened-up': isOpened && isOpenUp,
        },
      ];
    },
    classBody() {
      const { isOpened, isOpenUp } = this;

      return [
        'filter-dropdown__body',
        {
          'filter-dropdown__body--is-opened': isOpened,
          'filter-dropdown__body--is-open-up': isOpenUp,
        },
      ];
    },
    selectedOptionLabels() {
      return this.getSelectedOptionLabels(this.options);
    },
    placeholderText() {
      const lengthSelected = this.selectedOptionLabels.length;

      if (!lengthSelected) {
        return 'Please select';
      }

      if (lengthSelected === 1) {
        return `${this.selectedOptionLabels[0]} selected`;
      }

      return `${lengthSelected} ${this.placeholderLabel} selected`;
    },
  },
  watch: {
    options(updatedOptions) {
      this.copiedOptions = cloneDeep(updatedOptions);
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
    getSelectedOptionLabels(options) {
      return options.reduce((selectedLabels, option) => {
        if (option.options && option.options.length) {
          const nestedSelectedOptions = this.getSelectedOptionLabels(option.options);
          return selectedLabels.concat(nestedSelectedOptions);
        }

        if (option.isChecked) {
          selectedLabels.push(option.label);
        }

        return selectedLabels;
      }, []);
    },
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
    onSelectClick() {
      this.isOpened = !this.isOpened;
      this.copiedOptions = cloneDeep(this.options);
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
