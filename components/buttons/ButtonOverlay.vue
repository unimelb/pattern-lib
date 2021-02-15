<template>
  <div>
    <button
      :class="classes"
      :role="role"
      :tabindex="tabIndex"
      :aria-disabled="disabled ? 'true' : false"
      :disabled="disabled"
      @click="openVideo"
      @keydown.enter="openVideo">
      <span
        v-if="!noIcon"
        class="push-icon"
        :class="pushIconClasses">
        <slot v-if="!iconLeft" />
        <SvgIcon
          :name="icon"
          :class="iconClasses"
          class="push-icon__icon"
          width="15px"
          height="15px"
          aria-hidden="true" />
        <slot v-if="iconLeft" />
      </span>
      <slot v-if="noIcon" />
    </button>
    <div
      v-if="isVideoOpen"
      @keydown.esc="turnOverlayOff">
      <div
        class="video-overlay"
        @click="turnOverlayOff" />
      <VideoEmbed
        class="video-embed"
        :src="src" />


      <!-- <video
        poster=""
        autoplay>
        <source
          :src="src"
          type="video/webm">
        <source
          :src="src"
          type="video/mp4">
      </video> -->
    </div>
  </div>
</template>

<script>
import SvgIcon from '../icons/SvgIcon.vue';
import VideoEmbed from '../embed/VideoEmbed.vue';

import { KEYCODE_ESC } from '../../constants/keycodes';

export default {
  components: { SvgIcon, VideoEmbed },
  props: {
    icon: {
      type: String,
      default: 'chevron-right',
    },
    size: {
      type: String,
      default: '',
    },
    width: {
      type: String,
      default: '',
    },
    iconSize: {
      type: String,
      default: 'md',
      validator: (value) => ['md', 'lg'].includes(value),
    },
    inverted: {
      type: Boolean,
      default: false,
    },
    noIcon: {
      type: Boolean,
      default: false,
    },
    iconLeft: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    top: {
      type: Boolean,
      default: false,
    },
    role: {
      type: String,
      default: undefined,
    },
    tabIndex: {
      type: Number,
      default: undefined,
    },
    src: {
      type: String,
      default: 'https://www.youtube.com/embed/72QsokcsLhI',
    },
  },
  data() {
    return {
      isVideoOpen: false,
    };
  },
  computed: {
    classes() {
      return [
        'btn',
        {
          [`btn--${this.size}`]: ['sml', 'xsml'].includes(this.size),
          [`btn--${this.width}`]: ['wide', 'xwide', 'fullwidth'].includes(this.width),
          'btn--inverted': this.inverted,
          'btn--disabled': this.disabled,
        },
      ];
    },
    iconClasses() {
      return {
        'push-icon__icon--left': this.iconLeft,
        'push-icon__icon--lg': this.iconSize === 'lg',
      };
    },
    pushIconClasses() {
      return {
        'push-icon--top': this.top,
        'push-icon--left': this.iconLeft,
      };
    },
  },
  mounted() {
    window.addEventListener('keyup', this.keyBoardActions);
  },
  beforeDestroy() {
    window.removeEventListener('keyup', this.keyBoardActions);
  },
  methods: {
    openVideo() {
      this.isVideoOpen = !this.isVideoOpen;
      document.documentElement.classList.toggle('no-body-scroll');
      document.querySelector('.video-overlay .video-embed').style.display = 'block';
    },
    turnOverlayOff() {
      this.isVideoOpen = false;
      document.querySelector('.video-overlay .video-embed').style.display = 'none';
    },
    keyBoardActions(e) {
      // Only if component is in viewport.
      if (e.keyCode === KEYCODE_ESC) {
        this.isVideoOpen = false;
        this.turnOverlayOff();
      }
    },
  },
};
</script>
