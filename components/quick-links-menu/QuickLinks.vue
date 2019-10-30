<template>
  <div
    :class="{
      [`ql-menu--l${level}`]: true,
      'ql-menu--pad': pad,
      'ql-menu--condensed': condensed,
    }"
    class="grid ql-menu">
    <div class="cell cell--desk-2of3 ql-menu__content">
      <slot name="content" />
      <div
        v-if="secondaryLinks && secondaryLinks.length > 0"
        :class="{ [`ql-menu__secondary--2col`]: secondaryCols === 2 }"
        class="ql-menu__secondary">
        <QuickLinksSecondaryItem
          v-for="item in secondaryLinks"
          :key="item.id"
          :href="item.href"
          :icon="item.icon"
          :title="item.title"
          class="cell" />
      </div>
    </div>
    <div class="cell cell--desk-1of3">
      <nav
        v-if="menuLinks.length > 0"
        class="ql-menu__nav">
        <slot name="menu-header" />
        <QuickLinksMenuItem
          v-for="item in menuLinks"
          :key="item.id"
          :href="item.href"
          :title="item.title"
          :truncate="item.truncate" />
      </nav>
    </div>
  </div>
</template>

<script>
import QuickLinksMenuItem from './QuickLinksMenuItem.vue';
import QuickLinksSecondaryItem from './QuickLinksSecondaryItem.vue';
export default {
  components: { QuickLinksMenuItem, QuickLinksSecondaryItem },
  props: {
    level: {
      type: String,
      default: '1',
    },
    pad: {
      type: Boolean,
      default: false,
    },
    condensed: {
      type: Boolean,
      default: false,
    },
    menuLinks: {
      type: Array,
      default: () => [],
    },
    secondaryLinks: {
      type: Array,
      default: () => [],
    },
    secondaryCols: {
      type: Number,
      default: 2,
    },
  },
};
</script>
