
<template>
  <SectionWrap>
    <div class="listing grid">
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
import accomodationIcon from './../../../shared/accomodation.svg';
import buildingIcon from './../../../shared/building.svg';
import bioDiversityIcon from './../../../shared/biodiversity.svg';
import carbonIcon from './../../../shared/carbon-reduction-pathways.svg';
import citationIcon from './../../../shared/citation.svg';
import facilityIcon from './../../../shared/facility-funding.svg';
import grantsIcon from './../../../shared/grants.svg';
import groupIcon from './../../../shared/group.svg';
import internationalIcon from './../../../shared/international-students.svg';
import medalIcon from './../../../shared/medal.svg';
import phdIcon from './../../../shared/PhD-completions.svg';
import socialMediaIcon from './../../../shared/social-media.svg';
import solarPowerIcon from './../../../shared/solar-power.svg';
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
