<template>
  <header :class="`banner banner--l${level}`">
    <div v-if="level === 3" class="banner__shape"></div>
    <div class="banner__inner max">
      <a class="link-img link-reset" href="https://www.unimelb.edu.au/">
        <img
          class="banner__logo"
          src="../shared/logo.svg"
          width="117" height="117"
          alt="The University of Melbourne homepage"
        >
      </a>
      <p v-if="entity" class="banner__entity">{{ entity }}</p>
      <h1 class="banner__heading">{{ title }}</h1>
    </div>
    <div
      class="banner__img banner__aperture"
      :style="`background-image: url('${img}');`"
    ></div>
  </header>
</template>

<script>
export default {
  props: {
    level: {
      type: Number,
      default: 1,
      validator: val => [1, 2].indexOf(val) !== -1,
    },
    title: {
      type: String,
      required: true,
    },
    entity: String,
    img: {
      type: String,
      required: true,
    },
  },
};
</script>
