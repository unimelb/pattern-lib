<template>
  <SocialList />
</template>

<script>
import SocialList from '../SocialList.vue';
import Pad from '.storybook/decorators/Pad.vue';

export default {
  components: { SocialList },
  decorator: Pad,
};
</script>
