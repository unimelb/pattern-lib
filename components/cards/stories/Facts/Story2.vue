
<template>
  <SectionWrap>
    <div class="grid grid--center grid--1col">
      <ListItem><CardFact title="Accomodation" :icon="accomodationIcon"/></ListItem>
    </div>
    <div class="grid grid--center grid--2col">
      <ListItem><CardFact title="Biodiversity" :icon="bioDiversityIcon"/></ListItem>
      <ListItem><CardFact title="Building" :icon="buildingIcon"/></ListItem>
      <ListItem><CardFact sml-header title="Carbon Reduction Pathways" meta="the header has card__header--sml class" :icon="carbonIcon" /></ListItem>
      <ListItem><CardFact sml-header title="Citation" meta="the header has card__header--sml class" :icon="citationIcon" /></ListItem>
      <ListItem><CardFact title="Facility Funding" :icon="facilityIcon" /></ListItem>
      <ListItem><CardFact title="Grants" :icon="grantsIcon" /></ListItem>
      <ListItem><CardFact sml-header title="Group" meta="the header has card__header--sml class" :icon="groupIcon" /></ListItem>
      <ListItem><CardFact sml-header title="International Students" meta="the header has card__header--sml class" :icon="internationalIcon" /></ListItem>
      <ListItem><CardFact title="Medal" :icon="medalIcon" /></ListItem>
      <ListItem><CardFact title="PhD Completions" :icon="phdIcon" /></ListItem>
      <ListItem><CardFact sml-header title="Social Media" meta="the header has card__header--sml class" :icon="socialMediaIcon" /></ListItem>
      <ListItem><CardFact sml-header title="Solar Power" meta="the header has card__header--sml class" :icon="solarPowerIcon" /></ListItem>
    </div>
  </SectionWrap>
</template>

<script>
import accomodationIcon from '../../../shared/accomodation.svg';
import buildingIcon from '../../../shared/building.svg';
import bioDiversityIcon from '../../../shared/biodiversity.svg';
import carbonIcon from '../../../shared/carbon-reduction-pathways.svg';
import citationIcon from '../../../shared/citation.svg';
import facilityIcon from '../../../shared/facility-funding.svg';
import grantsIcon from '../../../shared/grants.svg';
import groupIcon from '../../../shared/group.svg';
import internationalIcon from '../../../shared/international-students.svg';
import medalIcon from '../../../shared/medal.svg';
import phdIcon from '../../../shared/PhD-completions.svg';
import socialMediaIcon from '../../../shared/social-media.svg';
import solarPowerIcon from '../../../shared/solar-power.svg';
import CardFact from '../../CardFacts.vue';

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
