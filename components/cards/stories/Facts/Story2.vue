<template>
  <SectionWrap>
    <div class="grid grid--center grid--1col">
      <ListItem>
        <CardFact
          :icon="accomodationIcon"
          title="Accomodation" />
      </ListItem>
    </div>
    <div class="grid grid--center grid--2col">
      <ListItem>
        <CardFact
          :icon="bioDiversityIcon"
          title="Biodiversity" />
      </ListItem>
      <ListItem>
        <CardFact
          :icon="buildingIcon"
          title="Building" />
      </ListItem>
      <ListItem>
        <CardFact
          :icon="carbonIcon"
          sml-header
          title="Carbon Reduction Pathways"
          meta="the header has card__header--sml class" />
      </ListItem>
      <ListItem>
        <CardFact
          :icon="citationIcon"
          sml-header
          title="Citation"
          meta="the header has card__header--sml class" />
      </ListItem>
      <ListItem>
        <CardFact
          :icon="facilityIcon"
          title="Facility Funding" />
      </ListItem>
      <ListItem>
        <CardFact
          :icon="grantsIcon"
          title="Grants" />
      </ListItem>
      <ListItem>
        <CardFact
          :icon="groupIcon"
          sml-header
          title="Group"
          meta="the header has card__header--sml class" />
      </ListItem>
      <ListItem>
        <CardFact
          :icon="internationalIcon"
          sml-header
          title="International Students"
          meta="the header has card__header--sml class" />
      </ListItem>
      <ListItem>
        <CardFact
          :icon="medalIcon"
          title="Medal" />
      </ListItem>
      <ListItem>
        <CardFact
          :icon="phdIcon"
          title="PhD Completions" />
      </ListItem>
      <ListItem>
        <CardFact
          :icon="socialMediaIcon"
          sml-header
          title="Social Media"
          meta="the header has card__header--sml class" />
      </ListItem>
      <ListItem>
        <CardFact
          :icon="solarPowerIcon"
          sml-header
          title="Solar Power"
          meta="the header has card__header--sml class" />
      </ListItem>
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
