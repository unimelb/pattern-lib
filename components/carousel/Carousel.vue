<template>
  <div class="carousel">
    <div
      v-if="stories.length"
      class="carousel--slider"
    >
      <!--      @slide="slide"-->
      <slider
        ref="slider"
        :options="options"
      >
        <slideritem
          v-for="(slide, index) in stories"
          :key="index"
        >
          <img
            :src="slide.src"
            :alt="slide.altText"
          >
        </slideritem>
      </slider>
    </div>
  </div>
</template>

<script>
import { slider, slideritem } from 'vue-concise-slider';
import sample from './sample.json';

export default {
  components: {
    slider,
    slideritem,
  },
  props: {
    stories: {
      type: Array,
      default: sample,
    },
  },
  data() {
    return {
      selectedItem: this.stories ? this.stories[0] : {},
      selectedIndex: 0,
      openState: false,
      options: {
        currentPage: 0,
        pagination: false,
        thresholdDistance: 100, // Sliding distance threshold
        thresholdTime: 300, // Sliding time threshold decision
        grabCursor: true, // Scratch style
        speed: 300, // Sliding speed
        // timingFunction: 'ease', // Sliding mode
        // loop: false, // Infinite loop
        // autoplay: 0 // Auto play[ms]
      },
    };
  },
};
</script>
