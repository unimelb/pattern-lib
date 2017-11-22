<template>
  <SectionWrap class="bg-alt">
    <div class="grid grid--3col">
      <ListItem><CardNews title="Test 1"/></ListItem>
      <ListItem><CardNews title="Test 2"/></ListItem>
      <ListItem><CardNews title="Test 3"/></ListItem>
    </div>
    <div class="grid grid--3col shim-mt1">
      <ListItem><ButtonIcon>Read More</ButtonIcon></ListItem>
      <ListItem><ButtonIcon icon="microphone">Podcast</ButtonIcon></ListItem>
      <ListItem><ButtonIcon icon="twitter">Twitter</ButtonIcon></ListItem>
    </div>
  </SectionWrap>
</template>

<script>
import CardNews from './../../CardNews.vue';

export default {
  components: { CardNews },
};

</script>
