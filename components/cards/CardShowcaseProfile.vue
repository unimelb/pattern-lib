<template>
  <div class="card card--bdr card--showcase-profile">
    <div
      v-show="thumb && thumb.length > 0 && isHidden"
      :style="{ backgroundImage: `url(${thumb})` }"
      class="card__thumb"
      aria-label="Profile Image"
    />
    <div
      class="card__inner"
      @click="(isHidden = !isHidden)">
      <div class="card__titles">
        <h6 class="card__title">{{ title }}</h6>
        <p class="card__sub-title">{{ subTitle }}</p>
      </div>
      <div>
        <SvgIcon
          v-if="bio"
          :name="iconName"
          aria-label="chevron"
          class="card__icon"
          width="10px"
          height="10px"
        />
      </div>
    </div>

    <transition name="slide-fade">
      <div
        v-show="!isHidden"
        class="card__bio">
        <VideoEmbed
          v-if="video"
          :src="video"/>
        <p>{{ bio }}</p>
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
      iconName: 'chevron-up',
    };
  },
  methods: {
    setIconUp() {
      this.iconName = 'chevron-up';
    },
    setIconDown() {
      this.iconName = 'chevron-down';
    },
  },
};
</script>
