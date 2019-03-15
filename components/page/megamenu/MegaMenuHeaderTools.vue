<template>
  <div class="header-tools__menu">
    <p>MegaMenuHeaderTools</p>
    <!-- <button
      id="sitemapbutton"
      :tabindex="isMobile ? -1 : 0"
      aria-haspopup="true"
      aria-controls="sitemapmenu"
      href="#sitemapmenu"
      class="link-icon--vertical link-reset"
      @click.prevent="activateMobileMenu"
      @keydown.13="activeMobileMenu"
    >
      <svg
        class="link-icon__icon svg"
        role="presentation"
        focusable="false"
        aria-labelledby="icon-menu"
      >
        <use xlink:href="#icon-hamburger"/>
      </svg>
      <span
        id="icon-menu"
        class="link-icon__text">Menu</span>
    </button> -->
  </div>
</template>

<script>
export default {
  name: 'MegaMenuHeaderTools',
};
</script>
