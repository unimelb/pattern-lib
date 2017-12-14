<template>
  <div class="card card--division card--division--head card--bdr">
    <div class="card__thumb" :style="{'background-image': `url(${thumb})`}"></div>
    <div class="card__inner ">
      <div class="card__subheader">
        <h3 class="card__header">{{ name }}</h3>
        <p class="card__meta"> {{ title }}</p>
      </div>
      <hr>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
    },
    title: {
      type: String,
    },
    thumb: {
      type: String,
    },
  },
};
</script>
