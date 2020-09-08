<template>
  <DownloadBlock
    href=""
    header="Annual Report"
    img="https://picsum.photos/id/1040/200/300.jpg"
    btn-text="Download the 2017 Annual Report"
    filename="annual-report.pdf"
    size="2.2 MB"
    format="PDF" />
</template>

<script>
import DownloadBlock from '../DownloadBlock.vue';
import SectionWrap from '../../section/SectionWrap.vue';

export default {
  components: { DownloadBlock },
  decorator: SectionWrap,
  decoratorProps: { small: true },
  readme: { decorated: true },
};
</script>
