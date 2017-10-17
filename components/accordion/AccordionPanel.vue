<template>
  <div class="fr-accordion__item">
    <div :id="`accordion-header-1${this._uid}`" class="fr-accordion__header js-fr-accordion__header">
      <slot name="title"></slot>
    </div>
    <div :id="`accordion-panel-1${this._uid}`" class="fr-accordion__panel js-fr-accordion__panel">
      <div class="fr-accordion__panel__inner">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'accordion-panel',
  props: {
    title: String,
  },
};
</script>
