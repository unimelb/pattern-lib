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
      <div>
        <h3 class="card-image-listing__heading">
          {{ heading }}
        </h3>
        <a
          :href="href"
          class="card-image-listing__link">{{ linkName }}</a>
      </div>
    </div>
  </div>
</template>

<script>
import { IMAGE_PLACEHOLDER_BIG } from '../../utils/placeholders';

export default {
  name: 'CardListing',
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
