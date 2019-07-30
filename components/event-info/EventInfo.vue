<template>
  <div class="event-info">
    <h3 class="event-info__title">
      <SvgIcon
        :name="titleIcon"
        class="event-info__title--icon"
        width="16px"
        height="16px" />
      {{ title }}</h3>
    <ButtonIcon
      class="event-info__button"
      size="sml"
      no-icon>{{ buttonText }}</ButtonIcon>
    <ul class="event-info-list">
      <li
        v-for="(item, index) in items"
        :key="index"
        class="event-info-list__container-inner list-reset">
        <SvgIcon
          :name="item.icon"
          class="event-info-list--icon"
          width="20px"
          height="20px" />
        <div>
          <h4 class="event-info-list--title">
            {{ item.title }}</h4>
          <div class="event-info-list--sub-title">{{ item.subtitle1 }}</div>
          <div class="event-info-list--sub-title">{{ item.subtitle2 }}</div>
          <div class="event-info-list--sub-title">{{ item.subtitle3 }}</div>
          <div class="event-info-list--sub-title">{{ item.subtitle4 }}</div>
          <div class="event-info-list--sub-title">{{ item.subtitle5 }}</div>
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
