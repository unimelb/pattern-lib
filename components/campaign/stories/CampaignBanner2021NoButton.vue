<template>
  <CampaignBanner
    :img-sources="imgSources"
    background-alt-text="woman diver"
    href="#main"
    text="Lorem ipsum dolor sit amet, consectetur"
    button-text="learn more" />
</template>

<script>
import CampaignBanner from '../CampaignBanner.vue';
import readme from './campaign-banner.md';
import largeBackground from './static/1440w_campaign_banner.jpg';
import largeBackground2x from './static/1440w_campaign_banner_2x.jpg';
import mediumBackground from './static/768w_campaign_banner.jpg';
import mediumBackground2x from './static/768w_campaign_banner_2x.jpg';
import smallBackground from './static/320w_campaign_banner.jpg';
import smallBackground2x from './static/320w_campaign_banner_2x.jpg';
import smallBackground3x from './static/320w_campaign_banner_3x.jpg';

export default {
  components: { CampaignBanner },
  readme: { custom: readme, source: true, html: false },
  data: () => ({
    imgSources: {
      large: [
        { url: largeBackground, pixelRatio: 1 },
        { url: largeBackground2x, pixelRatio: 2 },
      ],
      medium: [
        { url: mediumBackground, pixelRatio: 1 },
        { url: mediumBackground2x, pixelRatio: 2 },
      ],
      small: [
        { url: smallBackground, pixelRatio: 1 },
        { url: smallBackground2x, pixelRatio: 2 },
        { url: smallBackground3x, pixelRatio: 3 },
      ],
    },
  }),
};
</script>
