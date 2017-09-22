<template>
  <a class="ql-menu__link" :href="href" >
    <span class="push-icon">
      <slot />
      <icon class="push-icon__icon" name="icon-chevron-right" height="16" width="16" />
    </span>
  </a>
</template>

<script>
  import Icon from './../../icons/stories/Icon.vue';

  export default {
    name: 'ql-menu-item',
    components: { Icon },
    props: {
      title: String,
      href: String
    }
  }
</script>