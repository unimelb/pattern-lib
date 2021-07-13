<template>
  <CampaignBannerAlt
    :title="title"
    sub-heading="Sunday 4 July–Sunday 11 July"
    :links="links"
    :img="img"
    size="lg" />
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
      links: [
        {
          text: 'Register now',
          href: '#',
        },
        {
          text: 'Virtual campus tours',
          href: '#',
        },
        {
          text: 'Upcoming events',
          href: '#',
        },
        {
          text: 'Meet current students',
          href: '#',
        },
      ],
    };
  },
};
</script>
