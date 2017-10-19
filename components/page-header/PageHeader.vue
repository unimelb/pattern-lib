<template>
  <header :class="`page-header page-header--l${level}`">
    <div class="page-header__inner max">
      <a class="link-img link-reset" href="https://www.unimelb.edu.au/">
        <img
          class="page-header__logo"
          src="../shared/logo.svg"
          width="117" height="117"
          alt="The University of Melbourne homepage"
        >
      </a>
      <div v-if="entity" class="page-header__entity">
        <p class="page-header__entity__main" v-html="entity"></p>
        <p v-if="entitySub" class="page-header__entity__sub" v-html="entitySub"></p>
      </div>
      <h1 class="page-header__heading">{{ title }}</h1>
    </div>
    <div
      class="page-header__img page-header__aperture"
      :style="{ backgroundImage: `url(${img})` }"
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
    entity: String, /* raw HTML (line breaks allowed) */
    entitySub: String, /* raw HTML (line breaks allowed) */
    img: {
      type: String,
      required: true,
    },
  },
};
</script>
