<template>
  <section-wrap class="bg-alt">
    <div class="listing listing--three">
      <list-item>
        <CardImage thumb="http://via.placeholder.com/300x400" title="Growing esteem" excerpt="Find out about our strategic journey and where we're headed."/>
      </list-item>
      <list-item>
        <CardImage thumb="http://via.placeholder.com/600x200" title="Melbourne model" excerpt="Check out how our degrees are structured to give our students flexibility and focus."/>
      </list-item>
      <list-item>
        <CardImage thumb="http://via.placeholder.com/300x200" title="Our structure" excerpt="this is a test of the content"/>
      </list-item>
      <list-item>
        <CardImage thumb="http://via.placeholder.com/550x200" title="Governance" excerpt="this is a test of the content"/>
      </list-item>
      <list-item>
        <CardImage thumb="http://via.placeholder.com/400x200" title="Annual reports" excerpt="See our governance details, including organisation and governance structures, regulatory framework, compliance obligations and risk management."/>
      </list-item>
    </div>
  </section-wrap>
</template>

<script>
import CardImage from './../../CardImage.vue';

export default {
  components: { CardImage },
};

</script>
