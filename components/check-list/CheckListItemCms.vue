<template>
  <li class="check-list__item">
    <input
      :id="`ui-${_uid}`"
      class="check-list__checkbox"
      type="checkbox"
    >
    <label class="check-list__label" :for="`ui-${_uid}`">
      <slot></slot>
    </label>
  </li>
</template>
