<template>
  <footer id="page-footer" class="page-footer">
    <PageFooterUpper />
    <div class="page-footer__bottom">
      <div class="page-footer__inner max">
        <div class="grid">
          <div class="cell cell--wide-3of4">
            <SectionToggle class="section-toggle section-toggle--mobile">
              <SectionTogglePanel title="Site Map" close="Close Site Map">
                <PageFooterSitemap />
              </SectionTogglePanel>
            </SectionToggle>
          </div>
          <div class="page-footer__main__ack cell cell--wide-1of4">
            <p class="page-footer__ack">We acknowledge and pay respect to the Traditional Owners of the lands upon which our campuses are situated.</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import SectionToggle from '../../section/toggle/SectionToggle.vue';
import SectionTogglePanel from '../../section/toggle/SectionTogglePanel.vue';

import PageFooterUpper from './PageFooterUpper.vue';
import PageFooterSitemap from './PageFooterSitemap.vue';

export default {
  components: {
    SectionToggle,
    SectionTogglePanel,
    PageFooterUpper,
    PageFooterSitemap,
  },
};
</script>

