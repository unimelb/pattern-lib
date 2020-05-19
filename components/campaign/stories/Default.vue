<template>
  <PageHeaderCampaign
    img="https://picsum.photos/1033/990?grayscale"
    title="Come as you are, leave as you want to be."
    title-width="100%"
    button-text="Call to action text"
    link="google.com"
    x-position="87"
    y-position="0" />
</template>

<script>
import PageHeaderCampaign from '../PageHeaderCampaign.vue';

export default {
  components: { PageHeaderCampaign },
  readme: { source: true, html: true },
};
</script>
