<template>
  <div class="sidebar">
    <div class="sidebar__header">
      <h3 class="sidebar__title">
        <SvgIcon
          :name="titleIcon"
          class="sidebar__title-icon"
          width="16px"
          height="16px" />
        {{ title }}
      </h3>
    </div>
    <div class="sidebar__inner">
      <ButtonIcon
        v-if="buttonLink"
        :href="buttonLink"
        class="btn--event"
        size="xsml"
        width="fullwidth"
        no-icon>
        {{ buttonText }}
      </ButtonIcon>
      <ul class="sidebar__list">
        <li
          v-for="(item, index) in items"
          :key="index"
          class="sidebar__list-item list-reset">
          <SvgIcon
            :name="item.icon"
            class="sidebar__list-icon"
            width="20px"
            height="20px" />
          <div>
            <h4 class="sidebar__list-title">
              {{ item.title }}
            </h4>
            <div
              v-for="(subTitle, subIndex) in item.subTitles"
              :key="subIndex">
              <div class="sidebar__list-sub-title">
                {{ subTitle.text }}
              </div>
              <a
                v-if="subTitle.email"
                :href="'mailto:' + subTitle.email"
                class="sidebar__list-email">{{ subTitle.email }}</a>
              <a
                v-if="subTitle.href"
                :href="subTitle.href"
                class="sidebar__list-link"
                target="_blank">{{ subTitle.link }}</a>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import SvgIcon from '../icons/SvgIcon.vue';

export default {
  components: {
    SvgIcon,
  },
  props: {
    title: {
      type: String,
      default: '',
    },
    titleIcon: {
      type: String,
      default: '',
    },
    buttonText: {
      type: String,
      default: '',
    },
    buttonLink: {
      type: String,
      default: '',
    },
    items: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
