<template>
  <div
    class="page-header--campaign"
    style="background-image:url(https://placeimg.com/990/530/arch/1)"
  >
    <header class="page-header">
      <div class="page-header__inner max">
        <logo/>
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
import CardPathfinder from '../../../../cards/CardPathfinder.vue';
import Logo from '../../../../logo/Logo.vue';

export default {
  components: { CardPathfinder, Logo },
  readme: { source: true, html: true },
};
</script>
