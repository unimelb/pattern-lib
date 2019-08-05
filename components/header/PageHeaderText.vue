<template>
  <div class="page-header-text">
    <div class="page-header-text__inner">
      <div class="page-header-text__header">
        <h4>{{ headerText }}</h4>
      </div>
      <div class="page-header-text__body">
        <h2 class="page-header-text__title">{{ titleText }}</h2>
        <h4 class="page-header-text__sub-title">{{ subTitleText }}</h4>
        <p class="page-header-text__description">{{ descriptionText }}</p>
      </div>
      <div class="page-header-text__footer">
        <ButtonIcon
          v-if="buttonLink"
          :href="buttonLink"
          class="page-header-text__button">{{ buttonText }}</ButtonIcon>
        <SocialList class="page-header-text__social-list"/>
        <span>{{ socialList }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import SocialList from '../social-list/SocialList.vue';
export default {
  components: {
    SocialList,
  },
  props: {
    headerText: {
      type: String,
      default: '',
      required: true,
    },
    titleText: {
      type: String,
      default: '',
      required: true,
    },
    subTitleText: {
      type: String,
      default: '',
      required: true,
    },
    descriptionText: {
      type: String,
      default: '',
      required: true,
    },
    buttonText: {
      type: String,
      default: '',
    },
    buttonLink: {
      type: String,
      default: '',
    },
    socialList: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
