<template>
  <SectionWrap>
    <div class="grid grid--3col">
      <ListItem>
        <CardDivisionHead
          thumb="https://randomuser.me/api/portraits/lego/0.jpg"
          name="John Smith"
          title="Vice Principal Enterprise"
        >
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure tenetur iste dolores, architecto mollitia, aut consectetur odio itaque neque et omnis eos cumque id asperiores voluptate. Qui aut aperiam adipisci.</p>
        </CardDivisionHead>
      </ListItem>
      <ListItem>
        <CardDivisionHead
          thumb="https://randomuser.me/api/portraits/lego/1.jpg"
          name="Jane Citizen"
          title="Vice Principal Enterprise"
        >
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure tenetur iste dolores, architecto mollitia, aut consectetur odio itaque neque et omnis eos cumque id asperiores voluptate. Qui aut aperiam adipisci.</p>
        </CardDivisionHead>
      </ListItem>
      <ListItem>
        <CardDivisionHead
          thumb="https://randomuser.me/api/portraits/lego/2.jpg"
          name="John Smith"
          title="Vice Principal Enterprise"
        >
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure tenetur iste dolores, architecto mollitia, aut consectetur odio itaque neque et omnis eos cumque id asperiores voluptate. Qui aut aperiam adipisci.</p>
        </CardDivisionHead>
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
