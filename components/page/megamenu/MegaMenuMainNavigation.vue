<!-- eslint-disable -->
<template>
  <ul
    class="menu__section"
    role="menu">
    <li
      v-for="(rootitem, rootindex) in items"
      ref="rootitems"
      class="menu__item"
      :class="rootOrChildrenActive(rootitem) ? 'menu__item--active' : null"
      :key="`rootitem-${rootindex}`"
      :tabindex="$emit('is-selected', rootindex)"
      @mouseover="$emit('activate-desktop-menu', rootindex)"
      @mouseout="$emit('dismiss-desktop-menu')"
      @keydown="$emit('handle-key')"
    >
      <a
        :role="rootitem.items ? 'button' : 'menuitem'"
        :href="rootitem.href"
        :class="linkClasses(rootindex, rootitem)"
        @click="$emit('open-inner')"
        v-html="rootitem.title"
      />
      <div
        v-if="rootitem.items"
        ref="panels"
        class="inner">
       
        <div
          role="button"
          class="menu__back-btn"
          @click="$emit('close-inner')">Back</div>
       
        <div class="menu__aside">
          <a
            :href="rootitem.href"
            class="menu__nested-parent">{{ rootitem.title }}</a>
          <component
            v-if="rootitem.feature"
            :is="rootitem.feature.link ? 'a' : 'div'"
            :href="rootitem.feature.link"
            :style="rootitem.feature.img ? `background-image:url(${rootitem.feature.img})` : null"
            class="menu__campaign"
          >
            <p
              v-if="rootitem.feature.text || rootitem.feature.title"
              class="menu__campaign-text"
            >
              <strong
                v-if="rootitem.feature.title"
                class="menu__campaign-title"
              >{{ rootitem.feature.title }}</strong>
              <span
                v-if="rootitem.feature.text"
                v-html="rootitem.feature.text"/>
            </p>
            <span
              v-if="rootitem.feature.alt"
              class="screenreaders-only"
              v-html="rootitem.feature.alt"
            />
          </component>
        </div>
        <ul class="menu__section">
          <li
            v-for="(menuitem, menuindex) in rootitem.items"
            :key="`menuitem-${menuindex}`"
            class="menu__item"
          >
            <a
              :href="menuitem.href"
              tabindex="0"
              class="menu__link"
              role="menuitem"
              v-html="menuitem.title"
            />
          </li>
        </ul>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'MegaMenuMainNavigation',
  props: {
    items: {
      type: Array,
      required: true,
    },
    active: {
      type: [String, Boolean],
      default: false,
    },
  },
  methods: {
    rootOrChildrenActive(rootitem) {
      if (!this.active) return false;

      let displayActive = false;

      if (this.active === rootitem.href) displayActive = true;
      if (rootitem.items) {
        rootitem.items.forEach((item) => {
          if (item.href === this.active) displayActive = true;
        });
      }

      return displayActive;
    },

    linkClasses(rootindex, rootitem) {
      /* eslint-disable */
  
      if (rootindex === 0) {
        return 'menu__nested-parent';
      }
      if (rootitem.items) {
        return 'menu__link menu__link--nested';
      }
      return 'menu__link';
    },
  }
};
</script>
