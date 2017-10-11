<template>
  <section-wrap>
    <div class="listing listing--three">
      <list-item>
        <card-division-head
          compact
          thumb="https://randomuser.me/api/portraits/lego/0.jpg"
          name="John Smith"
          title="Vice Principal Enterprise"
        />
      </list-item>
      <list-item>
        <card-division-head
          compact
          thumb="https://randomuser.me/api/portraits/lego/1.jpg"
          name="Jane Citizen"
          title="Vice Principal Enterprise"
        />
      </list-item>
      <list-item>
        <card-division-head
          compact
          thumb="https://randomuser.me/api/portraits/lego/2.jpg"
          name="John Smith"
          title="Vice Principal Enterprise"
        />
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
