<template>
  <CampaignBannerAlt
    :title="title"
    :text="text"
    :cta="cta"
    :img="img" />
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
      title: 'Register now for Open Days 2021',
      text: 'We\'re  here to support you make important decisions about your future.',
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
