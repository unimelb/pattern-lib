<template>
  <SectionWrap>
    <div class="grid grid--4col grid--center">
      <ListItem>
        <card-link
          inverted
          title="Test 1" />
      </ListItem>
      <ListItem>
        <card-link
          inverted
          title="Test 2" />
      </ListItem>
      <ListItem>
        <card-link
          inverted
          title="This is a Longer title over two lines" />
      </ListItem>
      <ListItem>
        <card-link
          inverted
          title="Ranking and Statistics" />
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
