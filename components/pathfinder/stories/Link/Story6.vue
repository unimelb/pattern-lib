<template>
  <SectionWrap>
    <div class="grid grid--4col grid--center">
      <ListItem>
        <CardLink
          :thumb="false"
          :cols="4"
          title="Test 1" />
      </ListItem>
      <ListItem>
        <CardLink
          :thumb="false"
          :cols="4"
          title="Test 2" />
      </ListItem>
      <ListItem>
        <CardLink
          :thumb="false"
          :cols="4"
          title="This is a Longer title over two lines" />
      </ListItem>
      <ListItem>
        <CardLink
          :thumb="false"
          :cols="4"
          title="Ranking and Statistics" />
      </ListItem>
    </div>
  </SectionWrap>
</template>

<script>
import CardLink from '../../../cards/CardLink.vue';
import pathfinderLinkComponentDocs from './pathfinder-link-component-docs.md';

export default {
  components: { CardLink },
  readme: { custom: pathfinderLinkComponentDocs, source: true, html: true },
};

</script>
