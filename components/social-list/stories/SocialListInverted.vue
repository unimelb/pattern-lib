<template>
  <SocialList :with-colors="false" />
</template>

<script>
import PadDecorator from 'storybook/decorators/PadDecorator.vue';
import SocialList from '../SocialList.vue';

export default {
  components: { SocialList },
  decorator: PadDecorator,
  decoratorProps: { class: 'bg-inverted' },
  readme: { source: true, html: true },
};
</script>
