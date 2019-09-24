<template>
  <ul class="social-list list-reset links-reset">
    <li
      v-if="facebookLink"
    >
      <a
        :href="facebookLink"
        class="social-list__link"
      >
        <SvgIcon
          :width="iconSize"
          :height="iconSize"
          aria-label="Facebook"
          class="social-list__icon"
          name="facebook"
        />
        <span class="screenreaders-only">Facebook</span>
      </a>
    </li>
    <li
      v-if="twitterLink"
    >
      <a
        :href="twitterLink"
        class="social-list__link"
      >
        <SvgIcon
          :width="iconSize"
          :height="iconSize"
          aria-label="Twitter"
          class="social-list__icon"
          name="twitter"
        />
        <span class="screenreaders-only">Twitter</span>
      </a>
    </li>
    <li
      v-if="linkedinLink"
    >
      <a
        :href="linkedinLink"
        class="social-list__link"
      >
        <SvgIcon
          :width="iconSize"
          :height="iconSize"
          aria-label="LinkedIn"
          class="social-list__icon"
          name="linkedin"
        />
        <span class="screenreaders-only">LinkedIn</span>
      </a>
    </li>
    <li
      v-if="instagramLink"
    >
      <a
        :href="instagramLink"
        class="social-list__link"
      >
        <SvgIcon
          :width="iconSize"
          :height="iconSize"
          aria-label="Instagram"
          class="social-list__icon"
          name="instagram"
        />
        <span class="screenreaders-only">Instagram</span>
      </a>
    </li>
    <li
      v-if="vimeoLink"
    >
      <a
        :href="vimeoLink"
        class="social-list__link"
      >
        <SvgIcon
          :width="iconSize"
          :height="iconSize"
          aria-label="Vimeo"
          class="social-list__icon"
          name="vimeo"
        />
        <span class="screenreaders-only">Vimeo</span>
      </a>
    </li>
    <li
      v-if="youtubeLink"
    >
      <a
        :href="youtubeLink"
        class="social-list__link"
      >
        <SvgIcon
          :width="iconSize"
          :height="iconSize"
          aria-label="Youtube"
          class="social-list__icon"
          name="youtube"
        />
        <span class="screenreaders-only">Youtube</span>
      </a>
    </li>
  </ul>
</template>

<script>
import SvgIcon from '../icons/SvgIcon.vue';

export default {
  components: { SvgIcon },
  props: {
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
    iconSize: {
      type: Number,
      default: 25,
    },
  },
};
</script>
