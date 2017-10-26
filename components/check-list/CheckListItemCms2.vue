<template>
  <li :key="index" class="check-list__item">
    <input
      :id="inputId"
      class="check-list__checkbox"
      type="checkbox"
      :checked="checked"
      @change="onChange"
    >
    <label class="check-list__label" :for="inputId">
      {{ text }}
    </label>
  </li>
</template>

<script>
export default {
  props: {
    index: {
      type: Number,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    checked: {
      type: Boolean,
      required: true,
    },
    toggle: {
      type: Function,
      required: true,
    },
  },
  computed: {
    inputId() {
      return `ui-${this._uid}`;
    },
    onChange() {
      return this.toggle.bind(this, this.index);
    },
  },
};
</script>

