<template>
  <div class="thumbnails">
    <div
      :class="thumbnailColumnClass"
      class="thumbnails__container">
      <div
        v-for="(item, index) in items"
        :key="item.id"
        :class="thumbnailClass"
        class="thumbnails__item">

        <div
          :class="thumbnailOpenClass"
          tabindex="0"
          @click="useOverlay && callback(index)"
          @keydown.13="callback(index)">
          <div
            v-if="item.type === 'image'"
            :aria-label="item.altText"
            :style="{ backgroundImage: `url(${item.src})` }"
            class="thumbnails__image" />

          <div
            v-if="item.type === 'video'"
            class="thumbnails__video"
          >
            <VideoEmbed
              :src="item.src"
              class="thumbnails__video-embed" />
          </div>
        </div>

        <div v-if="displayCaption">
          <div class="thumbnails__caption">{{ item.title }}</div>
          <p class="thumbnails__description">{{ item.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VideoEmbed from '../embed/VideoEmbed.vue';

export default {
  components: {
    VideoEmbed,
  },
  props: {
    columns: {
      type: String,
      default: '1',
    },
    items: {
      type: Array,
      default: () => [{}],
    },
    callback: {
      type: Function,
      default: () => {},
    },
    displayCaption: {
      type: Boolean,
      default: false,
    },
    useOverlay: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    thumbnailColumnClass() {
      const { columns } = this;

      return {
        [`thumbnails__container--${columns}-col`]: true,
      };
    },
    thumbnailClass() {
      return {
        'thumbnails__item--no-caption': !this.displayCaption,
      };
    },
    thumbnailOpenClass() {
      return {
        'thumbnails__open-overlay': this.useOverlay,
      };
    },
  },
};
</script>
