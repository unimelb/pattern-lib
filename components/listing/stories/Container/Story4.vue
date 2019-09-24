<template>
  <ListingWrap cols="4">
    <ListItem>
      <img
        src="https://placehold.it/600x200"
        alt="alt text goes here"
      >
    </ListItem>
    <ListItem>
      <img
        src="https://placehold.it/600x200"
        alt="alt text goes here"
      >
    </ListItem>
    <ListItem>
      <img
        src="https://placehold.it/600x200"
        alt="alt text goes here"
      >
    </ListItem>
    <ListItem>
      <img
        src="https://placehold.it/600x200"
        alt="alt text goes here"
      >
    </ListItem>
  </ListingWrap>
</template>

<script>
import ListingWrap from '../../ListingWrap.vue';
import ListItem from '../../ListItem.vue';
import SectionWrap from '../../../section/SectionWrap.vue';

export default {
  components: { ListingWrap, ListItem },
  decorator: SectionWrap,
  readme: { source: true, html: true },
};
</script>
