<template>
  <component
    :is="video ? 'div' : 'blockquote'"
    :class="{
      'testimonials-alt': true,
      'testimonials-alt--video': video,
      'testimonials-alt--long': long,
    }">
    <component
      :is="video ? 'h3' : 'p'"
      :id="id"
      :class="{
        'testimonials-alt__title': true,
        'heading-sm': !long,
        'heading-md': long,
      }">
      {{ title }}
    </component>
    <cite
      v-if="name"
      class="testimonials-alt__name">
      {{ name }}
    </cite>
    <VideoPlayer
      v-if="video && !long"
      class="testimonials-alt__video"
      :video="video"
      :poster="{ src: imgSrc, alt: name }"
      orientation="portrait"
      :autoplay="autoplay"
      :describedby="id"
      @autoplay="$emit('autoplay')" />
    <client-only v-else-if="imgSrc">
      <progressive-img
        :src="imgSrc"
        :aspect-ratio="1"
        :alt="name"
        class="testimonials-alt__img" />
    </client-only>
  </component>
</template>

<script>
import VideoPlayer from 'components/embed/VideoPlayer.vue';

export default {
  components: {
    VideoPlayer,
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
    long: {
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
  computed: {
    id() {
      return `testimonial-${this._uid}`;
    },
  },
};
</script>
