<template>
  <div class="card card--bdr card--showcase-profile">
    <div
      v-show="thumb && thumb.length > 0 && isHidden"
      :style="{ backgroundImage: `url(${thumb})` }"
      class="card__thumb"
      aria-label="Profile Image"
    />
    <div
      class="card__container"
      @click="changeIcon">
      <div
        v-if="!isHidden && thumb"
        :style="{ backgroundImage: `url(${thumb})` }"
        class="card__thumb--inner"
        aria-label="Profile Image"
      />
      <div class="card__inner">
        <div class="card__titles">
          <h6 class="card__title">{{ title }}</h6>
          <p class="card__sub-title">{{ subTitle }}</p>
        </div>
        <div>
          <SvgIcon
            v-if="bio"
            :class="className"
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
        class="card__bio">
        <VideoEmbed
          v-if="video"
          :src="video"/>
        <p class="card__bio--text">{{ bio }}</p>
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
      className: 'chevron',
    };
  },
  methods: {
    changeIcon() {
      if (this.bio !== '') {
        this.isHidden = !this.isHidden;
        if (this.className === 'chevron down') {
          this.className = 'chevron up';
        } else {
          this.className = 'chevron down';
        }
      }
    },

  },
};
</script>
