<template>
  <SectionAlt
    bordered>
    <h2 class="heading-md">
      Section heading
    </h2>
    <div class="grid grid--lg">
      <div class="cell cell--lg cell--tab-1of3 shim-mt0 shim-mb0 content-max-width">
        <h3 class="heading-sm border-top">
          Column 1
        </h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean molestie mattis nisl eu tincidunt. Vivamus nulla erat, hendrerit non lectus eget, accumsan sagittis leo.</p>
      </div>
      <div class="cell cell--lg cell--tab-1of3 shim-mt0 shim-mb0 content-max-width">
        <h3 class="heading-sm border-top">
          Column 2
        </h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean molestie mattis nisl eu tincidunt. Vivamus nulla erat, hendrerit non lectus eget, accumsan sagittis leo.</p>
      </div>
      <div class="cell cell--lg cell--tab-1of3 shim-mt0 shim-mb0 content-max-width">
        <h3 class="heading-sm border-top">
          Column 3
        </h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean molestie mattis nisl eu tincidunt. Vivamus nulla erat, hendrerit non lectus eget, accumsan sagittis leo.</p>
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
