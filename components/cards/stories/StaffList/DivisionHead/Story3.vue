<template>
  <SectionWrap>
    <div class="listing listing--three">
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
import CardDivisionHead from './../../../CardDivisionHead.vue';

export default {
  components: { CardDivisionHead },
};
</script>
