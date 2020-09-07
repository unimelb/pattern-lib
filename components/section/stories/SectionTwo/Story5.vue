<template>
  <SectionTwoCol
    class="section-with-rounded-image"
    direction="right">
    <div slot="main">
      <h3 class="section-with-rounded-image__heading">
        Doloribus in mollitia.
      </h3>
      <p class="section-with-rounded-image__description">
        Qui rem enim alias accusantium ut nostrum et iste. A quo voluptatem in culpa repudiandae facere. Veritatis magnam omnis distinctio ea modi. Ipsam aperiam corporis dolorum.
      </p>
    </div>
    <div slot="side">
      <FigureWrap
        :caption="false"
        inset>
        <FigureRounded
          background-image="http://lorempixel.com/640/480/people"
          aria-label="test aria label" />
      </FigureWrap>
    </div>
  </SectionTwoCol>
</template>

<script>
import SectionTwoCol from '../../SectionTwoCol.vue';
import FigureRounded from '../../../figure/FigureRounded.vue';
import FigureWrap from '../../../figure/FigureWrap.vue';

export default {
  components: { SectionTwoCol, FigureRounded, FigureWrap },
  readme: { source: true, html: true },
};
</script>
