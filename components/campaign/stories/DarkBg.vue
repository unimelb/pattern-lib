<template>
  <PageHeaderCampaign
    :img="BgImage"
    title="Come as you are, leave as you want to be."
    title-width="100%"
    button-text="Call to action text"
    link="google.com"
    x-position="87"
    y-position="0"
    bg-dark
  />
</template>

<script>
import PageHeaderCampaign from '../PageHeaderCampaign.vue';
import BgImage from '../../../.storybook/placeholders/campaign-banner-dark.png';

export default {
  components: { PageHeaderCampaign },
  readme: { source: true, html: true },
  data() {
    return {
      BgImage,
    };
  },
};
</script>
