<template>
  <div class="fr-accordion__item">
    <h2 :id="`accordion-header-1${this._uid}`" class="fr-accordion__header js-fr-accordion__header">{{ title }}</h2>
    <div :id="`accordion-panel-1${this._uid}`" class="fr-accordion__panel js-fr-accordion__panel">
      <div class="fr-accordion__panel__inner">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      title: String
    }
  }
</script>
