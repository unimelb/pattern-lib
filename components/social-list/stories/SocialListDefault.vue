<template>
  <SocialList/>
</template>

<script>
import PadDecorator from 'storybook/decorators/PadDecorator.vue';
import SocialList from '../SocialList.vue';

export default {
  components: { SocialList },
  decorator: PadDecorator,
  readme: { source: true, html: true },
};
</script>
