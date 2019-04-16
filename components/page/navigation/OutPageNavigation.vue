<template>
  <FocusWrapper
    :color="color"
    padded>
    <div>
      <h2 class="title">{{ cardTitle }}</h2>
      <hr class="line">
      <div class="container">
        <li
          v-for="(link, index) in cardLinks"
          :key="index"
          class="list-reset">
          <a
            :href="link.url"
            class="link">
            {{ link.title }}
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

<style scoped>
@import "../../_vars.css";

.title {
  font-family: var(--ff-normal);
  font-size: 18px;
  font-weight: 600;
  text-transform: uppercase;
}

.line {
  width: 40px;
  margin: 0;
  border: 1px solid;
}

.list-reset {
  list-style-type: none;
}

.link {
  font-family: var(--ff-normal);
  font-size: 16px;
  font-weight: normal;
  letter-spacing: 0;
}

.icon {
  display: inline;
  width: 8px;
  height: 8px;
  margin-left: 6px;
}

.container {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  margin-top: 23px;
  margin-bottom: 84px;
}

.container > * {
  flex: 0 50%;
}
</style>
