<template>
  <progressive-img
    alt="alt test goes here"
    src="https://upload.wikimedia.org/wikipedia/commons/6/62/Starsinthesky.jpg"
    placeholder="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Starsinthesky.jpg/220px-Starsinthesky.jpg" />
</template>

<script>
import ContentBlock from '../../content-block/ContentBlock.vue';
import progressiveImgDocs from './progressive-img-docs.md';

export default {
  decorator: ContentBlock,
  decoratorProps: { size: 'sml' },
  readme: {
    custom: progressiveImgDocs,
    html: true,
    source: false,
  },
};
</script>
