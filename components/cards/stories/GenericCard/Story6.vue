<template>
  <SectionWrap class="bg-alt">
    <div class="grid grid--3col">
      <ListItem>
        <GenericCard
          :cols="3"
          title="Test 1">
          <template slot="links">
            <a href="/">View generic details ></a>
            <a href="/">View generic staff ></a>
          </template>
        </GenericCard>
      </ListItem>
      <ListItem>
        <GenericCard
          :cols="3"
          title="Test 1"
          excerpt="Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit amet, consectetur.">
          <template slot="links">
            <a href="/">View generic details ></a>
            <a href="/">View generic staff ></a>
          </template>
        </GenericCard>
      </ListItem>
    </div>
  </SectionWrap>
</template>

<script>
import GenericCard from '../../GenericCard.vue';
import genericCardDocs from './generic-card-docs.md';

export default {
  components: { GenericCard },
  readme: { custom: genericCardDocs, source: true, html: true },
};
</script>
