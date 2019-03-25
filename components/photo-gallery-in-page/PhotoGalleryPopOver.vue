<template>
  <div>
    <div :class="classes">
      <div class="photo-gallery-pop-over__images-count">
        {{ selectedIndex + 1 }} / {{ images.length }}
        <div
          class="photo-gallery-pop-over__close"
          tabindex="0"
          title="Close (Esc)"
          @click="openStateToggle()"
          @keydown.13="openStateToggle()"
        >
          <SvgIcon name="close" width="32" height="32"/>
        </div>
      </div>
      <div class="photo-gallery-pop-over__slider">
        <div
          class="arrow-wrapper"
          role="button"
          tabindex="0"
          title="Previous (arrow left)"
          @click="move('prev')"
          @keydown.13="move('prev')"
        >
          <SvgIcon
            class="photo-gallery-pop-over__chevron"
            name="chevron-left"
            width="30"
            height="30"
          />
        </div>

        <div class="photo-gallery-pop-over--container">
          <figure>
            <img :src="selectedItem.src" :alt="selectedItem.title">
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
            class="photo-gallery-pop-over__chevron"
            name="chevron-right"
            width="30"
            height="30"
          />
        </div>
      </div>
      <figure>
        <div class="photo-gallery-pop-over__thumbnails">
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
            <img :src="image.src" :alt="image.title">
          </div>
        </div>
        <figcaption
          :id="'caption' + selectedIndex"
          class="photo-gallery-pop-over__title"
        >{{ selectedItem.title }}</figcaption>
        <div class="photo-gallery-pop-over__description">{{ selectedItem.description }}</div>
      </figure>
    </div>
    <Thumbnails :images="images" :callback="openThumb" :display-caption="displayCaption"/>
  </div>
</template>

<script>
import Thumbnails from "./Thumbnails";

export default {
  components: { Thumbnails },
  props: {
    images: {
      type: Array,
      default: () => [{}]
    },
    displayCaption: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      selectedItem: this.images ? this.images[0] : {},
      selectedIndex: 0,
      openState: false
    };
  },
  computed: {
    classes() {
      return {
        "photo-gallery-pop-over": true,
        "photo-gallery-pop-over__open": this.openState
      };
    }
  },
  created() {
    window.addEventListener("keyup", this.keyBoardActions);
  },
  methods: {
    open(index) {
      this.selectedItem = this.images[index];
      this.selectedIndex = index;
    },
    openThumb(index) {
      this.open(index);
      this.openStateToggle();
    },
    openStateToggle() {
      this.openState = !this.openState;
    },
    move(direction) {
      const len = this.images.length;
      const current = this.selectedIndex;
      const directions = {
        prev: (current + len - 1) % len,
        next: (current + 1) % len
      };
      const nextIndex = directions[direction];
      this.selectedItem = this.images[nextIndex];
      this.selectedIndex = nextIndex;
    },
    keyBoardActions(e) {
      if (e.keyCode === 37) {
        this.move("prev");
      }
      if (e.keyCode === 39) {
        this.move("next");
      }
      if (e.keyCode === 27) {
        this.openState = false;
      }
    }
  }
};
</script>
