<template>
  <div class="card-image-listing">
    <div class="card-image-listing__wrapper">
      <div class="card-image-listing__image-wrapper">
        <div
          role="img"
          :style="{ backgroundImage: `url(${thumb})` }"
          :aria-label="ariaLabel"
          class="card-image-listing__image" />
      </div>
      <div class="card-image-listing__inner">
        <h3 class="card-image-listing__heading">
          {{ heading }}
        </h3>
        <a
          :href="href"
          class="card-image-listing__link">{{ linkName }}
          <SvgIcon
            class="card-image-listing__link-icon"
            name="chevron-right"
            width="12"
            height="12" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import SvgIcon from '../icons/SvgIcon.vue';
import { IMAGE_PLACEHOLDER_BIG } from '../../utils/placeholders';

export default {
  name: 'CardListing',
  components: {
    SvgIcon,
  },
  props: {
    thumb: {
      type: String,
      default: IMAGE_PLACEHOLDER_BIG,
    },
    ariaLabel: {
      type: String,
      default: '',
      required: true,
    },
    heading: {
      type: String,
      default: '',
    },
    linkName: {
      type: String,
      default: '',
    },
    href: {
      type: String,
      default: '#',
    },
  },
};
</script>
