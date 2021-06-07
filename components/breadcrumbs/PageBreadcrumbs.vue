<template>
  <nav aria-label="Breadcrumb">
    <ol
      class="page-breadcrumbs max links-reset"
      itemscope
      itemtype="http://schema.org/BreadcrumbList">
      <li
        v-for="(item, index) in items"
        :key="item.href"
        class="page-breadcrumbs__item"
        itemprop="itemListElement"
        itemscope
        itemtype="http://schema.org/ListItem">
        <meta
          :content="index + 1"
          itemprop="position">
        <a
          :href="item.href"
          :aria-current="index === items.length - 1"
          class="page-breadcrumbs__link"
          itemprop="item">
          <SvgIcon
            v-if="index === 0"
            class="page-breadcrumbs__home"
            name="home"
            aria-hidden="true"
            width="18"
            height="18" />
          <span
            class="page-breadcrumbs__name"
            itemprop="name">{{ item.text }}</span>
          <SvgIcon
            v-if="index < items.length - 1"
            class="page-breadcrumbs__chevron"
            name="chevron-right"
            aria-label="Chevron right"
            aria-hidden="true"
            width="12"
            height="12" />
        </a>
      </li>
    </ol>
  </nav>
</template>

<script>
import SvgIcon from '../icons/SvgIcon.vue';

export default {
  components: { SvgIcon },
  props: {
    items: {
      type: Array,
      required: true,
      validator: (arr) => (
        arr.length
        && arr.every((el) => !!el.href && !!el.text)
      ),
    },
  },
};
</script>
