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
import SvgIcon from 'components/icons/SvgIcon.vue';
import ButtonIcon from 'components/buttons/ButtonIcon.vue';
import NestedCheckbox from './components/NestedCheckbox/index.vue';
import optionsValidator from './nestedCheckboxOptionsValidator';
import getSelectedOptionLabels from './getSelectedOptionLabels.js';

export default {
  components: { NestedCheckbox, SvgIcon, ButtonIcon },
  props: {
    options: {
      type: Array,
      required: true,
      validator: optionsValidator,
    },
    placeholderLabel: {
      type: Object,
      required: true,
      validator(value) {
        return value.plural && value.singular;
      },
    },
    optionsLabel: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isOpened: false,
      isOpenUp: false,
      copiedOptions: cloneDeep(this.options),
      isChanged: false,
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
      return getSelectedOptionLabels(this.options);
    },
    placeholderText() {
      const lengthSelected = this.selectedOptionLabels.length;

      if (!lengthSelected) {
        return 'Please select';
      }

      const placeholderLabel = lengthSelected === 1
        ? this.placeholderLabel.singular
        : this.placeholderLabel.plural;

      return `${lengthSelected} ${placeholderLabel} selected`;
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
    checkDropdownDuration() {
      const { body, select } = this.$refs;

      const selectRect = select.getBoundingClientRect();
      const bodyRect = body.getBoundingClientRect();

      const bodyHeight = bodyRect.bottom - bodyRect.top;

      const bodyTopLine = selectRect.top - bodyHeight;
      const bodyBottomLine = selectRect.bottom + bodyHeight;

      const partiallyInvisibleOnBottom = bodyBottomLine > window.innerHeight;
      const partiallyInvisibleOnTop = bodyTopLine < 0;

      this.isOpenUp = partiallyInvisibleOnBottom && !partiallyInvisibleOnTop;
    },
    closeDropdown() {
      if (this.isOpened) {
        this.isOpened = false;

        if (this.isChanged) {
          this.$emit('change', this.copiedOptions);
        }
      }
    },
    onSelectClick() {
      if (this.disabled) {
        return;
      }

      if (this.isOpened) {
        this.isOpened = false;

        if (this.isChanged) {
          this.$emit('change', this.copiedOptions);
        }
      } else {
        this.isOpened = true;
        this.isChanged = false;
        this.copiedOptions = cloneDeep(this.options);
      }
    },
    onChange(changedOptions) {
      this.copiedOptions = changedOptions;
      this.isChanged = true;
    },
    onClearClick() {
      this.isOpened = !this.isOpened;
      this.$emit('clear');
    },
    onApplyClick() {
      this.isOpened = !this.isOpened;
      this.$emit('change', this.copiedOptions);
    },
  },
};
</script>
