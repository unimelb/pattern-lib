<template>
  <div>
    <svg :viewbox="icon.attributes.viewBox" v-for="icon in icons" :key="icon" v-html="icon.content" />
  </div>
</template>

<script>
import accomodationIcon from './../aboutus/accomodation.svg';
import buildingIcon from './../aboutus/building.svg';
import bioDiversityIcon from './../aboutus/biodiversity.svg';
import carbonIcon from './../aboutus/carbon-reduction-pathways.svg';
import citationIcon from './../aboutus/citation.svg';
import facilityIcon from './../aboutus/facility-funding.svg';
import grantsIcon from './../aboutus/grants.svg';
import groupIcon from './../aboutus/group.svg';
import internationalIcon from './../aboutus/international-students.svg';
import medalIcon from './../aboutus/medal.svg';
import phdIcon from './../aboutus/PhD-completions.svg';
import socialMediaIcon from './../aboutus/social-media.svg';
import solarPowerIcon from './../aboutus/solar-power.svg';

export default {
  data() {
    return {
      icons: [
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
      ],
    };
  },
};
</script>

<style scoped>
  svg {
    display: inline-block;
  }
</style>
