<template>
  <SectionWrap>
    <div class="grid grid--4col grid--center">
      <ListItem>
        <CardLink
          inverted
          title="Ranking and Statistics" />
      </ListItem>
      <ListItem>
        <CardLink
          inverted
          title="Study" />
      </ListItem>
      <ListItem>
        <CardLink
          inverted
          title="Facts and figures" />
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
