<template>
  <SectionWrap class="bg-alt">
    <div class="grid grid--2col">
      <ListItem>
        <CardImage
          href="www.unimelb.edu.au"
          compact
          title="Growing esteem">
          Find out about our strategic journey and where we're headed.
        </CardImage>
      </ListItem>
      <ListItem>
        <CardImage
          href="www.unimelb.edu.au"
          compact
          title="Melbourne model">
          Check out how our degrees are structured to give our students flexibility and focus.
        </CardImage>
      </ListItem>
      <ListItem>
        <CardImage
          href="www.unimelb.edu.au"
          compact
          title="Our structure">
          this is a test of the content
        </CardImage>
      </ListItem>
      <ListItem>
        <CardImage
          href="www.unimelb.edu.au"
          compact
          title="Governance">
          this is a test of the content
        </CardImage>
      </ListItem>
      <ListItem>
        <CardImage
          href="www.unimelb.edu.au"
          compact
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
