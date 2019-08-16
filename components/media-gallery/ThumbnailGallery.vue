<template>
  <div class="thumbnails">
    <div
      v-for="(item, index) in media"
      :key="item.id"
      :class="thumbnailColumnClass"
      class="thumbnails__container">
      <FigureWrap
        :caption="displayCaption && item.title"
        :class="{'thumbnails__item': true, 'thumbnails__item--prevent-click': !overlay}"
        tabindex="0"
      >
        <div
          :class="{'thumbnails__item--prevent-click': !overlay}"
          @click="overlay === true && callback(index)"
          @keydown.13="callback(index)">
          <img
            v-if="item.type === 'image'"
            :src="item.src"
            :alt="item.altText"
            class="thumbnails__image"
          >
          <div
            v-if="item.type === 'video'"
            class="thumbnails__video"
          >
            <VideoEmbed :src="item.src"/>
          </div>
        </div>
      </FigureWrap>
      <div
        v-if="displayCaption"
        class="thumbnails__description">{{ item.description }}</div>
    </div>
  </div>
</template>

<script>
import FigureWrap from '../figure/FigureWrap.vue';
import VideoEmbed from '../embed/VideoEmbed.vue';

export default {
  components: {
    FigureWrap,
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

      return `thumbnails__container--${columns}-col`;
    },
  },
};
</script>
