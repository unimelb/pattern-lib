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
          v-for="(image, index) in images"
          :key="image.id"
          :class="{ active: index === selectedIndex}"
          :aria-describedby="'caption' + selectedIndex"
          class="thumb"
          tabindex="0"
          role="button"
          @click="open(index)"
          @keydown.13="open(index)"
        >
          <img
            v-if="image.type === 'image'"
            :src="image.src"
            :alt="image.title">
          <div
            v-if="image.type === 'video'"
            class="embed--video">
            <div class="embed--cover"/>
            <VideoEmbed :src="image.src"/>
          </div>
        </div>
      </div>
      <div class="photo-gallery-in-page__images-count">{{ selectedIndex + 1 }} / {{ images.length }}</div>
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
    images: {
      type: Array,
      default: () => [{}],
    },
  },
  data() {
    return {
      selectedItem: this.images ? this.images[0] : {},
      selectedIndex: 0,
    };
  },
  methods: {
    open(index) {
      this.selectedItem = this.images[index];
      this.selectedIndex = index;
    },
    move(direction) {
      const len = this.images.length;
      const current = this.selectedIndex;
      const directions = {
        prev: (current + len - 1) % len,
        next: (current + 1) % len,
      };
      const nextIndex = directions[direction];
      this.selectedItem = this.images[nextIndex];
      this.selectedIndex = nextIndex;
    },
  },
};
</script>
