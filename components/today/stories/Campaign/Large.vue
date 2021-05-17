<template>
  <CampaignBannerAlt
    :title="title"
    :cta="cta"
    :img="img"
    size="lg" />
</template>

<script>
import CampaignBannerAlt from 'components/campaign/CampaignBannerAlt.vue';

import campaignHeroDesktopImage from './static/campaign-hero-desktop.jpg';
import campaignHeroMobileImage from './static/campaign-hero-mobile.png';

export default {
  components: {
    CampaignBannerAlt,
  },
  readme: { source: true, html: true },
  data() {
    return {
      title: 'Redefine possible at Open Days 2021',
      img: {
        src: campaignHeroDesktopImage,
        alt: 'Woman typing on laptop',
        sizes: [
          {
            maxWidth: 599,
            srcset: campaignHeroMobileImage,
          },
        ],
      },
      cta: {
        text: 'Register now',
        href: '#',
      },
    };
  },
};
</script>
