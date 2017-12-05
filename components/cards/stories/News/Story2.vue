<template>
  <SectionWrap class="bg-alt">
    <div class="grid grid--1col">
      <ListItem>
        <CardNews :cols="1" thumb="https://via.placeholder.com/200x400" title="Growing esteem" excerpt="Find out about our strategic journey and where we're headed."/>
      </ListItem>
      <ListItem>
        <CardNews :cols="1" thumb="https://via.placeholder.com/400x200" title="Melbourne model" excerpt="Check out how our degrees are structured to give our students flexibility and focus."/>
      </ListItem>
      <ListItem>
        <CardNews :cols="1" thumb="https://via.placeholder.com/300x200" title="Our structure" excerpt="this is a test of the content"/>
      </ListItem>
      <ListItem>
        <CardNews :cols="1" thumb="https://via.placeholder.com/400x200" title="Governance" excerpt="this is a test of the content"/>
      </ListItem>
      <ListItem>
        <CardNews :cols="1" thumb="https://via.placeholder.com/400x200" title="Annual reports" excerpt="See our governance details, including organisation and governance structures, regulatory framework, compliance obligations and risk management."/>
      </ListItem>
    </div>
  </SectionWrap>
</template>

<script>
import CardNews from './../../CardNews.vue';

export default {
  components: { CardNews },
};

</script>
