<template>
  <SectionWrap>
    <div class="grid grid--3col">
      <ListItem>
        <CardDivisionHead
          compact
          thumb="https://randomuser.me/api/portraits/lego/0.jpg"
          name="John Smith"
          title="Vice Principal Enterprise" />
      </ListItem>
      <ListItem>
        <CardDivisionHead
          compact
          thumb="https://randomuser.me/api/portraits/lego/1.jpg"
          name="Jane Citizen"
          title="Vice Principal Enterprise" />
      </ListItem>
      <ListItem>
        <CardDivisionHead
          compact
          thumb="https://randomuser.me/api/portraits/lego/2.jpg"
          name="John Smith"
          title="Vice Principal Enterprise" />
      </ListItem>
    </div>
  </SectionWrap>
</template>

<script>
import CardDivisionHead from '../../../CardDivisionHead.vue';

export default {
  components: { CardDivisionHead },
  readme: { html: true, source: true },
};
</script>
