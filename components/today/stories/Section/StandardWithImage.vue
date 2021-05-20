<template>
  <SectionAlt :img="{ src: 'https://via.placeholder.com/1200x400', alt: 'Image for example purposes.' }">
    <div slot="left">
      <h2 class="heading-md">
        What you will learn
      </h2>
    </div>
    <div class="content-max-width">
      <h3 class="heading-sm">
        How people process information
      </h3>
      <p>Learn about how cognitive processing can help craft influential communication, including the effect of concrete vs. abstract language and the sequencing of statements.</p>
      <h3 class="heading-sm">
        How to be more influential in a social environment
      </h3>
      <p>Learn the effect of verbal and non-verbal presentation, and how social identity and social learning process can support more reflective and deliberate communication practices.</p>
      <h3 class="heading-sm">
        Applying what you learn in the workplace
      </h3>
      <p>Learn how to analyse and explain effective leadership, evaluate suitable leadership communication practices, and formulate and justify a plan for integrating evidence-based leadership in the workplace.</p>
      <h3 class="heading-sm">
        Expand your knowledge with the Managing&nbsp;Teams series
      </h3>
      <p>Develop different ways of communicating effectively with peers and colleagues both online and face-to-face, according to the latest research and industry best practice.</p>
    </div>
  </SectionAlt>
</template>

<script>
import SectionAlt from 'components/section/SectionAlt.vue';
import SectionAltMd from './SectionAlt.md';

export default {
  components: { SectionAlt },
  readme: {
    custom: SectionAltMd,
    html: true,
    source: true,
    replace: {
      '<div class="section-alt__img progressive-image" style="max-width: 100%;"><span><canvas width="1" height="1" class="progressive-image-canvas"></canvas> <div class="progressive-image-wrapper" style="padding-bottom: 40%;"><img alt="" class="progressive-image-main" style="display: none;"> </div></span></div>': '<progressive-image class="section-alt__img" aspect-ratio="0.4" src="https://via.placeholder.com/1200x400" alt=""></progressive-image>',
    },
  },
};
</script>
