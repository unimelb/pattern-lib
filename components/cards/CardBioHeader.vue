<template>
  <div class="card card--division card--division--head card--bdr">
    <div
      :style="{'background-image': `url(${thumb})`}"
      class="card__thumb"/>
    <div class="card__inner ">
      <div class="card__subheader">
        <div class="card__header">{{ name }}</div>
        <div class="card__meta"> {{ title }}</div>
      </div>
      <hr>
      <slot/>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    thumb: {
      type: String,
      default: '',
    },
  },
};
</script>
