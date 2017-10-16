<template>
  <a :href="href" class="btn-owner card card--link card--bdr" :class="{'bg-inverted': inverted, 'bg-white' : !inverted}">
    <div class="card__thumb" :style="{backgroundImage: `url('${thumb}')`}"></div>
    <SvgIcon width="15px" height="15px" name="chevron-right" />
    <p class="card__header">
      {{ title }}
    </p>
  </a>
</template>

<script>
export default {
  props: {
    thumb: {
      type: String,
      default: 'http://via.placeholder.com/400x200',
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
