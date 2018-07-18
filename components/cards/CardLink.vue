<template>
  <a
    :href="href"
    :class="{'bg-inverted': inverted, 'bg-white' : !inverted}"
    class="btn-owner card card--link card--bdr">
    <div
      v-if="thumb"
      :style="{ backgroundImage: `url(${thumb})` }"
      class="card__thumb"/>
    <div class="card__header">
      <span>{{ title }}</span>
      <SvgIcon
        width="15px"
        height="15px"
        name="chevron-right" />
    </div>
  </a>
</template>

<script>
export default {
  props: {
    thumb: {
      type: [String, Boolean],
      default: 'https://via.placeholder.com/400x200',
    },
    title: {
      type: String,
      default: 'Test title',
    },
    href: {
      type: String,
      default: '#',
    },
    inverted: {
      type: Boolean,
      default: false,
    },
  },
};

</script>
