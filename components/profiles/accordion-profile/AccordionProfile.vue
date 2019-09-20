<template>
  <div class="accordion-profile">
    <div
      :style="{ backgroundImage: `url(${thumb})` }"
      :class="thumbClass"
      class="accordion-profile__thumb"
      aria-label="Profile Image"
    />
    <div
      :class="containBioClass"
      class="accordion-profile__container"
      @click="changeIcon">
      <div
        :style="{ backgroundImage: `url(${thumb})` }"
        :class="smallThumbClass"
        class="accordion-profile__thumb-inner"
        aria-label="Profile Image"
      />
      <div class="accordion-profile__inner">
        <div class="accordion-profile__titles">
          <h6 class="accordion-profile__title">{{ title }}</h6>
          <p class="accordion-profile__sub-title">{{ subTitle }}</p>
        </div>
        <div>
          <SvgIcon
            v-if="bio"
            :class="iconClassName"
            class="accordion-profile__icon"
            name="chevron-up"
            aria-label="chevron"
            width="14px"
            height="14px"
          />
        </div>
      </div>
    </div>
    <div
      :class="bioClass"
      class="accordion-profile__bio">
      <VideoEmbed
        v-if="videoApi"
        :src="videoApi"
        class="accordion-profile__embed"/>
      <p class="accordion-profile__bio-text">{{ bio }}</p>
    </div>
  </div>
</template>

<script>
import SvgIcon from '../../icons/SvgIcon.vue';
import VideoEmbed from '../../embed/VideoEmbed.vue';
import { IMAGE_PLACEHOLDER_SHORT } from '../../../utils/placeholders';

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
    thumbClass() {
      return (this.isHidden) ? '' : 'accordion-profile__thumb--transition';
    },
    smallThumbClass() {
      return (this.isHidden) ? '' : 'accordion-profile__thumb-inner--transition';
    },
    iconClassName() {
      return (this.isHidden) ? '' : 'accordion-profile__icon--active';
    },
    containBioClass() {
      return (this.bio) ? 'accordion-profile__container--bio' : '';
    },
    bioClass() {
      return (this.isHidden) ? 'accordion-profile__bio--transition' : '';
    },
    // enable js api for youtube video be able to pause.
    videoApi() {
      return `${this.video}?enablejsapi=1`;
    },
  },
  methods: {
    changeIcon() {
      this.pauseVideo();
      if (this.bio !== '') {
        this.isHidden = !this.isHidden;
      }
    },
    pauseVideo() {
      const iframes = document.querySelectorAll('iframe');
      Array.prototype.forEach.call(iframes, (iframe) => {
        iframe.contentWindow.postMessage(JSON.stringify({
          event: 'command',
          func: 'pauseVideo',
        }), '*');
      });
    },
  },
};
</script>
