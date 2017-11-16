<template>
  <SectionWrap class="bg-white">
    <div class="listing listing--one grid">
      <ListItem>
        <CardDivisionHead
          thumb="https://randomuser.me/api/portraits/lego/0.jpg"
          name="John Smith"
          :cols="1"
          title="Vice Principal Enterprise"
        >
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure tenetur iste dolores, architecto mollitia, aut consectetur odio itaque neque et omnis eos cumque id asperiores voluptate. Qui aut aperiam adipisci.</p>
      </CardDivisionHead>
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
