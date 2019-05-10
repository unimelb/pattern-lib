<template>
  <div>
    <FocusWrapper
      :color="color"
      padded>
      <div class="in-page-navigation">
        <h2 class="in-page-navigation__title">{{ title }}:</h2>
        <hr class="in-page-navigation__line">
        <div class="in-page-navigation__container">
          <li
            v-for="(data, index) in sections"
            :key="index"
            class="in-page-navigation__position list-reset">
            <a
              :href="data.id"
              class="in-page-navigation__link"
              @click="scroll"
            >
              {{ data.label }}
              <SvgIcon
                name="chevron-right"
                class="in-page-navigation__icon"/>
            </a>
          </li>
        </div>
        <navigation-collapsed :heading-level="headingLevel"/>
      </div>
    </FocusWrapper>
  </div>
</template>

<script>
import FocusWrapper from '../../focus-wrapper/FocusWrapper.vue';
import NavigationCollapsed from './NavigationCollapsed.vue';

export default {
  components: { FocusWrapper, NavigationCollapsed },
  props: {
    title: {
      type: String,
      default: '',
    },
    headingLevel: {
      type: String,
      required: true,
      validator: value => ['h1', 'h2', 'h3', 'h4', 'h5'].indexOf(value) > -1,
    },
    color: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      sections: [],
    };
  },
  mounted() {
    window.addEventListener('load', () => {
      this.getInPageData();
    });
  },
  methods: {
    getInPageData() {
      const pageNav = [];
      document.querySelectorAll(`${this.headingLevel}`).forEach((element) => {
        if (element.id) {
          pageNav.push({
            id: `${element.id}`,
            label: element.textContent,
          });
        }

        this.sections = pageNav;
      });
    },
    scroll(e) {
      e.preventDefault();
      const scrollToID = e.target.getAttribute('href');
      const scrollToElem = document.getElementById(scrollToID);
      const count = scrollToElem.offsetTop - window.pageYOffset - 50;
      window.scrollBy({ top: count, left: 0, behavior: 'smooth' });
    },
  },
};
</script>
