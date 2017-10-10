<template>
  <section-wrap>
    <div class="listing listing--one">
      <list-item>
        <card-division-head 
          thumb="https://randomuser.me/api/portraits/lego/0.jpg"
          name="John Smith"
          title="Vice Principal Enterprise"
        >
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure tenetur iste dolores, architecto mollitia, aut consectetur odio itaque neque et omnis eos cumque id asperiores voluptate. Qui aut aperiam adipisci.</p>
      </card-division-head>
      </list-item>
    </div>
  </section-wrap>
</template>

<script>
import CardDivisionHead from './../../CardDivisionHead.vue';

export default {
  components: { CardDivisionHead },
};
</script>
