<template>
  <SectionAlt>
    <h2 class="heading-md">
      Level up with Melbourne MicroCerts
    </h2>
    <div class="grid grid--lg">
      <div class="cell cell--lg cell--tab-1of3 shim-mb1 shim-mt0 content-max-width">
        <img
          role="presentation"
          alt=""
          :src="briefcaseIcon"
          class="display-block shim-mb067">
        <h3 class="heading-sm shim-mb033">
          Industry-ready skills
        </h3>
        <p>Develop your leadership communication skills aligned with current industry best practice. <a href="#">Learn more about MicroCerts</a>.</p>
      </div>
      <div class="cell cell--lg cell--tab-1of3 shim-mb1 shim-mt0 content-max-width">
        <img
          role="presentation"
          alt=""
          :src="handshakeIcon"
          class="display-block shim-mb067">
        <h3 class="heading-sm shim-mb033">
          Taught by leading experts
        </h3>
        <p>Your teachers are internationally recognised professionals with years of on the ground experience within top organisations.</p>
      </div>
      <div class="cell cell--lg cell--tab-1of3 shim-mb1 shim-mt0 content-max-width">
        <img
          role="presentation"
          alt=""
          :src="checkIcon"
          class="display-block shim-mb067">
        <h3 class="heading-sm shim-mb033">
          Get a digital certificate
        </h3>
        <p>Receive an industry recognised digital certificate to showcase in your professional networks. <a href="#">See an example certificate</a>.</p>
      </div>
    </div>
  </SectionAlt>
</template>

<script>
import SectionAlt from 'components/section/SectionAlt.vue';

// Static assets
import briefcaseIcon from './static/briefcase.svg';
import checkIcon from './static/check.svg';
import handshakeIcon from './static/handshake.svg';

export default {
  components: { SectionAlt },
  readme: { source: true, html: true },
  data() {
    return {
      briefcaseIcon,
      checkIcon,
      handshakeIcon,
    };
  },
};
</script>
