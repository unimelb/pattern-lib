<template>
  <SectionWrap>
    <div class="grid grid--4col grid--center">
      <ListItem>
        <CardLink
          inverted
          title="Test 1" />
      </ListItem>
      <ListItem>
        <CardLink
          inverted
          title="This is an even Longer title that totally goes over three lines" />
      </ListItem>
      <ListItem>
        <CardLink
          inverted
          title="This is a Longer title over two lines" />
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
