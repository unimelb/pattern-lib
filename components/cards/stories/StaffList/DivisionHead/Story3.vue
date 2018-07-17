<template>
  <SectionWrap>
    <div class="grid grid--3col">
      <ListItem>
        <card-division-head
          compact
          thumb="https://randomuser.me/api/portraits/lego/0.jpg"
          name="John Smith"
          title="Vice Principal Enterprise"
        />
      </ListItem>
      <ListItem>
        <card-division-head
          compact
          thumb="https://randomuser.me/api/portraits/lego/1.jpg"
          name="Jane Citizen"
          title="Vice Principal Enterprise"
        />
      </ListItem>
      <ListItem>
        <card-division-head
          compact
          thumb="https://randomuser.me/api/portraits/lego/2.jpg"
          name="John Smith"
          title="Vice Principal Enterprise"
        />
      </ListItem>
    </div>
  </SectionWrap>
</template>

<script>
import CardDivisionHead from '../../../CardDivisionHead.vue';

export default {
  components: { CardDivisionHead },
};
</script>
