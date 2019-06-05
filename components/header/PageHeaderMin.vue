<template>
  <header class="page-header page-header--l3">
    <div
      :style="{ backgroundImage: image}"
      :class="{'bg-saw-tooth': !image, 'bg-pattern': image}"
      class="page-header__shape"
    />
    <div class="page-header__inner max">
      <logo
        height="96"
        width="96"/>
    </div>
  </header>
</template>

<script>
import Logo from '../../logo/Logo.vue';

export default {
  components: {
    Logo,
  },
  props: {
    image: {
      type: [String, Boolean],
      default: false,
    },
  },
};
</script>
