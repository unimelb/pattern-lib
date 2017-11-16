<template>
  <SectionWrap class="bg-alt">
    <div class="listing listing--three grid">
      <ListItem class="cell--desk-1of3"><CardNews title="Test 1"/></ListItem>
      <ListItem class="cell--desk-1of3"><CardNews title="Test 2"/></ListItem>
      <ListItem class="cell--desk-1of3"><CardNews title="Test 3"/></ListItem>
    </div>
    <div style="margin-top: 1.5rem;" class="listing listing--three grid">
      <ListItem class="cell--desk-1of3"><ButtonIcon class="btn--fullwidth">Read More</ButtonIcon></ListItem>
      <ListItem class="cell--desk-1of3"><ButtonIcon class="btn--fullwidth" icon="microphone">Podcast</ButtonIcon></ListItem>
      <ListItem class="cell--desk-1of3"><ButtonIcon class="btn--fullwidth" icon="twitter">Twitter</ButtonIcon></ListItem>
    </div>
  </SectionWrap>
</template>

<script>
import CardNews from './../../CardNews.vue';

export default {
  components: { CardNews },
};

</script>
