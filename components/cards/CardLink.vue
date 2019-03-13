<template>
  <a
    :href="href"
    :class="{'bg-inverted card--bdr': inverted, 'bg-white card--bdr-grey' : !inverted}"
    tabindex="0"
    role="button"
    class="btn-owner card card--link ">
    <div
      v-if="thumb"
      :style="{ backgroundImage: `url(${thumb})` }"
      class="card__thumb"/>
    <div
      :class="{'cl-white' : inverted, 'cl-inverted': !inverted}"
      class="card__header">
      <span :class="{'title-inverted': !inverted}">{{ title }}</span>
      <SvgIcon
        width="15px"
        height="15px"
        name="chevron-right"
      />
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
    cols: {
      type: Number,
      default: 4,
      validator: cols => cols <= 4,
    },
  },
};

</script>
