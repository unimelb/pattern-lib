<template>
  <nav aria-label="Breadcrumb">
    <ol class="page-breadcrumbs max links-reset">
      <li
        v-for="(item, index) in items"
        :key="item.href"
        class="page-breadcrumbs__item"
      >
        <a class="page-breadcrumbs__link" :href="item.href" :aria-current="index === items.length -1 ? 'page' : false">
          <SvgIcon
            v-if="index === 0"
            class="page-breadcrumbs__home"
            name="home"
            width="18" height="18"
          />
          <span class="page-breadcrumbs__name">{{ item.text }}</span>
          <SvgIcon
            v-if="index < items.length - 1"
            class="page-breadcrumbs__chevron"
            name="chevron-right"
            width="12" height="12"
          />
        </a>
      </li>
    </ol>
  </nav>
</template>

<script>
import SvgIcon from '../../icons/SvgIcon.vue';

export default {
  components: { SvgIcon },
  props: {
    items: {
      type: Array,
      required: true,
      validator: arr => (
        arr.length > 0 &&
        arr.every(el => !!el.href && !!el.text)
      ),
    },
  },
};
</script>
