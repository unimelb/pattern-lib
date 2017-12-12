<template>
  <ul class="social-list list-reset links-reset">
    <li v-if="facebook" :class="{ 'col-facebook': withColors }">
      <a class="social-list__link" href="https://www.facebook.com/unimelb">
        <SvgIcon aria-label="Facebook" class="social-list__icon" name="facebook" :width="iconSize" :height="iconSize" role="img" />
      </a>
    </li>
    <li v-if="twitter" :class="{ 'col-twitter': withColors }">
      <a class="social-list__link" href="https://www.twitter.com/unimelb">
        <SvgIcon aria-label="Twitter" class="social-list__icon" name="twitter" :width="iconSize" :height="iconSize" role="img" />
      </a>
    </li>
    <li v-if="linkedin" :class="{ 'col-linkedin': withColors }">
      <a class="social-list__link" href="https://www.linkedin.com/company/university-of-melbourne">
        <SvgIcon aria-label="LinkedIn" class="social-list__icon" name="linkedin" :width="iconSize" :height="iconSize" role="img" />
      </a>
    </li>
  </ul>
</template>

<script>
export default {
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
