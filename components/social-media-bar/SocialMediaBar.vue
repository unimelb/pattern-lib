<template>
  <div
    :class="className"
    class="social-media-bar">
    <div class="social-media-bar__inner">
      <div class="social-media-bar__col">
        <h4 class="social-media-bar__title">{{ title }}</h4>
        <div class="social-media-bar__links">
          <a
            v-if="newsletterLink"
            :href="newsletterLink"
            class="social-media-bar__link social-media-bar__link--content">
            <SvgIcon
              name="envelope"
              width="25"
              height="25"
              class="social-media-bar__icon"/>Sign up for e-news
          </a>
          <a
            v-if="blogLink"
            :href="blogLink"
            class="social-media-bar__link social-media-bar__link--content">
            <SvgIcon
              name="newspaper"
              width="25"
              height="25"
              class="social-media-bar__icon"/>Read our blog
          </a>
        </div>
      </div>
      <div class="social-media-bar__col">
        <h4 class="social-media-bar__title social-media-bar__title--secondary">Follow us</h4>
        <SocialListGeneric
          :facebook-link="facebookLink"
          :twitter-link="twitterLink"
          :linkedin-link="linkedinLink"
          :instagram-link="instagramLink"
          :vimeo-link="vimeoLink"
          :youtube-link="youtubeLink"
          class="social-media-bar__social-list"
          icon-size="30"
        />

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
    title: {
      type: String,
      default: '',
    },
    className: {
      type: String,
      default: '',
    },
    newsletterLink: {
      type: [String, Boolean],
      default: false,
    },
    blogLink: {
      type: [String, Boolean],
      default: false,
    },
    facebookLink: {
      type: [String, Boolean],
      default: false,
    },
    twitterLink: {
      type: [String, Boolean],
      default: false,
    },
    linkedinLink: {
      type: [String, Boolean],
      default: false,
    },
    instagramLink: {
      type: [String, Boolean],
      default: false,
    },
    vimeoLink: {
      type: [String, Boolean],
      default: false,
    },
    youtubeLink: {
      type: [String, Boolean],
      default: false,
    },
  },
};
</script>
