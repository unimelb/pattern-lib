<template>
  <PageCampaignCards>
    <ListItem cols="1of3">
      <CardCampaign
        href="www.unimelb.edu.au"
        button-text="Button text example"
        button-color="teal"
        left-icon="location"
        right-icon="chevron-right"
        excerpt="Commodo proident labore dolor occaecat. Velit laborum ea elit adipisicing incididunt sunt incididunt. Eu fugiat" />
    </ListItem>
    <ListItem cols="1of3">
      <CardCampaign
        href="www.unimelb.edu.au"
        button-text="Button text example"
        button-color="orange"
        left-icon="info"
        right-icon="chevron-right"
        excerpt="Officia deserunt incididunt amet Lorem mollit eiusmod eu commodo exercitation" />
    </ListItem>
    <ListItem cols="1of3">
      <CardCampaign
        href="www.unimelb.edu.au"
        button-text="Button text example"
        button-color="green"
        left-icon="location"
        right-icon="chevron-right"
        excerpt="nim labore labore nostrud dolor ex." />
    </ListItem>
  </PageCampaignCards>
</template>

<script>
import CardCampaign from 'components/cards/CardCampaign';
import PageCampaignCards from '../PageCampaignCards.vue';

export default {
  components: { PageCampaignCards, CardCampaign },
  readme: { source: true, html: true },
};
</script>
