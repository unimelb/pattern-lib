<template>
  <a
    :href="href"
    class="btn-owner card card--image card--bdr bg-inverted">
    <div
      v-if="thumb && thumb.length > 0"
      :style="{ backgroundImage: `url(${thumb})` }"
      class="card__thumb card__thumb--zoom"/>
    <div class="card__inner">
      <button-link
        class="btn--inverted btn--fullwidth"
        element="span">{{ title }}</button-link>
      <p><slot/></p>
    </div>
  </a>
</template>

<script>
import ButtonLink from '../buttons/stories/ButtonLink.vue';

export default {
  name: 'CardImage',
  components: {
    ButtonLink,
  },
  props: {
    thumb: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: 'Test title',
    },
    href: {
      type: String,
      default: '#',
    },
  },
};

</script>
