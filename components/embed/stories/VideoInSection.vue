<template>
  <div>
    <h3 class="heading-section">Section with video embed</h3>
    <VideoEmbed src="https://www.youtube.com/embed/nlF7qp5GNPI" />
  </div>
</template>

<script>
import VideoEmbed from '../VideoEmbed.vue';
import SectionWrap from '../../section/SectionWrap.vue';

export default {
  components: { VideoEmbed },
  decorator: SectionWrap,
  decoratorProps: { bgColor: 'bg-inverted', centred: true },
};
</script>
