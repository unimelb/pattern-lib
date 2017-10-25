<template>
  <SectionWrap>
    <ListingWrap v-if="direction === 'left'">
      <ListItem cols="2of3">
        <slot name="main"></slot>
      </ListItem>
      <ListItem cols="1of3">
        <slot name="side"></slot>
      </ListItem>
    </ListingWrap>
    <ListingWrap v-if="direction === 'right'">
      <ListItem cols="1of3">
        <slot name="side"></slot>
      </ListItem>
      <ListItem cols="2of3">
        <slot name="main"></slot>
      </ListItem>
    </ListingWrap>
  </SectionWrap>
</template>

<script>
import ListingWrap from './../listing/ListingWrap.vue';
export default {
  components: { ListingWrap },
  props: {
    direction: {
      type: String,
      default: 'left',
    },
  },
};
</script>
