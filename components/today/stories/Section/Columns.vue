<template>
  <SectionAlt>
    <div slot="left">
      <h2 class="heading-md">
        Why study at Melbourne
      </h2>
    </div>
    <div class="grid grid--lg">
      <div class="cell cell--lg cell--tab-1of2 content-max-width shim-mt0 shim-mb0 shim-mb1--desk">
        <h3 class="heading-sm shim-mb033">
          #1 in Australia
        </h3>
        <p>We’re ranked #1 in Australia for teaching quality. You’ll be studying alongside exceptional teachers and students.</p>
      </div>
      <div class="cell cell--lg cell--tab-1of2 content-max-width shim-mt0 shim-mb0 shim-mb1--desk">
        <h3 class="heading-sm shim-mb033">
          Globally recognised
        </h3>
        <p>We are a world-leading and globally-connected Australian university, with partnerships all around the world.</p>
      </div>
      <div class="cell cell--lg cell--tab-1of2 content-max-width shim-mt0 shim-mb0 shim-mb1--desk">
        <h3 class="heading-sm shim-mb033">
          Learn from the best
        </h3>
        <p>Our academics include community, government and business experts, as well as Nobel Laureates and Rhodes Scholars.</p>
      </div>
      <div class="cell cell--lg cell--tab-1of2 content-max-width shim-mt0 shim-mb0 shim-mb1--desk">
        <h3 class="heading-sm shim-mb033">
          Pursue your passions
        </h3>
        <p>A globally-aligned approach to education that allows you to follow your passions, get qualified, and become a creative and inter-disciplinary problem solver.</p>
      </div>
    </div>
  </SectionAlt>
</template>

<script>
import SectionAlt from 'components/section/SectionAlt.vue';
import SectionAltMd from './SectionAlt.md';

export default {
  components: { SectionAlt },
  readme: { custom: SectionAltMd, html: true, source: true },
};
</script>
