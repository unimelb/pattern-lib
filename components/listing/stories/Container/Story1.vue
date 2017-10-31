<template>
  <ListingWrap cols="one">
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
import SectionWrap from '../../../section/SectionWrap.vue';

export default {
  components: { ListingWrap },
  decorator: SectionWrap,
};
</script>
