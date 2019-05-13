<template>
  <FocusWrapper
    :color="color"
    padded>
    <div class="in-page-navigation">
      <h2 class="in-page-navigation__title">{{ title }}:</h2>
      <hr class="in-page-navigation__line">
      <div class="in-page-navigation__container">
        <li
          v-for="(data, index) in getInPageData"
          :key="index"
          class="in-page-navigation__position list-reset"
        >
          <a
            :href="data.id"
            class="in-page-navigation__link">
            {{ data.label }}
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
    title: {
      type: String,
      default: '',
    },
    headingLevel: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      default: '',
    },
  },
  computed: {
    getInPageData() {
      const pageNav = [];
      document.querySelectorAll(`${this.headingLevel}`).forEach((element) => {
        if (element.id) {
          pageNav.push({
            id: `#${element.id}`,
            label: element.textContent,
          });
        }
      });
      return pageNav;
    },
  },
};
</script>
