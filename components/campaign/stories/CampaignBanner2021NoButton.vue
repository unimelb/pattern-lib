
<template>
  <CampaignBanner
    :background="backgroundImages"
    background-alt-text="woman diver"
    href="#main"
    text="Lorem ipsum dolor sit amet, consectetur"
    button-text="learn more" />
</template>

<script>
import CampaignBanner from '../CampaignBanner.vue';
import readme from './campaign-banner.md';
import largeBackground from './static/1440w_campaign_banner.jpg';
import mediumBackground from './static/768w_campaign_banner.jpg';
import smallBackground from './static/320w_campaign_banner.jpg';

export default {
  components: { CampaignBanner },
  readme: { custom: readme, source: true, html: false },
  data: () => ({
    backgroundImages: {
      large: largeBackground,
      medium: mediumBackground,
      small: smallBackground,
    },
  }),
};
</script>
