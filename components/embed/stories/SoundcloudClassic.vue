<template>
  <SoundcloudEmbed
    src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/290011378&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"
  />
</template>

<script>
import SoundcloudEmbed from '../SoundcloudEmbed.vue';
import ContentBlock from '../../content-block/ContentBlock.vue';

export default {
  components: { SoundcloudEmbed },
  readme: { source: true, html: true },
  decorator: ContentBlock,
};
</script>
