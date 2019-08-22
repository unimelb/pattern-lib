<template>
  <div class="thumbnails">
    <div class="thumbnails__container">
      <div
        v-for="(item, index) in media"
        :key="item.id"
        :class="thumbnailColumnClass"
        class="thumbnails__col">
        <figure
          :caption="displayCaption && item.title"
          :class="{'thumbnails__item': true, 'thumbnails__item--prevent-click': !overlay}"
          tabindex="0"
          @click="overlay === true && callback(index)"
          @keydown.13="callback(index)"
        >
          <img
            v-if="item.type === 'image'"
            :src="item.src"
            :alt="item.altText"
            :class="{'thumbnails__image--with-caption': displayCaption}"
            class="thumbnails__image"
          >
          <div
            v-if="item.type === 'video'"
            :class="{'thumbnails__video--with-caption': displayCaption}"
            class="thumbnails__video"
          >
            <VideoEmbed
              :src="item.src"
              class="thumbnails__video-embed" />
          </div>
          <figcaption v-if="displayCaption">
            <div class="thumbnails__caption">{{ item.title }}</div>
            <p class="thumbnails__description">{{ item.description }}</p>
          </figcaption>
        </figure>
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
    media: {
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
    overlay: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    thumbnailColumnClass() {
      const { columns } = this;

      return {
        [`thumbnails__col--${columns}-col`]: true,
        'thumbnails__col--no-caption': !this.displayCaption,
      };
    },
  },
};
</script>
