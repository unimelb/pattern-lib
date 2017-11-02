
<template>
  <SectionWrap>
    <div class="listing">
      <ListItem cols="1of1"><CardFact title="Accomodation" :icon="accomodationIcon"/></ListItem>
      <ListItem cols="1of2"><CardFact title="Biodiversity" :icon="bioDiversityIcon"/></ListItem>
      <ListItem cols="1of2"><CardFact title="Building" :icon="buildingIcon"/></ListItem>
      <ListItem cols="1of2"><CardFact sml-header title="Carbon Reduction Pathways" meta="the header has card__header--sml class" :icon="carbonIcon" /></ListItem>
      <ListItem cols="1of2"><CardFact sml-header title="Citation" meta="the header has card__header--sml class" :icon="citationIcon" /></ListItem>
      <ListItem cols="1of2"><CardFact title="Facility Funding" :icon="facilityIcon" /></ListItem>
      <ListItem cols="1of2"><CardFact title="Grants" :icon="grantsIcon" /></ListItem>
      <ListItem cols="1of2"><CardFact sml-header title="Group" meta="the header has card__header--sml class" :icon="groupIcon" /></ListItem>
      <ListItem cols="1of2"><CardFact sml-header title="International Students" meta="the header has card__header--sml class" :icon="internationalIcon" /></ListItem>
      <ListItem cols="1of2"><CardFact title="Medal" :icon="medalIcon" /></ListItem>
      <ListItem cols="1of2"><CardFact title="PhD Completions" :icon="phdIcon" /></ListItem>
      <ListItem cols="1of2"><CardFact sml-header title="Social Media" meta="the header has card__header--sml class" :icon="socialMediaIcon" /></ListItem>
      <ListItem cols="1of2"><CardFact sml-header title="Solar Power" meta="the header has card__header--sml class" :icon="solarPowerIcon" /></ListItem>

    </div>
  </SectionWrap>
</template>

<script>
import accomodationIcon from './accomodation.svg';
import buildingIcon from './building.svg';
import bioDiversityIcon from './biodiversity.svg';
import carbonIcon from './carbon-reduction-pathways.svg';
import citationIcon from './citation.svg';
import facilityIcon from './facility-funding.svg';
import grantsIcon from './grants.svg';
import groupIcon from './group.svg';
import internationalIcon from './international-students.svg';
import medalIcon from './medal.svg';
import phdIcon from './PhD-completions.svg';
import socialMediaIcon from './social-media.svg';
import solarPowerIcon from './solar-power.svg';
import CardFact from './../../CardFacts.vue';

export default {
  components: { CardFact },
  data() {
    return {
      accomodationIcon,
      bioDiversityIcon,
      buildingIcon,
      carbonIcon,
      citationIcon,
      facilityIcon,
      grantsIcon,
      groupIcon,
      internationalIcon,
      medalIcon,
      phdIcon,
      socialMediaIcon,
      solarPowerIcon,
    };
  },
};
</script>
