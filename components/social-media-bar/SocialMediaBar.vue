<template>
  <div
    :class="className"
    class="social-media-bar">
    <div class="social-media-bar__inner">
      <div class="social-media-bar__container-top">
        <h4 class="social-media-bar__title">{{ title }}</h4>
        <div class="social-media-bar__links">
          <a
            v-if="newsletterLink"
            :href="newsletterLink"
            class="social-media-bar__link">
            <SvgIcon
              name="envelope"
              width="25"
              height="25"
              class="social-media-bar__icon"/>Sign up for e-news
          </a>
          <a
            v-if="blogLink"
            :href="blogLink"
            class="social-media-bar__link">
            <SvgIcon
              name="newspaper"
              width="25"
              height="25"
              class="social-media-bar__icon"/>Read our blog
          </a>
        </div>
      </div>
      <div class="social-media-bar__container-bottom">
        <h4 class="social-media-bar__follow-us">Follow us</h4>
        <div class="social-media-bar__social">
          <a
            v-if="facebookLink"
            :href="facebookLink"
            class="social-media-bar__link--social">
            <SvgIcon
              name="facebook"
              width="30"
              height="30"/>
          </a>
          <a
            v-if="twitterLink"
            :href="twitterLink"
            class="social-media-bar__link--social">
            <SvgIcon
              name="twitter"
              width="30"
              height="30"/>
          </a>
          <a
            v-if="linkedinLink"
            :href="linkedinLink"
            class="social-media-bar__link--social">
            <SvgIcon
              name="linkedin"
              width="30"
              height="30"/>
          </a>
          <a
            v-if="instagramLink"
            :href="instagramLink"
            class="social-media-bar__link--social">
            <SvgIcon
              name="instagram"
              width="30"
              height="30"/>
          </a>
          <a
            v-if="vimeoLink"
            :href="vimeoLink"
            class="social-media-bar__link--social">
            <SvgIcon
              name="vimeo"
              width="30"
              height="30"/>
          </a>
          <a
            v-if="youtubeLink"
            :href="youtubeLink"
            class="social-media-bar__link--social">
            <SvgIcon
              name="youtube"
              width="30"
              height="30"/>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
