<template>
  <div :class="classes">
    <picture
      v-if="img"
      class="campaign-banner-alt__img">
      <template v-if="img.sizes && img.sizes.length">
        <source
          v-for="(s, index) in img.sizes"
          :key="index"
          :media="`(max-width: ${s.maxWidth}px)`"
          :srcset="s.srcset">
        <img
          :src="img.src"
          :alt="img.alt || ''">
      </template>
    </picture>
    <div class="max campaign-banner-alt__inner">
      <div class="campaign-banner-alt__content">
        <h1
          :class="{
            'campaign-banner-alt__title': true,
            'heading-xl': !size,
            'heading-xxl': size === 'lg',
          }">
          <a
            v-if="tag"
            :href="tag.href"
            class="campaign-banner-alt__title-tag label-sm"
            :class="{ [`campaign-banner-alt__title-tag--${tag.color}`]: tag.color }">
            {{ tag.text }}
          </a>
          {{ title }}
        </h1>
        <p
          v-if="subHeading"
          class="heading-sm">
          {{ subHeading }}
        </p>
        <ul
          v-if="links && links.length"
          class="campaign-banner-alt__links list-reset">
          <li
            v-for="(link, i) in links"
            :key="i"
            class="campaign-banner-alt__links-item">
            <ButtonIcon
              v-if="link.href"
              :href="link.href"
              class="btn--text heading-sm heading-sm--link campaign-banner-alt__links-link">
              {{ link.text }}
            </ButtonIcon>
          </li>
        </ul>
        <ButtonIcon
          v-else-if="cta"
          :href="cta.href"
          :icon="cta.icon || 'chevron-right'"
          class="btn--secondary campaign-banner-alt__cta"
          :aria-label="`${title} - ${cta.text}`">
          {{ cta.text }}
        </ButtonIcon>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonIcon from 'components/buttons/ButtonIcon.vue';

export default {
  components: {
    ButtonIcon,
  },
  props: {
    title: {
      type: String,
      required: true,
      default: '',
    },
    subHeading: {
      type: String,
      required: true,
      default: '',
    },
    tag: {
      type: Object,
      required: false,
      default() {
        return null;
      },
    },
    img: {
      type: Object,
      required: false,
      default() {
        return null;
      },
    },
    cta: {
      type: Object,
      required: false,
      default() {
        return null;
      },
    },
    links: {
      type: Array,
      required: false,
      default() {
        return [];
      },
    },
    size: {
      type: String,
      required: false,
      default: '',
      validator(val) {
        return val ? (['lg'].includes(val)) : true;
      },
    },
  },
  computed: {
    classes() {
      return {
        'campaign-banner-alt': true,
        'bg-inverted-darker': true,
        'campaign-banner-alt--lg': this.size === 'lg',
      };
    },
  },
};
</script>
