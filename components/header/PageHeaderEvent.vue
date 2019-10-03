<template>
  <div class="page-header-event">
    <div class="page-header-event__inner">
      <h4
        v-if="headerText"
        class="page-header-event__header">
        {{ headerText }}
      </h4>
      <div class="page-header-event__body">
        <h2 class="page-header-event__title">
          {{ titleText }}
        </h2>
        <h4
          v-if="subTitleText"
          class="page-header-event__sub-title">
          {{ subTitleText }}
        </h4>
        <p
          v-if="descriptionText"
          class="page-header-event__description">
          {{ descriptionText }}
        </p>
      </div>
      <div class="page-header-event__footer">
        <ButtonIcon
          v-if="buttonLink"
          :href="buttonLink"
          class="page-header-event__button btn--event"
          size="xsml"
          width="fullwidth"
          no-icon>
          {{ buttonText }}
        </ButtonIcon>
        <SocialListGeneric
          facebook-link="www.unimelb.edu.au"
          twitter-link="www.unimelb.edu.au"
          linkedin-link="www.unimelb.edu.au"
          instagram-link="www.unimelb.edu.au"
          vimeo-link="www.unimelb.edu.au"
          youtube-link="www.unimelb.edu.au" />
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
    },
    titleText: {
      type: String,
      default: '',
      required: true,
    },
    subTitleText: {
      type: String,
      default: '',
    },
    descriptionText: {
      type: String,
      default: '',
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
