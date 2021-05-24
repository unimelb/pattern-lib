<template>
  <div class="card-flat">
    <h3 class="heading-sm shim-mb067">
      {{ title }}
    </h3>
    <p
      v-if="description"
      class="card-flat__description">
      {{ description }}
    </p>
    <div
      v-if="cta"
      class="shim-mb1">
      <ButtonIcon
        :href="cta.href"
        class="btn--text">
        {{ cta.text }}
      </ButtonIcon>
    </div>
    <div
      v-if="img"
      class="card-flat__img">
      <client-only>
        <progressive-img
          :src="img.src"
          :alt="img.alt || ''"
          :aspect-ratio="0.6"
          class="card-flat__img-inner" />
      </client-only>
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
    description: {
      type: String,
      required: false,
      default: '',
    },
    cta: {
      type: Object,
      required: false,
      default() {
        return null;
      },
    },
    img: {
      type: Object,
      required: true,
      default() {
        return null;
      },
    },
  },
};
</script>
