<template>
  <ToggleBlockMobile>
    <template slot="default">
      <h2>Arts</h2>
    </template>
    <template slot="hidden">
      <h4>As one of the world’s leading universities, we aspire to build on our distinguished traditions and create an innovative future.</h4>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci alias, cumque, esse incidunt consequatur, accusantium odit blanditiis ipsam dolorem repellendus ut corporis earum, illum a maiores optio voluptate dicta.</p>
    </template>
  </ToggleBlockMobile>
</template>

<script>
import ToggleBlockMobile from '../../toggle/ToggleBlockMobile.vue';

export default {
  components: { ToggleBlockMobile },
  readme: { html: true, source: false },
};
</script>
