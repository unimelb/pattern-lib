<template>
  <div :href="href" class="card card--features-panel card--features-panel--head bg-white">
    <div class="card__thumb">
      <div :style="`background-image: url('${thumb}')`" class="card__thumb-img"/>
    </div>
    <div class="card__inner">
      <h5 class="card__title">{{ title }}</h5>
      <p class="card__meta">{{ text }}</p>
    </div>
    <div v-if="href" class="card__footer">
      <ButtonIcon :href="href" class="btn--wide btn--cta btn--sml">Read more</ButtonIcon>
    </div>
  </div>
</template>

<script>
import { IMAGE_614_820 } from "../../utils/placeholders";

export default {
  props: {
    thumb: {
      type: String,
      default: IMAGE_614_820
    },
    title: {
      type: String,
      default: ""
    },
    text: {
      type: String,
      default: ""
    },
    href: {
      type: String,
      default: ""
    }
  }
};
</script>
