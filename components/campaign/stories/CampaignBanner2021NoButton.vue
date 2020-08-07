
<template>
  <CampaignBanner
    :background="backgroundImages"
    background-alt-text="woman diver"
    href="#main"
    text="Lorem ipsum dolor sit amet, consectetur" />
</template>

<script>
import CampaignBanner from '../CampaignBanner.vue';
import largeBackground from './static/1440w_campaign_banner.jpg';
import mediumBackground from './static/768w_campaign_banner.jpg';
import smallBackground from './static/320w_campaign_banner.jpg';

export default {
  components: { CampaignBanner },
  readme: { source: true, html: true },
  data: () => ({
    backgroundImages: {
      large: largeBackground,
      medium: mediumBackground,
      small: smallBackground,
    },
  }),
};
</script>
