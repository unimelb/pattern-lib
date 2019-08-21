<template>
  <div class="showcase-profile">
    <div
      v-show="showThumb"
      :style="{ backgroundImage: `url(${thumb})` }"
      class="showcase-profile__thumb"
      aria-label="Profile Image"
    />
    <div
      class="showcase-profile__container"
      @click="changeIcon">
      <div
        v-if="!isHidden && thumb"
        :style="{ backgroundImage: `url(${thumb})` }"
        class="showcase-profile__thumb--inner"
        aria-label="Profile Image"
      />
      <div class="showcase-profile__inner">
        <div class="showcase-profile__titles">
          <h6 class="showcase-profile__title">{{ title }}</h6>
          <p class="showcase-profile__sub-title">{{ subTitle }}</p>
        </div>
        <div>
          <SvgIcon
            v-if="bio"
            :class="className"
            class="showcase-profile__icon"
            name="chevron-up"
            aria-label="chevron"
            width="14px"
            height="14px"
          />
        </div>
      </div>
    </div>

    <transition name="slide">
      <div
        v-show="!isHidden"
        class="showcase-profile__bio">
        <VideoEmbed
          v-if="video"
          :src="video"
          class="showcase-profile__embed"/>
        <p class="showcase-profile__bio--text">{{ bio }}</p>
      </div>
    </transition>
  </div>
</template>

<script>
import SvgIcon from '../icons/SvgIcon.vue';
import VideoEmbed from '../embed/VideoEmbed.vue';
import { IMAGE_PLACEHOLDER_SHORT } from '../../utils/placeholders';

export default {
  name: 'Showcase',
  components: { SvgIcon, VideoEmbed },
  props: {
    thumb: {
      type: String,
      default: IMAGE_PLACEHOLDER_SHORT,
    },
    title: {
      type: String,
      default: '',
    },
    subTitle: {
      type: String,
      default: '',
    },
    video: {
      type: String,
      default: '',
    },
    bio: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      isHidden: true,
    };
  },
  computed: {
    showThumb() {
      return this.thumb && this.thumb.length > 0 && this.isHidden;
    },
    className() {
      return (this.isHidden) ? '' : 'showcase-profile__icon--active';
    },
  },
  methods: {
    changeIcon() {
      if (this.bio !== '') {
        this.isHidden = !this.isHidden;
      }
    },
  },
};
</script>
