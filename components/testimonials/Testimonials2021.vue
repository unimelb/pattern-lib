<template>
  <component
    :is="video ? 'div' : 'blockquote'"
    :class="{
      'testimonial-today': true,
      'testimonial-today--video': video,
      'testimonial-today--alt': alt,
    }">
    <component
      :is="video ? 'h3' : 'p'"
      :class="{
        'testimonial-today__title': true,
        'heading-sm': !alt,
        'heading-md': alt,
      }">
      {{ title }}
    </component>
    <cite
      v-if="name"
      class="testimonial-today__name">
      {{ name }}
    </cite>
    <Video
      v-if="video && !alt"
      class="testimonial-today__video"
      :video="video"
      :poster="{ src: imgSrc, alt: name }"
      orientation="portrait"
      :autoplay="autoplay"
      @autoplay="$emit('autoplay')" />
    <template v-else-if="imgSrc">
      <client-only>
        <progressive-img
          :src="imgSrc"
          :aspect-ratio="1"
          :alt="name"
          class="testimonial-today__img" />
      </client-only>
    </template>
  </component>
</template>

<script>
import Video from 'components/embed/Video.vue';

export default {
  components: {
    Video,
  },
  props: {
    title: {
      type: String,
      required: true,
      default: '',
    },
    name: {
      type: String,
      required: false,
      default: '',
    },
    imgSrc: {
      type: String,
      required: false,
      default: '',
    },
    video: {
      type: Object,
      required: false,
      default() {
        return null;
      },
    },
    alt: {
      type: Boolean,
      required: false,
      default: false,
    },
    autoplay: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
};
</script>
