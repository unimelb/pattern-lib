<template>
  <div class="thumbnails">
    <ListingWrap>
      <ListItem
        v-vpshow
        v-for="(image, index) in images"
        :key="image.id"
        :cols="image.size || '1of1'"
      >
        <FigureWrap
          :caption="displayCaption && image.title"
          class="thumbnails__figure"
        >
          <img
            :src="image.src"
            :alt="image.title"
            tabindex="0"
            @click="callback(index)"
            @keydown.13="callback(index)"
          >
        </FigureWrap>
        <div
          v-if="displayCaption"
          class="thumbnails__description">
          {{ image.description }}
        </div>
      </ListItem>
    </ListingWrap>
  </div>
</template>

<script>
import Vue from 'vue';
import ListingWrap from '../listing/ListingWrap.vue';
import FigureWrap from '../figure/FigureWrap.vue';
import ListItem from '../listing/ListItem.vue';


Vue.directive('vpshow', {
  inViewport(el) {
    const rect = el.getBoundingClientRect();
    return !(rect.bottom < 0 || rect.right < 0
      || rect.left > window.innerWidth
      || rect.top > window.innerHeight);
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
  },
  props: {
    images: {
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
