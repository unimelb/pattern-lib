<template>
  <SocialListGeneric
    :icon-size="50"
    facebook-link="https://google.com"
    twitter-link="https://google.com"
    linkedin-link="https://google.com"
    instagram-link="https://google.com"
    vimeo-link="https://google.com"
    youtube-link="https://google.com"
  />
</template>

<script>
import SocialListGeneric from '../SocialListGeneric.vue';
import PadDecorator from '../../../.storybook/decorators/PadDecorator.vue';

export default {
  components: { SocialListGeneric },
  decorator: PadDecorator,
  readme: { source: true, html: true },
};
</script>
