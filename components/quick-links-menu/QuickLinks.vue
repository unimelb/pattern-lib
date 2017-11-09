<template>
  <div class="grid ql-menu" :class="{[`ql-menu--l${level}`]: true, 'ql-menu--pad': pad }">
    <div class="cell cell--desk-2of3 ql-menu__content">
      <slot name="content"></slot>
      <div class="ql-menu__secondary" :class="{[`listing--${secondaryCols}`]: true}" v-if="secondaryLinks && secondaryLinks.length > 0">
        <QuickLinksSecondaryItem class="list-item" :href="item.href" v-for="item in secondaryLinks" :key="item.id" :icon="item.icon" :title="item.title" />
      </div>
    </div>
    <div class="cell cell--desk-1of3">
      <nav class="ql-menu__nav" v-if="menuLinks.length > 0">
        <slot name="menu-header"></slot>
        <QuickLinksMenuItem :href="item.href" v-for="item in menuLinks" :key="item.id" :title="item.title" />
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
    pad: Boolean,
    menuLinks: Array,
    secondaryLinks: Array,
    secondaryCols: {
      type: String,
      default: 'two',
    },
  },
};
</script>
