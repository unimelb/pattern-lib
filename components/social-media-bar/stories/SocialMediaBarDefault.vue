<template>
  <SocialMediaBar
    title="Faculty of Medicine, Dentistry and Health Sciences"
    newsletter-link="https://google.com"
    blog-link="https://google.com"
    facebook-link="https://google.com"
    twitter-link="https://google.com"
    linkedin-link="https://google.com"
    instagram-link="https://google.com"
    vimeo-link="https://google.com"
    youtube-link="https://google.com"
  />
</template>

<script>
import SocialMediaBar from '../SocialMediaBar.vue';
import SvgIcon from '../../icons/SvgIcon.vue';
import SocialMediaBarDoc from './social-media-bar-docs.md';

export default {
  components: { SocialMediaBar, SvgIcon },
  readme: { custom: SocialMediaBarDoc, source: true, html: true },
};
</script>
