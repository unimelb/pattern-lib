<template>
  <SectionAlt>
    <div slot="left">
      <h2 class="heading-md">
        What we offer
      </h2>
      <p>Study a short course or microcredential to advance your skills.</p>
      <ButtonIcon class="btn--text">
        Learn more about how our unique curriculum makes us different
      </ButtonIcon>
    </div>
    <div class="content-max-width">
      <h3 class="heading-sm">
        Take your career to the next level
      </h3>
      <p>Committed to life-long learning, we offer a range of short courses allowing you to rapidly advance your skills and pursue your passions.</p>
      <p>Our range of short courses include seminars, masterclasses, short-term intensives, CPD programs, professional development sessions and classes.</p>
    </div>
    <div class="grid grid--lg shim-mt2--desk">
      <div class="cell cell--lg cell--tab-1of2 content-max-width shim-mt0 shim-mb0 shim-mb1--desk">
        <div class="shim-mb067">
          <SvgIcon
            name="briefcase"
            aria-hidden="true" />
        </div>
        <h4 class="heading-xs shim-mb033">
          Industry-aligned
        </h4>
        <p>Develop highly relevant skills and knowledge to apply in your industry immediately.</p>
      </div>
      <div class="cell cell--lg cell--tab-1of2 content-max-width shim-mt0 shim-mb0 shim-mb1--desk">
        <div class="shim-mb067">
          <SvgIcon
            name="briefcase"
            aria-hidden="true" />
        </div>
        <h4 class="heading-xs shim-mb033">
          Developed by experts
        </h4>
        <p>High quality learning underpinned by cutting-edge research for solving real-world challenges.</p>
      </div>
      <div class="cell cell--lg cell--tab-1of2 content-max-width shim-mt0 shim-mb0 shim-mb1--desk">
        <div class="shim-mb067">
          <SvgIcon
            name="briefcase"
            aria-hidden="true" />
        </div>
        <h4 class="heading-xs shim-mb033">
          Future-focused
        </h4>
        <p>Gain skills and capabilities to succeed in a changing world.</p>
      </div>
      <div class="cell cell--lg cell--tab-1of2 content-max-width shim-mt0 shim-mb0 shim-mb1--desk">
        <div class="shim-mb067">
          <SvgIcon
            name="briefcase"
            aria-hidden="true" />
        </div>
        <h4 class="heading-xs shim-mb033">
          Accessible and flexible
        </h4>
        <p>Quick, accessible upskilling enabling you to curate your own professional development pathway.</p>
      </div>
      <div class="cell cell--lg cell--tab-1of2 content-max-width shim-mt0 shim-mb0 shim-mb1--desk">
        <div class="shim-mb067">
          <SvgIcon
            name="briefcase"
            aria-hidden="true" />
        </div>
        <h4 class="heading-xs shim-mb033">
          Stackable
        </h4>
        <p>Stack toward a degree with <strong>Melbourne MicroCerts</strong>. Opportunity to deepen your knowledge or build up to a University of Melbourne degree over time.</p>
      </div>
      <div class="cell cell--lg cell--tab-1of2 content-max-width shim-mt0 shim-mb0 shim-mb1--desk">
        <div class="shim-mb067">
          <SvgIcon
            name="briefcase"
            aria-hidden="true" />
        </div>
        <h4 class="heading-xs shim-mb033">
          Shareable
        </h4>
        <p>With <strong>Melbourne MicroCerts</strong>, be awarded information-rich digital certificates you can share digitally or via social media.</p>
      </div>
    </div>
  </SectionAlt>
</template>

<script>
import SectionAlt from 'components/section/SectionAlt.vue';
import ButtonIcon from 'components/buttons/ButtonIcon.vue';
import SvgIcon from 'components/icons/SvgIcon.vue';
import SectionAltMd from './SectionAlt.md';

export default {
  components: { SectionAlt, ButtonIcon, SvgIcon },
  readme: { custom: SectionAltMd, html: true, source: true },
};
</script>
