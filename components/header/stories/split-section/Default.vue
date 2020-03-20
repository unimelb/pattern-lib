<template>
  <SplitSectionHeader
    title="Welcome to the University of Melbourne"
    sub-title="The split-section header is suitable for use on mega menu sites where a heading, short paragraph and CTA are desired. It offers a more contemporary look than previous campaign."
    button-text="Read more about Melbourne"
    button-link="www.unimelb.edu.au"
    img="https://i.picsum.photos/id/1033/990/530.jpg" />
</template>

<script>
import SplitSectionHeader from '../../SplitSectionHeader.vue';

export default {
  components: { SplitSectionHeader },
  readme: { source: true, html: true },
};
</script>
