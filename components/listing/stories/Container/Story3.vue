<template>
  <ListingWrap cols="3">
    <ListItem>
      <img src="https://placehold.it/600x200" alt="">
    </ListItem>
    <ListItem>
      <img src="https://placehold.it/600x200" alt="">
    </ListItem>
    <ListItem>
      <img src="https://placehold.it/600x200" alt="">
    </ListItem>
    <ListItem>
      <img src="https://placehold.it/600x200" alt="">
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
};
</script>
