<template>
  <div
    class="page-header--campaign"
    style="background-image: url('https://picsum.photos/id/1033/990/530.jpg');">
    <header class="page-header">
      <div class="page-header__inner max">
        <Logo no-padding />
      </div>
      <div class="page-header--baseline max max--xsml shim-pb2">
        <a
          class="btn btn--center btn--cta"
          href>
          <span class="push-icon">
            Call to action
            <svg
              width="15px"
              height="15px"
              focusable="false"
              class="push-icon__icon">
              <use xlink:href="#icon-chevron-right" />
            </svg>
          </span>
        </a>
      </div>
    </header>
  </div>
</template>

<script>
import Logo from '../../../logo/Logo.vue';

export default {
  components: {
    Logo,
  },
};
</script>
