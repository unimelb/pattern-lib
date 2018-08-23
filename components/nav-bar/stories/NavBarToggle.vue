<template>
  <ToggleBlock
    :active="true"
    class="nav--toggle"
  >
    <template slot="default">
      <h3 id="navigation">Navigation</h3>
      <svg
        focusable="false"
        role="presentation"
        class="nav__svg"
      >
        <use
          xmlns:xlink="http://www.w3.org/1999/xlink"
          xlink:href="#icon-chevron-down" />
      </svg>
    </template>
    <template slot="hidden">
      <nav
        class="nav--horizontal"
        aria-label="Subject level"
      >
        <a
          class="nav__link"
          href="">The first link</a>
        <a
          class="nav__link nav__link--current"
          href="">Another one</a>
        <a
          class="nav__link"
          href="">A different link</a>
        <a
          class="nav__link"
          href="">The fourth item</a>
      </nav>
    </template>
  </ToggleBlock>
</template>

<script>
import ToggleBlock from '../../toggle/ToggleBlock.vue';

export default {
  components: { ToggleBlock },
};
</script>
