<template>
  <a
    :href="href"
    :class="classes"
    tabindex="0"
    role="button"
    class="btn-owner card card--link card--bdr">
    <div
      v-if="thumb"
      :style="{ backgroundImage: `url(${thumb})` }"
      class="card__thumb"/>
    <div
      :class="card_header_classes"
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
      validator: cols => cols && cols <= 4,
    },
  },
  computed: {
    classes() {
      return [
        {
          'bg-inverted card--bdr': this.inverted,
          'bg-white card--bdr-grey': !this.inverted,
        },
      ];
    },
    card_header_classes() {
      return [
        {
          'cl-white': this.inverted,
          'cl-inverted': !this.inverted,
        },
      ];
    },
  },
};

</script>
