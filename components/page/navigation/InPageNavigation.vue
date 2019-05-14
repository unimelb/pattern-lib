<template>
  <FocusWrapper
    :color="color"
    padded>
    <div
      ref="inPageNavigation"
      class="in-page-navigation">
      <h2 class="in-page-navigation__title">{{ title }}:</h2>
      <hr class="in-page-navigation__line">
      <div class="in-page-navigation__container">
        <li
          v-for="(data, index) in sections"
          :key="index"
          class="in-page-navigation__position list-reset"
        >
          <a
            :href="data.id"
            class="in-page-navigation__link"
            @click="scrollOnClick">
            {{ data.label }}
            <SvgIcon
              name="chevron-right"
              class="in-page-navigation__icon"/>
          </a>
        </li>
      </div>
      <div
        :class="classes"
        class="in-page-navigation__collapsed">
        <Dropdown
          :values="sections"
          :callback="scrollOnSelect"
          :selected-item="selectedItem.value"
          tabindex="0"
        />
      </div>
    </div>
  </FocusWrapper>
</template>

<script>
import FocusWrapper from '../../focus-wrapper/FocusWrapper.vue';
import Dropdown from '../../dropdown/Dropdown.vue';

export default {
  components: { FocusWrapper, Dropdown },
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
      isFixed: false,
      selectedItem: false,
      autoSelect: true,
      scrollOffset: 50,
    };
  },
  computed: {
    classes() {
      return {
        'in-page-navigation__collapsed--fixed': this.isFixed,
      };
    },
  },
  mounted() {
    this.getInPageData();

    window.addEventListener('scroll', this.checkNavigation);
  },
  destroyed() {
    window.removeEventListener('scroll', this.checkNavigation);
  },
  methods: {
    getInPageData() {
      const pageNav = [];

      Array.prototype.slice
        .apply(document.querySelectorAll(`${this.headingLevel}`))
        .forEach((element) => {
          if (element.id.includes('navigation')) {
            pageNav.push({
              id: element.id,
              label: element.textContent,
              value: element.id,
            });
          }

          this.sections = pageNav;
        });
    },
    checkNavigation() {
      this.selectedItem = this.autoSelectOnScroll();

      this.isFixed = this.isFixedBar();
    },
    isFixedBar() {
      const inPageNavOffset = this.$refs.inPageNavigation.getBoundingClientRect();
      const elementToChange = this.sections[0];

      if (this.sections.length >= 1) {
        return (
          document.getElementById(elementToChange.id).getBoundingClientRect()
            .top < Math.abs(inPageNavOffset.top)
        );
      }

      return false;
    },
    scrollOnClick(e) {
      const scrollToID = e.target.getAttribute('href');
      const scrollToElem = document.getElementById(scrollToID);

      e.preventDefault();

      this.scrollTo(scrollToElem);
    },
    scrollOnSelect(e) {
      const scrollToID = e.target.value;
      const scrollToElem = document.getElementById(scrollToID);

      this.scrollTo(scrollToElem);
    },
    scrollTo(scrollToElem) {
      const count = scrollToElem.offsetTop - window.pageYOffset - this.scrollOffset;

      window.scrollBy({ top: count, left: 0, behavior: 'smooth' });
    },
    autoSelectOnScroll() {
      let selectedItem = false;

      this.sections.forEach((item) => {
        const elem = document.getElementById(item.id);
        const offset = elem.getBoundingClientRect();

        if (offset.top < this.scrollOffset) {
          selectedItem = item;
        }
      });

      return selectedItem;
    },
  },
};
</script>
