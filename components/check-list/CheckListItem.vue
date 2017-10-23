<template>
  <li class="checklist__item">
    <input :checked="checked === '' || checked === 'checked' ? 'checked': false" class="checklist__item__checkbox" :id="`check-list-item-1${this._uid}`" type="checkbox">
    <label class="checklist__item__label" :for="`check-list-item-1${this._uid}`">
      <slot></slot>
    </label>
  </li>
</template>

<script>
export default {
  props: {
    checked: String,
  },
};
</script>
