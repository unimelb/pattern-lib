<template>
  <ModalDialog
    is-video
    btn-class="btn--cta"
    trigger="Watch">
    <VideoEmbed src="https://www.youtube.com/embed/nlF7qp5GNPI" />
  </ModalDialog>
</template>

<script>
import VideoEmbed from 'components/embed/VideoEmbed.vue';
import ModalDialog from '../ModalDialog.vue';

export default {
  components: { ModalDialog, VideoEmbed },
  readme: { html: true, source: false },
};
</script>
