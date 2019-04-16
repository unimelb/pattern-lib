<template>
  <div class="thumbnails">
    <ListingWrap>
      <ListItem
        v-vpshow
        v-for="(item, index) in media"
        :key="item.id"
        :cols="item.size || '1of1'"
      >
        <FigureWrap
          :caption="displayCaption && item.title"
          class="thumbnails__figure"
          tabindex="0"
        >
          <div
            class="thumbnails__figure--item"
            @click="callback(index)"
            @keydown.13="callback(index)">
            <img
              v-if="item.type === 'image'"
              :src="item.src"
              :alt="item.title"
            >
            <div
              v-if="item.type === 'video'"
              class="embed--video"
            >
              <div class="embed--cover"/>
              <VideoEmbed :src="item.src"/>
            </div>
          </div>
        </FigureWrap>
        <div
          v-if="displayCaption"
          class="thumbnails__description">{{ item.description }}</div>
      </ListItem>
    </ListingWrap>
  </div>
</template>

<script>
import Vue from 'vue';
import ListingWrap from '../listing/ListingWrap.vue';
import FigureWrap from '../figure/FigureWrap.vue';
import ListItem from '../listing/ListItem.vue';
import VideoEmbed from '../embed/VideoEmbed.vue';

Vue.directive('vpshow', {
  inViewport(el) {
    const rect = el.getBoundingClientRect();
    return !(
      rect.bottom < 0
      || rect.right < 0
      || rect.left > window.innerWidth
      || rect.top > window.innerHeight
    );
  },

  bind(el, binding) {
    el.classList.add('invisible');
    el.$onScroll = () => {
      if (binding.def.inViewport(el)) {
        el.classList.add('anim-reveal');
        el.classList.remove('invisible');
        binding.def.unbind(el, binding);
      }
    };
    document.addEventListener('scroll', el.$onScroll);
  },

  inserted(el) {
    el.$onScroll();
  },

  unbind(el) {
    document.removeEventListener('scroll', el.$onScroll);
    delete el.$onScroll;
  },
});

export default {
  components: {
    ListingWrap,
    ListItem,
    FigureWrap,
    VideoEmbed,
  },
  props: {
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
  },
};
</script>
