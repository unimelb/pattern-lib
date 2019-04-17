<template>
  <div
    :class="classes"
    class="navigation-container">
    <Dropdown
      :values="sections"
      :callback="scroll"
      :selected-item="selectedItem.value"
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
        'navigation-container__fixed': this.fixed,
      };
    },
  },
  mounted() {
    document.onreadystatechange = () => {
      if (document.readyState === 'complete') {
        this.getInPageData();
      }
    };
    window.addEventListener('scroll', () => {
      const { scrollY } = window;
      this.fixed = scrollY > 50;
      if (this.autoSelect) {
        this.autoSelectOnScroll();
      }
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
