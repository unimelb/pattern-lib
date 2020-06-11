<template>
  <PageHeaderCampaign
    img="https://picsum.photos/id/1004/1920/1280"
    title="Come as you are, leave as you want to be."
    title-width="100%"
    button-text="Call to action text"
    link="google.com"
    x-position="87"
    y-position="0"
    bg-dark />
</template>

<script>
import PageHeaderCampaign from '../PageHeaderCampaign.vue';

export default {
  components: { PageHeaderCampaign },
  readme: { source: true, html: true },
};
</script>
