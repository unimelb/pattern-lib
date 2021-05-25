<template>
  <div
    class="mega-menu-alt-mobile"
    @click="handleClick"
    @keydown.esc="closeMenu">
    <div
      ref="inner"
      v-scroll-lock="value"
      class="mega-menu-alt-mobile__inner">
      <Trap :disabled="!value">
        <button
          class="mega-menu-alt-mobile__close"
          @click="$emit('close')">
          <svg
            focusable="false"
            role="presentation">
            <use xlink:href="#icon-close" />
          </svg>
          Close
        </button>
        <InlineSearch
          id="site-search-mobile"
          class="mega-menu-alt-mobile__search shim-mb1"
          name="query"
          label="Search the University of Melbourne"
          placeholder="Search the University"
          action="https://search.unimelb.edu.au/s/search.html"
          with-submit
          dark>
          <input
            type="hidden"
            name="collection"
            value="gs-meta">
        </InlineSearch>
        <nav
          v-if="primaryLinks.length"
          aria-label="Site">
          <ul class="mega-menu-alt-mobile__links list-reset">
            <li
              v-for="(link, index) in primaryLinks"
              :key="index">
              <a
                :href="link.href"
                class="link-reset">
                {{ link.text }}
              </a>
            </li>
          </ul>
        </nav>
        <nav
          v-if="secondaryLinks.length"
          aria-label="Quick links">
          <ul class="mega-menu-alt-mobile__links mega-menu-alt-mobile__links--secondary list-reset">
            <li
              v-for="(link, index) in secondaryLinks"
              :key="index">
              <a
                :href="link.href"
                class="link-reset">
                {{ link.text }}
              </a>
            </li>
          </ul>
        </nav>
      </Trap>
    </div>
  </div>
</template>

<script>
import Trap from 'vue-focus-lock';
import InlineSearch from 'components/forms/InlineSearch.vue';

export default {
  components: {
    Trap,
    InlineSearch,
  },
  props: {
    value: {
      type: Boolean,
      required: false,
      default: false,
    },
    primaryLinks: {
      type: Array,
      required: false,
      default() {
        return [];
      },
    },
    secondaryLinks: {
      type: Array,
      required: false,
      default() {
        return [];
      },
    },
  },
  watch: {
    value(val) {
      if (val) {
        this.$el.setAttribute('style', 'display: block;');
        window.requestAnimationFrame(() => {
          window.requestAnimationFrame(() => {
            this.$el.classList.add('is-open');
            document.body.classList.add('mobile-menu-is-open');

            // Focus on close button
            this.$el.querySelector('button').focus();
          });
        });
      } else {
        this.$el.classList.remove('is-open');
        document.body.classList.remove('mobile-menu-is-open');
        this.$refs.inner.addEventListener('transitionend', () => {
          if (this.value) {
            return;
          }
          this.$el.setAttribute('style', 'display: none;');
        }, { once: true });
      }
    },
  },
  methods: {
    handleClick(evt) {
      if (!this.$refs.inner.contains(evt.target)) {
        this.closeMenu();
      }
    },
    closeMenu() {
      this.$emit('input', false);
    },
  },
};
</script>
