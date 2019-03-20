<template>
  <SectionWrap>
    <div class="grid grid--4col grid--center">
      <ListItem>
        <card-link
          inverted
          title="Ranking and Statistics"/>
      </ListItem>
      <ListItem>
        <card-link
          inverted
          title="Study"/>
      </ListItem>
      <ListItem>
        <card-link
          inverted
          title="Facts and figures"/>
      </ListItem>
    </div>
  </SectionWrap>
</template>

<script>
import CardLink from '../../../cards/CardLink.vue';

export default {
  components: { CardLink },
  readme: { source: true, html: true },
};
</script>
