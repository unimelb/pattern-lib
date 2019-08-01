<template>
  <div class="sidebar">
    <h3 class="sidebar__title">
      <SvgIcon
        :name="titleIcon"
        class="sidebar__title--icon"
        width="16px"
        height="16px" />
      {{ title }}</h3>
    <ButtonIcon
      class="sidebar__button"
      size="xsml"
      no-icon>{{ buttonText }}</ButtonIcon>
    <ul class="sidebar-list">
      <li
        v-for="(item, index) in items"
        :key="index"
        class="sidebar-list__container-inner list-reset">
        <SvgIcon
          :name="item.icon"
          class="sidebar-list--icon"
          width="20px"
          height="20px" />
        <div>
          <h4 class="sidebar-list--title">
            {{ item.title }}</h4>
          <div
            v-for="(subTitle, index) in item.subTitles"
            :key="index">
            <div class="sidebar-list--sub-title">{{ subTitle.text }}</div>
            <a :href="'mailto:' + subTitle.email">{{ subTitle.email }}</a>
            <a
              v-if="subTitle.href"
              :href="subTitle.href"
              target="_blank">{{ subTitle.link }}</a>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
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
    items: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
