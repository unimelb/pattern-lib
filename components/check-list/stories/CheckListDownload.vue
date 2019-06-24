<template>
  <CheckList>
    <ol slot="list">
      <li>I agree to this term;</li>
      <li>And this one;</li>
      <li>As well as this other one.</li>
    </ol>
    <a
      slot="btn"
      class="download"
      href="/">Download</a>
  </CheckList>
</template>

<script>
import CheckList from '../CheckList.vue';
import ContentBlock from '../../content-block/ContentBlock.vue';

export default {
  components: { CheckList },
  decorator: ContentBlock,
  decoratorProps: { size: 'sm' },
  readme: { html: true, source: false },
};
</script>
