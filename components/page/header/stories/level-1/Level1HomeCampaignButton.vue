<template>
  <header class="page-header page-header--l1" style="background-image:url(https://placeimg.com/990/530/arch/1);background-size:cover">
    <div class="page-header__inner max">
      <a class="link-img link-reset page-header__logomat" href="https://www.unimelb.edu.au/">
        <img
          class="page-header__logo"
          src="../../../../shared/logo.svg"
          width="117" height="117"
          alt="The University of Melbourne homepage"
        >
      </a>
    </div>
    <div class="max max--xsml text-center shim-pb2">
      <a class="btn btn--cta" href=""><span class="push-icon">Call to action <svg width="15px" height="15px" focusable="false" role="presentation" class="push-icon__icon"><use xlink:href="#icon-chevron-right" /></svg></span></a>
    </div>
  </header>
</template>

<script>
import CardPathfinder from './../../../../cards/CardPathfinder.vue';

export default {
  components: { CardPathfinder },
};
</script>
