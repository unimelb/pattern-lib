<template>
  <FocusWrapper>
    <div>
      <h2 class="title">{{ cardTitle }}</h2>
      <hr class="line">
      <div class="linkContainer">
        <li
          v-for="(link, index) in cardLinks"
          :key="index"
          class="removeBullet">
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
import FocusWrapper from '../../focusWrapper/FocusWrapper.vue';

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
  },
};
</script>

<style scoped>
@import "../../_vars.css";

.title {
  color: var(--col-font);
  font-family: var(--ff-normal);
  font-size: 18px;
  font-weight: 600;
  text-transform: uppercase;
}

.line {
  width: 40px;
  margin: 0;
  border: 1px solid var(--col-line);
}

.removeBullet {
  list-style-type: none;
}

.link {
  color: var(--col-font);
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
  fill: var(--col-font);
}

.linkContainer {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  margin-top: 23px;
  margin-bottom: 84px;
}

.linkContainer > * {
  flex: 0 50%;
}
</style>
