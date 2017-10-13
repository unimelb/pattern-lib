<template>
  <nav>
    <ol
      class="breadcrumbs links-reset max"
      itemscope itemtype="http://schema.org/BreadcrumbList"
    >
      <li
        v-for="(item, index) in items"
        :key="item.href"
        class="breadcrumbs__item"
        itemprop="itemListElement"
        itemscope itemtype="http://schema.org/ListItem"
      >
        <meta :content="index + 1" itemprop="position">
        <a class="breadcrumbs__link" :href="item.href" itemprop="item">
          <icon
            v-if="index === 0"
            class="breadcrumbs__home"
            name="home"
            width="18" height="18"
          />
          <span class="breadcrumbs__name" itemprop="name">{{ item.text }}</span>
        </a>
        <icon
          v-if="index < items.length - 1"
          class="breadcrumbs__chevron"
          name="chevron-right"
          width="12" height="12"
        />
      </li>
    </ol>
  </nav>
</template>

<script>
export default {
  name: 'BreadCrumbs',
  props: {
    items: {
      type: Array,
      required: true,
      validator: (arr) => (
        arr.length > 0 &&
        arr.every(el => !!el.href && !!el.text)
      ),
    },
  },
};
</script>
