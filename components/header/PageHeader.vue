<template>
  <header :class="`page-header page-header--l${level}`">
    <div class="page-header__inner max">
      <Logo no-padding />
      <div
        v-if="entity"
        class="page-header__entity">
        <!-- eslint-disable vue/no-v-html -->
        <p
          class="page-header__entity__main"
          v-html="entity" />
        <p
          v-if="entitySub"
          class="page-header__entity__sub"
          v-html="entitySub" />
        <!-- eslint-enable vue/no-v-html -->
      </div>
      <h1 class="page-header__heading">
        {{ title }}
      </h1>
    </div>
    <div
      :style="{ backgroundImage: `url(${img})` }"
      class="page-header__img page-header__aperture" />
  </header>
</template>

<script>
import Logo from '../logo/Logo.vue';

export default {
  components: {
    Logo,
  },
  props: {
    level: {
      type: Number,
      default: 1,
      validator: (val) => {
        const validLevels = [1, 2]; // eslint-disable-line no-magic-numbers

        return validLevels.includes(val);
      },
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
