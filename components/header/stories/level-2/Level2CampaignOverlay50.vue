<template>
  <div
    class="page-header__darken--o50"
    style="background-image: url(https://placeimg.com/990/530/arch/1)"
  >
    <header class="page-header page-header--l2">
      <div class="page-header__inner max">
        <logo/>
      </div>
      <div class="page-header--center">
        <div class="max max--xsml text-center shim-pb2">
          <h1 class="shim-mb1">
            Talent for every
            <br>possible outcome
          </h1>
          <h3 class="shim-mb2">Further details about this amazing campaign.</h3>
          <a
            class="btn btn--inverted"
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
