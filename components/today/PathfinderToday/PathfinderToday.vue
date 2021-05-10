<template>
  <div
    :class="{
      'pathfinder-today': true,
      'pathfinder-today--dark': dark,
    }">
    <div class="max">
      <slot name="before" />
      <ul class="pathfinder-today__list grid grid--lg">
        <li
          v-for="(item, index) in items"
          :key="index"
          class="pathfinder-today__list-item cell cell--lg cell--tab-1of2 cell--wide-1of4">
          <a
            :id="item.id"
            class="pathfinder-today__link"
            :href="item.href">
            <!-- eslint-disable vue/no-v-html -->
            <span
              class="pathfinder-today__link-title heading-sm heading-sm--alt"
              v-html="item.title" />
            <!-- eslint-enable vue/no-v-html -->
            <span class="pathfinder-today__link-description label-s">{{ item.description }}</span>
            <span class="pathfinder-today__link-icon">
              <SvgIcon
                name="arrow-right" />
            </span>
          </a>
        </li>
      </ul>
      <slot name="after" />
    </div>
  </div>
</template>

<script>
import SvgIcon from '../../icons/SvgIcon.vue';

export default {
  components: {
    SvgIcon,
  },
  props: {
    items: {
      type: Array,
      required: true,
      default() {
        return [];
      },
    },
    inline: {
      type: Boolean,
      required: false,
      default: false,
    },
    dark: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
};
</script>
