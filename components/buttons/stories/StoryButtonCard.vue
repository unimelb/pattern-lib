<template>
  <SectionWrap>
    <div class="grid grid--2col">
      <ListItem>
        <h1>BG white</h1>
        <ButtonCard
          top-label="29th May"
          label="Something to go here and here about the event"
          link="www.unimelb.edu.au" />
      </ListItem>
      <ListItem>
        <h1>BG inverted</h1>
        <ButtonCard
          inverted
          label="Excepteur velit proident mollit proident excepteur."
          link="www.unimelb.edu.au" />
      </ListItem>
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
