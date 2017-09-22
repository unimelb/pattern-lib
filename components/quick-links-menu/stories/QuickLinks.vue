<template>
  <div class="grid ql-menu" :class="level">
    <div class="cell cell--desk-2of3 ql-menu__content">
      <slot name="content"/>
    </div>
    <div class="cell cell--desk-1of3">
      <nav class="ql-menu__nav">
        <slot/>
      </nav>
    </div>
  </div>
</template>


<script>
  export default {
    name: 'QuickLinksMenu',
    props: {
      menuLinks: {
        type: Object,
      },
      level: {
        type: String,
        default: 'ql-menu--l1'
      }
    }
  }
</script>
