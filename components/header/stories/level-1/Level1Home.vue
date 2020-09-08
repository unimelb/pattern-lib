<template>
  <div
    class="page-header--campaign"
    style="background-image: url('https://picsum.photos/id/1033/990/530.jpg');">
    <header class="page-header">
      <div class="page-header__inner max">
        <Logo no-padding />
      </div>
      <div class="section__inner section__inner--xsml">
        <CardPathfinder
          href="www.unimelb.edu.au"
          titleonly
          title="Talent for every<br>possible outcome" />
      </div>
    </header>
  </div>
</template>

<script>
import CardPathfinder from '../../../cards/CardPathfinder.vue';
import Logo from '../../../logo/Logo.vue';

export default {
  components: { CardPathfinder, Logo },
  readme: { source: true, html: true },
};
</script>
