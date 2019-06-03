<template>
  <div
    class="page-header--campaign"
    style="background-image:url(https://placeimg.com/990/530/arch/1)"
  >
    <header class="page-header">
      <div class="page-header__inner max">
        <a
          class="link-img link-reset"
          href="https://www.unimelb.edu.au/">
          <img
            class="page-header__logo"
            src="../../../../shared/logov2.svg"
            width="148"
            height="148"
            alt="The University of Melbourne homepage"
          >
        </a>
      </div>
      <div class="section__inner section__inner--xsml">
        <CardPathfinder
          titleonly
          title="Talent for every<br>possible outcome"/>
      </div>
    </header>
  </div>
</template>

<script>
import CardPathfinder from '../../../cards/CardPathfinder.vue';

export default {
  components: { CardPathfinder },
  readme: { source: true, html: true },
};
</script>
