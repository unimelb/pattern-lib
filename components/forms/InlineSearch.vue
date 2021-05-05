<template>
  <form
    :class="{
      'inline-search': true,
      'inline-search--with-icon': !withSubmit,
      'inline-search--dark': dark,
    }"
    role="search"
    @submit="handleSubmit">
    <slot />
    <div class="inline-search__row">
      <label
        :for="id"
        class="screenreaders-only">
        {{ label }}
      </label>
      <input
        :id="id"
        :value="value"
        type="search"
        :name="name"
        :placeholder="placeholder"
        class="inline-search__input"
        autocomplete="off"
        @input="e => $emit('input', e.target.value)">
      <SvgIcon
        v-if="!withSubmit"
        class="inline-search__icon"
        name="search" />
      <button
        v-if="withSubmit"
        aria-label="Submit"
        type="submit"
        class="inline-search__submit">
        <span class="screenreaders-only">Submit</span>
        <SvgIcon
          class="inline-search__submit-icon"
          name="search" />
      </button>
    </div>
  </form>
</template>

<script>
import SvgIcon from '../icons/SvgIcon.vue';

export default {
  components: {
    SvgIcon,
  },
  props: {
    label: {
      type: String,
      required: true,
      default: '',
    },
    id: {
      type: String,
      required: true,
      default: '',
    },
    name: {
      type: String,
      required: false,
      default: '',
    },
    placeholder: {
      type: String,
      required: false,
      default: '',
    },
    value: {
      type: String,
      required: false,
      default: '',
    },
    withSubmit: {
      type: Boolean,
      required: false,
      default: false,
    },
    dark: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  methods: {
    handleSubmit(evt) {
      if (!this.$attrs.action) {
        evt.preventDefault();
      }

      this.$emit('submit');
    },
  },
};
</script>
