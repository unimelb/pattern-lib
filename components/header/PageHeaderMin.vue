<template>
  <header class="page-header page-header--l3">
    <div
      :style="{ backgroundImage: image}"
      :class="{'bg-saw-tooth': !image, 'bg-pattern': image}"
      class="page-header__shape"
    />
    <div class="page-header__inner max">
      <a
        class="link-img link-reset"
        href="https://www.unimelb.edu.au/">
        <img
          class="page-header__logo"
          src="../../shared/logo.svg"
          width="85"
          height="71"
          alt="The University of Melbourne homepage"
        >
      </a>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    image: {
      type: [String, Boolean],
      default: false,
    },
  },
};
</script>
