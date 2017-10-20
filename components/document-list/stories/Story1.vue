<template>
  <section-wrap small>
    <DownloadBlock
      img-src="http://unsplash.it/200/300?random&gravity=center"
      header="Annual Report"
      btn-text="Download Item"
    />
  </section-wrap>
</template>

<script>
import DownloadBlock from './../download-block.vue';
export default {
  components: { DownloadBlock },
};
</script>
