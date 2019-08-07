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
          :href="buttonLink"
          class="page-header-text__button btn--event"
          size="xsml"
          width="fullwidth"
          no-icon>{{ buttonText }}</ButtonIcon>
        <SocialListGeneric
          facebook-link="www.unimelb.edu.au"
          twitter-link="www.unimelb.edu.au"
          linkedin-link="www.unimelb.edu.au"
          instagram-link="www.unimelb.edu.au"
          vimeo-link="www.unimelb.edu.au"
          youtube-link="www.unimelb.edu.au"
          class="page-header-text__social-list"/>
      </div>
    </div>
  </div>
</template>

<script>
import SocialListGeneric from '../social-list/SocialListGeneric.vue';
export default {
  components: {
    SocialListGeneric,
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
  },
};
</script>
