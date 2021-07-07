<template>
  <CampaignBannerAlt
    :title="title"
    sub-heading="Sunday 4 July–Sunday 11 July"
    :cta="cta"
    :img="img"
    :tag="tag"
    size="lg" />
</template>

<script>
import CampaignBannerAlt from 'components/campaign/CampaignBannerAlt.vue';

import campaignHeroDesktopImage2 from './static/campaign-hero-desktop-2.png';
import campaignHeroMobileImage2 from './static/campaign-hero-mobile-2.png';
import campaignBannerAltReadme from './campaign-banner-alt.md';

export default {
  components: {
    CampaignBannerAlt,
  },
  readme: { custom: campaignBannerAltReadme, source: true, html: false },
  data() {
    return {
      title: 'A discussion with Anthony Fauci on COVID-19',
      img: {
        src: campaignHeroDesktopImage2,
        alt: 'Anthony Fauci with arms folded',
        sizes: [
          {
            maxWidth: 599,
            srcset: campaignHeroMobileImage2,
          },
        ],
      },
      cta: {
        text: 'Watch now',
        href: '#',
        icon: 'play',
      },
      tag: {
        text: 'Event',
        color: 'red',
        href: 'https://events.unimelb.edu.au/',
      },
    };
  },
};
</script>
