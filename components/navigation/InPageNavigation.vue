<template>
  <FocusWrapper
    :color="color"
    :size="size"
    padded>
    <div
      ref="inPageNavigation"
      class="in-page-navigation">
      <h2 class="in-page-navigation__title">
        {{ title }}:
      </h2>
      <hr class="in-page-navigation__line">
      <div class="in-page-navigation__container">
        <li
          v-for="(data, index) in sections"
          :key="index"
          class="in-page-navigation__position list-reset">
          <a
            :href="`#${data.id}`"
            class="in-page-navigation__link"
            @click="scrollOnClick">
            {{ data.label }}
            <SvgIcon
              name="chevron-right"
              class="in-page-navigation__icon" />
          </a>
        </li>
      </div>
      <div
        ref="dropdown"
        :class="classes"
        class="in-page-navigation__collapsed">
        <Dropdown
          :values="sections"
          :callback="scrollOnSelect"
          :selected-item="selectedItem.value"
          tabindex="0" />
      </div>
    </div>
  </FocusWrapper>
</template>

<script>
import smoothscroll from 'smoothscroll-polyfill';

import FocusWrapper from '../focus-wrapper/FocusWrapper.vue';
import Dropdown from '../dropdown/Dropdown.vue';
import SvgIcon from '../icons/SvgIcon.vue';
import { WIDTH_481 } from '../../helpers/viewports';

export default {
  components: { FocusWrapper, Dropdown, SvgIcon },
  props: {
    title: {
      type: String,
      default: '',
    },
    headingLevel: {
      type: String,
      required: true,
      validator: (value) => ['h1', 'h2', 'h3', 'h4', 'h5'].includes(value),
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
      size: 'medium',
    };
  },
  computed: {
    classes() {
      return {
        'in-page-navigation__collapsed--fixed': this.isFixed,
      };
    },
  },

  beforeMount() {
    // Initiate smooth scroll polyfill.
    if (typeof window !== 'undefined') {
      smoothscroll.polyfill();
    }
  },

  mounted() {
    this.getInPageData();

    window.addEventListener('scroll', this.checkNavigation);

    this.$nextTick(() => {
      window.addEventListener('resize', this.getWindowWidth);
      this.getWindowWidth();
    });
  },
  destroyed() {
    window.removeEventListener('scroll', this.checkNavigation);
    window.removeEventListener('resize', this.getWindowWidth);
  },
  methods: {
    getInPageData() {
      const headings = [].slice.call(
        document.querySelectorAll(`${this.headingLevel}`)
      );

      this.sections = headings
        .filter((heading) => {
          if (heading.id.includes('navigation')) {
            return true;
          }

          return false;
        })
        .map((heading) => {
          const element = {
            id: heading.id,
            label: heading.textContent,
            value: heading.id,
          };

          return element;
        });
    },
    checkNavigation() {
      this.selectedItem = this.autoSelectOnScroll();

      this.isFixed = this.isFixedBar();
    },
    isFixedBar() {
      const inPageNavOffset = this.$refs.inPageNavigation.getBoundingClientRect();
      const elementToChange = this.sections[0];

      if (this.sections.length) {
        return (
          document.querySelector(`#${elementToChange.id}`).getBoundingClientRect()
            .top < Math.abs(inPageNavOffset.top)
        );
      }

      return false;
    },
    scrollOnClick(e) {
      const scrollToID = e.target.getAttribute('href');
      const scrollToElem = document.querySelector(scrollToID);

      e.preventDefault();

      this.scrollTo(scrollToElem);
    },
    scrollOnSelect(e) {
      const scrollToID = e.target.value;
      const scrollToElem = document.querySelector(`#${scrollToID}`);

      this.scrollTo(scrollToElem);
    },
    scrollTo(scrollToElem) {
      const scrollOffset = this.$refs.dropdown.getBoundingClientRect().height;
      const scrollToPosition = scrollToElem.offsetTop - window.pageYOffset - scrollOffset;

      window.scrollBy({ top: scrollToPosition, left: 0, behavior: 'smooth' });
    },
    autoSelectOnScroll() {
      let selectedItem = false;

      this.sections.forEach((item) => {
        const elem = document.querySelector(`#${item.id}`);
        const offset = parseInt(elem.getBoundingClientRect().top, 10);
        const scrollOffset = this.$refs.dropdown.getBoundingClientRect().height; // Add one pixel so it triggers the change

        if (offset <= scrollOffset) {
          selectedItem = item;
        }
      });

      return selectedItem;
    },
    getWindowWidth() {
      this.windowWidth = document.documentElement.clientWidth;
      if (this.windowWidth < WIDTH_481) {
        this.size = 'small';
      } else {
        this.size = 'medium';
      }
    },
  },
};
</script>
