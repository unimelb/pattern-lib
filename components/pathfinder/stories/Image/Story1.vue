<template>
  <SectionWrap class="bg-alt">
    <div class="grid grid--3col">
      <ListItem>
        <CardImage
          thumb="https://via.placeholder.com/300x400"
          href="www.unimelb.edu.au"
          title="Growing esteem">
          Find out about our strategic journey and where we're headed.
        </CardImage>
      </ListItem>
      <ListItem>
        <CardImage
          thumb="https://via.placeholder.com/600x200"
          href="www.unimelb.edu.au"
          title="Melbourne model">
          Check out how our degrees are structured to give our students flexibility and focus.
        </CardImage>
      </ListItem>
      <ListItem>
        <CardImage
          thumb="https://via.placeholder.com/300x200"
          href="www.unimelb.edu.au"
          title="Our structure">
          this is a test of the content
        </CardImage>
      </ListItem>
      <ListItem>
        <CardImage
          thumb="https://via.placeholder.com/550x200"
          href="www.unimelb.edu.au"
          title="Governance">
          this is a test of the content
        </CardImage>
      </ListItem>
      <ListItem>
        <CardImage
          thumb="https://via.placeholder.com/400x200"
          href="www.unimelb.edu.au"
          title="Annual reports">
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
  readme: { source: true, html: true },
};
</script>
