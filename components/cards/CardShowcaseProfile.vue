<template>
  <div class="card--showcase-profile card--bdr card__container">
    <div class="card__container-inner">
      <div class="card__image">
        <img
          :src="thumb"
          :alt="title + 'image'">
      </div>
      <div class="card__details">
        <h6 class="card__title">{{ title }}</h6>
        <p class="card_sub-title">{{ subTitle }}</p>
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
    </div>
    <transition name="fade">
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
      default: 'https://via.placeholder.com/192x136',
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
      if (this.isHidden === false) {
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
