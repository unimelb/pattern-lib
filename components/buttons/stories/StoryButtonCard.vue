<template>
  <SectionWrap bg-whte>
    <h1>Examples</h1>
    <h2>BG white</h2>
    <div class="story-example-css">
      <ButtonCard
        top-label="29th May"
        label="Something to go here and here about the event here and here about the event"
        link="https://www.unimelb.edu.au" />
      <ButtonCard
        label="Something to go here and here about the event here and here about the event"
        link="https://www.unimelb.edu.au" />
    </div>
    <h2>BG inverted</h2>
    <div class="story-example-css">
      <ButtonCard
        inverted
        label="Emollit proident excepteur proident excepteur."
        link="https://www.unimelb.edu.au" />
      <ButtonCard
        inverted
        top-label="29th May"
        label="Emollit proident excepteur proident excepteur."
        link="https://www.unimelb.edu.au" />
    </div>
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

<style>
.story-example-css {
  display: flex;
  flex-direction: column;

  @media (min-width: 481px) {
    flex-direction: row;
  }
}
</style>
