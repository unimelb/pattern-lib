<template>
  <nav>
    <ol class="breadcrumbs links-reset max" itemscope="" itemtype="http://schema.org/BreadcrumbList">
      <li class="breadcrumbs__item" itemprop="itemListElement" itemscope="" itemtype="http://schema.org/ListItem">
        <meta content="1" itemprop="position">
        <a class="breadcrumbs__link" href="/" itemprop="item"><svg class="breadcrumbs__home" focusable="false" height="18" role="presentation" width="18"><use xlink:href="#home"/></svg><span class="breadcrumbs__name" itemprop="name">About us</span></a><svg v-if="level>1" class="breadcrumbs__chevron" focusable="false" height="12" role="presentation" width="12"><use xlink:href="#chevron-right"/></svg>
      </li>
      <li v-if="level>1" class="breadcrumbs__item" itemprop="itemListElement" itemscope="" itemtype="http://schema.org/ListItem">
        <meta content="1" itemprop="position">
        <a class="breadcrumbs__link" href="/strategy" itemprop="item"><span class="breadcrumbs__name" itemprop="name">Strategy and governance</span></a><svg v-if="level>2" class="breadcrumbs__chevron" focusable="false" height="12" role="presentation" width="12"><use xlink:href="#chevron-right"/></svg>
      </li>
      <li v-if="level>2" class="breadcrumbs__item" itemprop="itemListElement" itemscope="" itemtype="http://schema.org/ListItem">
        <meta content="1" itemprop="position">
        <a class="breadcrumbs__link" href="/strategy/growing-esteem" itemprop="item"><span class="breadcrumbs__name" itemprop="name">Growing Esteem</span></a>
      </li>
    </ol>
  </nav>
</template>

<script>
export default {
  name: 'BreadCrumbs',
  props: {
    level: Number,
  },
};
</script>
