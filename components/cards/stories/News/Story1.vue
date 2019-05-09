<template>
  <SectionWrap class="bg-alt">
    <div class="grid grid--3col">
      <ListItem>
        <CardNews title="Test 1"/>
      </ListItem>
      <ListItem>
        <CardNews title="Test 2"/>
      </ListItem>
      <ListItem>
        <CardNews title="Test 3"/>
      </ListItem>
    </div>
  </SectionWrap>
</template>

<script>
import CardNews from '../../CardNews.vue';

export default {
  components: { CardNews },
  readme: { html: true, source: true },
};
</script>
