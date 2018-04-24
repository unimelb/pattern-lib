<template>
  <footer id="page-footer" class="page-footer">
    <PageFooterUpper />
    <div class="page-footer__bottom">
      <div class="page-footer__inner max">
        <div class="grid">
          <div class="cell cell--wide-3of4">
            <ToggleBlockMobile>
              <template slot="default">
                <h2>Site Map</h2>
              </template>
              <template slot="hidden">
                <PageFooterSitemap />
              </template>
            </ToggleBlockMobile>
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
import ToggleBlockMobile from '../../toggle/ToggleBlockMobile.vue';
import PageFooterUpper from './PageFooterUpper.vue';
import PageFooterSitemap from './PageFooterSitemap.vue';

export default {
  components: {
    ToggleBlockMobile,
    PageFooterUpper,
    PageFooterSitemap,
  },
};
</script>

