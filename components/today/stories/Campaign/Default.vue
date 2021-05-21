<template>
  <CampaignBannerAlt
    :title="title"
    :cta="cta"
    :img="img" />
</template>

<script>
import CampaignBannerAlt from 'components/campaign/CampaignBannerAlt.vue';

import campaignHeroDesktopImage from './static/campaign-hero-desktop.jpg';
import campaignHeroMobileImage from './static/campaign-hero-mobile.png';
import campaignBannerAltReadme from './campaign-banner-alt.md';

export default {
  components: {
    CampaignBannerAlt,
  },
  readme: { custom: campaignBannerAltReadme, source: true, html: false },
  data() {
    return {
      title: 'Register now for Open Days 2021',
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
