<template>
  <SectionWrap class="bg-alt">
    <div class="grid grid--2col">
      <ListItem>
        <CardImage thumb="https://via.placeholder.com/300x400" title="Growing esteem" >
          Find out about our strategic journey and where we're headed.
        </CardImage>
      </ListItem>
      <ListItem>
        <CardImage thumb="https://via.placeholder.com/600x200" title="Melbourne model" >
          Check out how our degrees are structured to give our students flexibility and focus.
        </CardImage>
      </ListItem>
      <ListItem>
        <CardImage thumb="https://via.placeholder.com/300x200" title="Our structure">
          this is a test of the content
        </CardImage>
      </ListItem>
      <ListItem>
        <CardImage thumb="https://via.placeholder.com/550x200" title="Governance">
          this is a test of the content
        </CardImage>
      </ListItem>
      <ListItem>
        <CardImage thumb="https://via.placeholder.com/400x200" title="Annual reports" >
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
