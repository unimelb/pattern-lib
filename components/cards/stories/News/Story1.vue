<template>
  <SectionWrap class="bg-alt">
    <div class="listing grid">
      <ListItem class="cell--desk-1of3"><CardNews title="Test 1"/></ListItem>
      <ListItem class="cell--desk-1of3"><CardNews title="Test 2"/></ListItem>
      <ListItem class="cell--desk-1of3"><CardNews title="Test 3"/></ListItem>
    </div>
  </SectionWrap>
</template>

<script>
import CardNews from './../../CardNews.vue';

export default {
  components: { CardNews },
};

</script>
