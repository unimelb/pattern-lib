<template>
  <FocusWrapper
    :color="color"
    padded>
    <div class="in-page-navigation">
      <h2 class="title--md">{{ title }}:</h2>
      <hr class="line">
      <div class="container">
        <li
          v-for="(data, index) in sections"
          :key="index"
          class="list-reset">
          <a
            :href="data.id"
            class="link"
            @click="scroll"
          >
            {{ data.label }}
            <SvgIcon
              name="chevron-right"
              class="icon"/>
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
            label: element.innerText,
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
