<template>
  <SectionAlt>
    <div slot="left">
      <h2 class="heading-md">
        The Melbourne curriculum
      </h2>
      <p>Acrue an interdisciplinary skillset and leave career ready with a degree aligned to universities worldwide.</p>
    </div>
    <VideoPlayer
      label="Video label"
      :video="{
        url: 'https://youtube.com/embed/sWHoKq6MSaE?autoplay=1&enablejsapi=1&origin=https%3A%2F%2Fstudy.unimelb.edu.au',
        duration: 144,
      }"
      :poster="{
        src: 'https://study.unimelb.edu.au/__data/assets/image/0030/268293/Screen-Shot-2021-05-24-at-1.53.17-pm.png',
        alt: 'Image for example purposes.',
      }" />
  </SectionAlt>
</template>

<script>
import SectionAlt from 'components/section/SectionAlt.vue';
import VideoPlayer from 'components/embed/VideoPlayer.vue';

export default {
  components: { SectionAlt, VideoPlayer },
  readme: { html: true, source: true },
};
</script>
