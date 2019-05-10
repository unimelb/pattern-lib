<template>
  <div
    :class="classes"
    class="in-page-navigation__collapsed">
    <Dropdown
      :values="sections"
      :callback="scroll"
      :selected-item="selectedItem.value"
      tabindex="0"
    />
  </div>
</template>

<script>
import Dropdown from '../../dropdown/Dropdown.vue';

export default {
  components: { Dropdown },
  props: {
    headingLevel: {
      type: String,
      required: true,
      validator: value => ['h1', 'h2', 'h3', 'h4', 'h5'].indexOf(value) > -1,
    },
  },
  data() {
    return {
      sections: [],
      fixed: false,
      selectedItem: false,
      autoSelect: true,
    };
  },
  computed: {
    classes() {
      return {
        'in-page-navigation__collapsed--fixed': this.fixed,
      };
    },
  },
  mounted() {
    window.addEventListener('load', () => {
      this.getInPageData();
    });
    window.addEventListener('scroll', () => {
      const { scrollY } = window;
      if (this.autoSelect) {
        this.autoSelectOnScroll();
      }
      const inPageNav = document.querySelector('.in-page-navigation');
      const inPageNavOffset = inPageNav.getBoundingClientRect();
      this.fixed = (window.innerHeight - inPageNavOffset.height + 50) + inPageNavOffset.top < scrollY;
    });
  },
  methods: {
    getInPageData() {
      const pageNav = [];
      document.querySelectorAll(this.headingLevel).forEach((element) => {
        if (element.id) {
          pageNav.push({
            value: element.id,
            label: element.innerText,
          });
        }

        this.sections = pageNav;
      });
    },
    scroll(e) {
      this.autoSelect = false;
      const scrollToID = e.target.value;
      const scrollToElem = document.getElementById(scrollToID);
      const count = scrollToElem.offsetTop - window.pageYOffset - 50;
      window.scrollBy({ top: count, left: 0, behavior: 'smooth' });
      this.autoSelect = true;
    },
    autoSelectOnScroll() {
      let first = false;
      this.sections.forEach((item) => {
        if (first) {
          return;
        }
        const elem = document.getElementById(item.value);
        const offset = elem.getBoundingClientRect();
        if (offset.top >= 0 && first === false) {
          this.selectedItem = item;
          first = true;
        }
      });
    },
  },
};
</script>
