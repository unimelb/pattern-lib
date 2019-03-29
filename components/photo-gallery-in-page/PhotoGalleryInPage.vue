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
        <figure class="photo-gallery-in-page__figure">
          <img
            v-if="selectedItem.type === 'image'"
            :src="selectedItem.src"
            :alt="selectedItem.title"
          >
          <VideoEmbed
            v-if="selectedItem.type === 'video'"
            :src="selectedItem.src"/>
        </figure>
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
    <figure class="photo-gallery-in-page__figure-thumbnails">
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
      default: () => [{}],
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
    },
  },
};
</script>
