<template>
  <div class="page-header--campaign" style="background-image:url(https://placeimg.com/990/530/arch/1)">
    <header class="page-header">
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
      <div class="section__inner section__inner--xsml">
        <CardPathfinder titleonly title="Talent for every<br>possible outcome" />
      </div>
    </header>
  </div>
</template>

<script>
import CardPathfinder from '../../../../cards/CardPathfinder.vue';

export default {
  components: { CardPathfinder },
};
</script>
