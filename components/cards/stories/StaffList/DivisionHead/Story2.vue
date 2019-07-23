<template>
  <SectionWrap class="bg-white">
    <div class="grid grid--1col">
      <ListItem>
        <card-division-head
          :cols="1"
          thumb="https://randomuser.me/api/portraits/lego/0.jpg"
          name="John Smith"
          title="Vice Principal Enterprise"
        >
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure tenetur iste dolores, architecto mollitia, aut consectetur odio itaque neque et omnis eos cumque id asperiores voluptate. Qui aut aperiam adipisci.</p>
        </card-division-head>
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
