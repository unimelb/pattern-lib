<template>
  <section class="section" :class="{ [`bg-${bgColor}`]: !!bgColor, 'section--centred': centred }" :style="{backgroundImage: bgImage ? `url('${bgImage}')` : '' }">
    <div class="section__inner" :class="{'section__inner--sml': small, 'section__inner--mid': mid, 'section__inner--short': short}">
      <slot></slot>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    short: Boolean,
    small: Boolean,
    mid: Boolean,
    bgImage: String,
    bgColor: String,
    centred: Boolean,
  },
};
</script>
