<template>
  <SectionWrap>
    <div class="grid grid--center">
      <ListItem cols="1of3">
        <CardCampaign
          href="www.unimelb.edu.au"
          button-text="Button text example"
          button-color="teal"
          left-icon="location"
          right-icon="arrow-right"
          excerpt="Mollit magna voluptate ipsum irure ex excepteur quis irure cillum tempor cupidatat. Commodo proident labore dolor occaecat. Velit laborum ea elit adipisicing incididunt sunt incididunt. Eu fugiat" />
      </ListItem>
      <ListItem cols="1of3">
        <CardCampaign
          href="www.unimelb.edu.au"
          button-text="Button text example"
          button-color="orange"
          left-icon="info"
          right-icon="arrow-right"
          excerpt="Mollit magna voluptate ipsum irure ex excepteur quis irure cillum tempor cupidatat. Commodo proident labore dolor occaecat. Velit laborum ea elit adipisicing incididunt sunt incididunt. Eu fugiat eu nisi dolor irure nisi adipisicing irure excepteur mollit Lorem aliquip velit aute. Officia deserunt incididunt amet Lorem mollit eiusmod eu commodo exercitation" />
      </ListItem>
      <ListItem cols="1of3">
        <CardCampaign
          href="www.unimelb.edu.au"
          button-text="Button text example"
          button-color="green"
          left-icon="location"
          right-icon="arrow-right"
          excerpt="Mollit magna voluptate ipsum irure ex excepteur quis irure cillum tempor cupidatat. Commodo proident labore dolor occaecat. Velit laborum ea elit adipisicing incididunt sunt incididunt. Eu fugiat eu nisi dolor irure nisi adipisicing irure excepteur mollit Lorem aliquip velit aute. Officia deserunt incididunt amet Lorem mollit eiusmod eu commodo exercitation ad amet excepteur consectetur. Aute proident nisi quis ullamco cillum irure anim labore labore nostrud dolor ex." />
      </ListItem>
    </div>
  </SectionWrap>
</template>

<script>
import CardCampaign from '../../CardCampaign.vue';

export default {
  components: { CardCampaign },
  readme: { source: true, html: true },
};
</script>
