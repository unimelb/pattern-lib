<template>
  <div class="card card--bdr card--showcase-profile">
    <!-- <div :style="{'background-image': `url(${thumb})`}" class="card__thumb"/> -->
    <img
      :src="thumb"
      :alt="title + ' image'"
      class="card__image">
    <div class="card__inner">
      <h6 class="card__title">{{ title }}</h6>
      <p class="card__sub-title">{{ subTitle }}</p>
      <div class="card__dash"/>
      <button
        class="card__button"
        @click="[(isHidden = !isHidden), buttonLabel]">
        {{ label }}
        <SvgIcon
          :name="iconName"
          aria-label="chevron"
          class="card__icon"
          width="10px"
          height="10px"
        />
      </button>
    </div>
    <transition name="slide-fade">
      <p
        v-show="!isHidden"
        class="card__bio">{{ bio }}</p>
    </transition>
  </div>
</template>

<script>
import SvgIcon from '../icons/SvgIcon.vue';

export default {
  name: 'Showcase',
  components: { SvgIcon },
  props: {
    thumb: {
      type: String,
      default: 'https://via.placeholder.com/800x630',
    },
    title: {
      type: String,
      default: '',
    },
    subTitle: {
      type: String,
      default: '',
    },
    bio: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      isHidden: true,
      label: 'Show bio',
      iconName: 'chevron-down',
    };
  },
  computed: {
    buttonLabel() {
      if (!this.isHidden) {
        this.setLabelHide();
        this.setIconUp();
      } else {
        this.setLabelShow();
        this.setIconDown();
      }
      return this.label;
    },
  },
  methods: {
    setLabelHide() {
      this.label = 'Hide bio';
    },
    setIconUp() {
      this.iconName = 'chevron-up';
    },
    setLabelShow() {
      this.label = 'Show bio';
    },
    setIconDown() {
      this.iconName = 'chevron-down';
    },
  },
};
</script>
