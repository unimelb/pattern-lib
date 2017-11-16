<template>
  <SectionWrap>
    <div class="listing grid">
      <ListItem class="cell--desk-1of3">
        <card-division-head
          compact
          thumb="https://randomuser.me/api/portraits/lego/0.jpg"
          name="John Smith"
          title="Vice Principal Enterprise"
        />
      </ListItem>
      <ListItem class="cell--desk-1of3">
        <card-division-head
          compact
          thumb="https://randomuser.me/api/portraits/lego/1.jpg"
          name="Jane Citizen"
          title="Vice Principal Enterprise"
        />
      </ListItem>
      <ListItem class="cell--desk-1of3">
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
import CardDivisionHead from './../../../CardDivisionHead.vue';

export default {
  components: { CardDivisionHead },
};
</script>
