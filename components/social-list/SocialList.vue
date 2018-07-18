<template>
  <ul class="social-list list-reset links-reset">
    <li
      v-if="facebook"
      :class="{ 'col-facebook': withColors }">
      <a
        class="social-list__link"
        href="https://www.facebook.com/unimelb">
        <SvgIcon
          :width="iconSize"
          :height="iconSize"
          aria-label="Facebook"
          class="social-list__icon"
          name="facebook" />
        <span class="screenreaders-only">Facebook</span>
      </a>
    </li>
    <li
      v-if="twitter"
      :class="{ 'col-twitter': withColors }">
      <a
        class="social-list__link"
        href="https://www.twitter.com/unimelb">
        <SvgIcon
          :width="iconSize"
          :height="iconSize"
          aria-label="Twitter"
          class="social-list__icon"
          name="twitter" />
        <span class="screenreaders-only">Twitter</span>
      </a>
    </li>
    <li
      v-if="linkedin"
      :class="{ 'col-linkedin': withColors }">
      <a
        class="social-list__link"
        href="https://www.linkedin.com/company/university-of-melbourne">
        <SvgIcon
          :width="iconSize"
          :height="iconSize"
          aria-label="LinkedIn"
          class="social-list__icon"
          name="linkedin" />
        <span class="screenreaders-only">LinkedIn</span>
      </a>
    </li>
  </ul>
</template>

<script>
import SvgIcon from '../icons/SvgIcon.vue';

export default {
  components: { SvgIcon },
  props: {
    facebook: {
      type: Boolean,
      default: true,
    },
    twitter: {
      type: Boolean,
      default: true,
    },
    linkedin: {
      type: Boolean,
      default: true,
    },
    withColors: {
      type: Boolean,
      default: true,
    },
    iconSize: {
      type: Number,
      default: 25,
    },
  },
};
</script>
