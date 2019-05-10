<template>
  <FocusWrapper
    :color="color"
    padded>
    <div class="in-page-navigation">
      <h2 class="in-page-navigation__title">{{ cardTitle }}</h2>
      <hr class="in-page-navigation__line">
      <div class="in-page-navigation__container">
        <li
          v-for="(link, index) in cardLinks"
          :key="index"
          class="in-page-navigation__position list-reset"
        >
          <a
            :href="link.url"
            class="in-page-navigation__link">
            {{ link.title }}
            <SvgIcon
              name="chevron-right"
              class="in-page-navigation__icon"/>
          </a>
        </li>
      </div>
    </div>
  </FocusWrapper>
</template>

<script>
import FocusWrapper from '../../focus-wrapper/FocusWrapper.vue';

export default {
  components: { FocusWrapper },
  props: {
    cardTitle: {
      type: String,
      default: '',
    },
    cardLinks: {
      type: Array,
      default: () => [],
    },
    color: {
      type: String,
      default: '',
    },
  },
};
</script>
