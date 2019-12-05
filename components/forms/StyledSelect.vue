<template>
  <div :id="null">
    <select
      :id="id"
      v-model="content"
      :class="extraclasses"
      @input="handleInput"
      @change="callback">
      <slot />
      <option
        v-for="(option, index) in optionsList"
        :key="index"
        :value="option.value">
        {{ option.label }}
      </option>
    </select>
    <div class="styled-select__label">
      3 courses available
    </div>
  </div>
</template>

<script>
import isPlainObject from 'lodash.isplainobject';

export default {
  name: 'StyledSelect',
  props: {
    id: {
      type: [String, Boolean],
      default: () => false,
    },
    value: {
      type: String,
      default: '',
    },
    blue: {
      type: Boolean,
      default: false,
    },
    options: {
      type: Array,
      default: () => [],
    },
    callback: {
      type: Function,
      default: () => {},
    },
  },
  data: () => ({
    extraclasses: '',
    baseclass: 'styled-select',
    blueclass: 'styled-select--blue',
    content: '',
  }),
  computed: {
    optionsList() {
      const { options } = this;

      // If options are not an object then convert them to label/value object
      const newOptions = options.map((option) => {
        if (!isPlainObject(option)) {
          return {
            label: option,
            value: option,
          };
        }

        return option;
      });

      return newOptions;
    },
  },
  watch: {
    options(newOptions) {
      const [defaultOption] = newOptions;

      this.content = defaultOption;
    },
    value(newOptions) {
      this.content = newOptions;
    },
  },
  mounted() {
    this.extraclasses = this.$el.className;
    this.$el.className = `${this.baseclass}${this.blue ? ` ${this.blueclass}` : ''}`;

    this.content = this.setDefaultValue();
  },
  methods: {
    handleInput(e) {
      this.$emit('input', e.target.value);
    },
    setDefaultValue() {
      const defaultSlot = this.$slots.default;
      const filterResult = (items) => items.filter((child) => child.tag === 'option');
      const filterDefaultValue = (items) => items.map((value) => value.children[0].text).slice(0, 1);

      if (defaultSlot && defaultSlot.length) {
        // Only grab <option>
        const children = filterResult(defaultSlot);

        // Grab value of first item.
        const [defaultValue] = filterDefaultValue(children);

        return defaultValue.trim();
      }

      return '';
    },
  },
};
</script>
