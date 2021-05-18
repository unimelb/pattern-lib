<template>
  <component
    :is="listType"
    :class="{
      'quick-links-alt': true,
      'quick-links-alt--search-results': searchQuery,
      'quick-links-alt--full-width': fullWidth,
      'quick-links-alt--no-inset': noInset,
      'quick-links-alt--border-bottom': borderBottom,
    }">
    <li
      v-for="(item, index) in items"
      :key="index">
      <a
        :id="item.id"
        :class="{
          'quick-links-alt__link': true,
          'quick-links-alt__link--btn': buttons,
        }"
        :href="item.href"
        :aria-controls="item.ariaControls"
        :aria-label="item.ariaLabel"
        :role="item.action ? 'button' : null"
        :data-preview="item.preview"
        @click="$evt => item.action ? handleClick($evt, item.action) : null">
        <span class="heading-sm heading-sm--link quick-links-alt__link-title">
          <template v-if="!searchQuery">{{ item.title }}</template>
          <!-- eslint-disable vue/no-v-html -->
          <span
            v-else
            v-html="textHighlight(item.title, searchQuery)" />
          <!-- eslint-enable vue/no-v-html -->
        </span>
        <span
          :class="{
            'quick-links-alt__link-icon': true,
            'quick-links-alt__link-icon--btn': buttons }">
          <SvgIcon
            :name="buttons ? 'chevron-right' : 'arrow-right'"
            aria-hidden="true"
            role="presentation" />
        </span>
      </a>
    </li>
  </component>
</template>

<script>
import SvgIcon from 'components/icons/SvgIcon.vue';
import textHighlight from '../../utils/textHighlight';

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
    listType: {
      type: String,
      required: false,
      default: 'ul',
    },
    searchQuery: {
      type: String,
      required: false,
      default: '',
    },
    fullWidth: {
      type: Boolean,
      required: false,
      default: false,
    },
    noInset: {
      type: Boolean,
      required: false,
      default: false,
    },
    borderBottom: {
      type: Boolean,
      required: false,
      default: false,
    },
    buttons: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  data() {
    return {
      textHighlight,
    };
  },
  methods: {
    handleClick(evt, callback) {
      evt.preventDefault();

      callback();
    },
  },
};
</script>
