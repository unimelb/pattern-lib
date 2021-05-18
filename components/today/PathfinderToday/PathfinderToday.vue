<template>
  <div
    :class="{
      'pathfinder-today': true,
      'pathfinder-today--dark': dark,
    }">
    <div class="max">
      <slot name="before" />
      <div role="navigation">
        <ul
          class="pathfinder-today__list grid grid--lg">
          <li
            v-for="(item, index) in items"
            :key="index"
            class="pathfinder-today__list-item cell cell--lg cell--tab-1of2 cell--wide-1of4">
            <div
              class="pathfinder-today__link">
              <a
                :id="item.id"
                :href="item.href">
                <span
                  class="pathfinder-today__link-title heading-sm heading-sm--link">{{ item.title }}</span>
                <span class="pathfinder-today__link-icon">
                  <SvgIcon
                    name="arrow-right"
                    aria-hidden="true" />
                </span>
              </a>
              <span class="pathfinder-today__link-description label-s">{{
                item.description
              }}</span>
            </div>
          </li>
        </ul>
      </div>
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
