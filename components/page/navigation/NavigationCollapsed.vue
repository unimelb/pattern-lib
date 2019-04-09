<template>
  <div
    :class="classes"
    class="navigation-container">
    <Dropdown
      :values="sections"
      :callback="scroll"/>
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
      const scrollToID = e.target.value;
      const scrollToElem = document.getElementById(scrollToID);
      scrollToElem.scrollIntoView({ block: 'center', behavior: 'smooth' });
    },
  },
};
</script>
