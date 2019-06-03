<template>
  <header :class="`page-header page-header--l${level}`">
    <div class="page-header__inner max">
      <a
        class="link-img link-reset"
        href="https://www.unimelb.edu.au/">
        <img
          class="page-header__logo"
          src="../../shared/logov2.svg"
          width="148"
          height="148"
          alt="The University of Melbourne homepage"
        >
      </a>
      <div
        v-if="entity"
        class="page-header__entity">
        <p
          class="page-header__entity__main"
          v-html="entity"/>
        <p
          v-if="entitySub"
          class="page-header__entity__sub"
          v-html="entitySub"/>
      </div>
      <h1 class="page-header__heading">{{ title }}</h1>
    </div>
    <div
      :style="{ backgroundImage: `url(${img})` }"
      class="page-header__img page-header__aperture"
    />
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
      default: '',
      required: true,
    },
    entity: {
      type: String /* raw HTML (line breaks allowed) */,
      default: '',
    },
    entitySub: {
      type: String /* raw HTML (line breaks allowed) */,
      default: '',
    },
    img: {
      type: String,
      required: true,
    },
  },
};
</script>
