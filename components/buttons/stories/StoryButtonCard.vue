<template>
  <SectionWrap bg-whte>
    <h1>Examples</h1>
    <h2>BG white</h2>
    <ButtonCard
      top-label="29th May"
      label="Something to go here and here about the event here and here about the event"
      link="www.unimelb.edu.au" />
    <h2>BG inverted</h2>
    <ButtonCard
      inverted
      label="Emollit proident excepteur proident excepteur."
      link="www.unimelb.edu.au" />
  </SectionWrap>
</template>

<script>
import ButtonCard from '../ButtonCard.vue';

export default {
  components: {
    ButtonCard,
  },
  readme: { source: true, html: true },
};
</script>
