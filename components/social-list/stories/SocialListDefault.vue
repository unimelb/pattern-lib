<template>
  <SocialList />
</template>

<script>
import SocialList from '../SocialList.vue';
import PadDecorator from '../../../.storybook/decorators/PadDecorator.vue';

export default {
  components: { SocialList },
  decorator: PadDecorator,
};
</script>
