<template>
  <PageHeaderCampaign
    img="https://matrix-cms.unimelb.edu.au/web/assets/images/banners/dancers.jpg/banner.jpg"
    title="Come as you are, leave as you want to be."
    title-width="100%"
    button-text="Call to action text"
    link="google.com"
    x-position="87"
    y-position="0"
    bg-black
  />
</template>

<script>
import PageHeaderCampaign from '../PageHeaderCampaign.vue';

export default {
  components: { PageHeaderCampaign },
  readme: { source: true, html: true },
};
</script>
