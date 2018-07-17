<template>
  <SectionWrap class="bg-alt">
    <div class="grid grid--3col">
      <ListItem>
        <CardImage compact title="Growing esteem" >
          Find out about our strategic journey and where we're headed.
        </CardImage>
      </ListItem>
      <ListItem>
        <CardImage compact title="Melbourne model" >
          Check out how our degrees are structured to give our students flexibility and focus.
        </CardImage>
      </ListItem>
      <ListItem>
        <CardImage compact title="Our structure">
          this is a test of the content
        </CardImage>
      </ListItem>
      <ListItem>
        <CardImage compact title="Governance">
          this is a test of the content
        </CardImage>
      </ListItem>
      <ListItem>
        <CardImage compact title="Annual reports" >
          See our governance details, including organisation and governance structures, regulatory framework, compliance obligations and risk management.
        </CardImage>
      </ListItem>
    </div>
  </SectionWrap>
</template>

<script>
import CardImage from '../../../cards/CardImage.vue';

export default {
  components: { CardImage },
};

</script>
