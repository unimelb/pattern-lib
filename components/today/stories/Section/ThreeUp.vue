<template>
  <SectionAlt>
    <h2 class="heading-md shim-mb2--desk">
      Level up with Melbourne MicroCerts
    </h2>
    <div class="grid grid--lg">
      <div class="cell cell--lg cell--tab-1of3 shim-mb0 shim-mt0 content-max-width">
        <div class="shim-mb067">
          <SvgIcon
            name="briefcase"
            class="shim-mb067" />
        </div>
        <h3 class="heading-sm shim-mb033">
          Industry-ready skills
        </h3>
        <p>Develop your leadership communication skills aligned with current industry best practice. <a href="#">Learn more about MicroCerts</a>.</p>
      </div>
      <div class="cell cell--lg cell--tab-1of3 shim-mb0 shim-mt0 content-max-width">
        <div class="shim-mb067">
          <SvgIcon
            name="handshake"
            class="shim-mb067" />
        </div>
        <h3 class="heading-sm shim-mb033">
          Taught by leading experts
        </h3>
        <p>Your teachers are internationally recognised professionals with years of on the ground experience within top organisations.</p>
      </div>
      <div class="cell cell--lg cell--tab-1of3 shim-mb0 shim-mt0 content-max-width">
        <div class="shim-mb067">
          <SvgIcon
            name="check"
            class="shim-mb067" />
        </div>
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
import SvgIcon from 'components/icons/SvgIcon.vue';
import SectionAltMd from './SectionAlt.md';

export default {
  components: { SectionAlt, SvgIcon },
  readme: { custom: SectionAltMd, html: true, source: true },
};
</script>
