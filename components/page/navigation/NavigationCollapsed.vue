<template>
  <div class="navigation-container">
    <Dropdown :values="getInPageData"/>
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
    },
  },
  computed: {
    getInPageData() {
      const pageNav = [];
      document.querySelectorAll(`${this.headingLevel}`).forEach((element) => {
        if (element.id) {
          pageNav.push({
            id: `#${element.id}`,
            label: element.innerText,
          });
        }
      });
      return pageNav;
    },
  },
};
</script>

<style scoped>
@import "../../_vars.css";

.navigation-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  background-color: var(--col-background-primary-white);
}
</style>
