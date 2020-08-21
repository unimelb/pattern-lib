<template>
  <a
    :href="href"
    class="card-image-link">
    <div class="card-image-link__wrapper">
      <div class="card-image-link__image-wrapper">
        <div
          role="img"
          :style="{ backgroundImage: `url(${thumb})` }"
          :aria-label="ariaLabel"
          class="card-image-link__image" />
      </div>
      <div class="card-image-link__inner">
        <h3 class="card-image-link__heading">
          {{ heading }}
        </h3>
      </div>
    </div>
  </a>
</template>

<script>
import { IMAGE_PLACEHOLDER_BIG } from '../../utils/placeholders';

export default {
  name: 'CardLink',
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
    href: {
      type: String,
      default: '#',
    },
  },
};
</script>
