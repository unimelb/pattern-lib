<template>
  <div class="photo-gallery-in-page">
    <div class="photo-gallery-in-page__slider">
      <div
        class="arrow-wrapper"
        role="button"
        tabindex="0"
        title="Previous (arrow left)"
        @click="move('prev')"
        @keydown.13="move('prev')"
      >
        <SvgIcon
          class="photo-gallery-in-page__chevron"
          name="chevron-left"
          width="30"
          height="30"/>
      </div>

      <div class="photo-gallery-in-page--container">
        <swipe
          ref="swipe"
          :default-index="selectedIndex"
          :show-indicators="false"
          :continuous="false"
          :auto="0"
          :changed="indexChanged"
        >
          <swipe-item
            v-for="(slide, index) in media"
            :key="index"
            class="photo-gallery-in-page__figure"
          >
            <img
              v-if="slide.type === 'image'"
              :src="slide.src"
              :alt="slide.title">
            <VideoEmbed
              v-if="slide.type === 'video'"
              :src="slide.src"/>
          </swipe-item>
        </swipe>
      </div>
      <div
        class="arrow-wrapper"
        tabindex="0"
        role="button"
        title="Next (arrow right)"
        @click="move('next')"
        @keydown.13="move('next')"
      >
        <SvgIcon
          class="photo-gallery-in-page__chevron"
          name="chevron-right"
          width="30"
          height="30"
        />
      </div>
    </div>
    <figure>
      <div class="photo-gallery-in-page__thumbnails">
        <div
          v-for="(item, index) in media"
          :key="item.id"
          :class="{ active: index === selectedIndex}"
          :aria-describedby="'caption' + selectedIndex"
          class="thumb"
          tabindex="0"
          role="button"
          @click="open(index)"
          @keydown.13="open(index)"
        >
          <img
            v-if="item.type === 'image'"
            :src="item.src"
            :alt="item.title">
          <div
            v-if="item.type === 'video'"
            class="embed--video">
            <div class="embed--cover"/>
            <VideoEmbed :src="item.src"/>
          </div>
        </div>
      </div>
      <div class="photo-gallery-in-page__media-count">{{ selectedIndex + 1 }} / {{ media.length }}</div>
      <figcaption
        :id="'caption' + selectedIndex"
        class="photo-gallery-in-page__title"
      >{{ selectedItem.title }}</figcaption>
      <div class="photo-gallery-in-page__description">{{ selectedItem.description }}</div>
    </figure>
  </div>
</template>

<script>
import VideoEmbed from '../embed/VideoEmbed.vue';
export default {
  components: { VideoEmbed },
  props: {
    media: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      selectedItem: this.media ? this.media[0] : {},
      selectedIndex: 0,
    };
  },
  methods: {
    open(index) {
      this.selectedItem = this.media[index];
      this.selectedIndex = index;
      this.$refs.swipe.goto(index);
    },
    move(direction) {
      const len = this.media.length;
      const current = this.selectedIndex;
      const directions = {
        prev: (current + len - 1) % len,
        next: (current + 1) % len,
      };
      const nextIndex = directions[direction];
      this.selectedItem = this.media[nextIndex];
      this.selectedIndex = nextIndex;
      this.$refs.swipe.goto(nextIndex);
    },
    indexChanged(index) {
      console.log(index);
      console.log(this);
    },
  },
};
</script>
