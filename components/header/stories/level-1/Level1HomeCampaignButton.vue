<template>
  <div
    class="page-header--campaign"
    style="background-image:url(https://placeimg.com/990/530/arch/1)"
  >
    <header class="page-header">
      <div class="page-header__inner max">
        <Logo no-padding/>
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
              role="presentation"
              class="push-icon__icon"
            >
              <use xlink:href="#icon-chevron-right"/>
            </svg>
          </span>
        </a>
      </div>
    </header>
  </div>
</template>

<script>
import Logo from '../../../../logo/Logo.vue';

export default {
  components: {
    Logo,
  },
};
</script>
