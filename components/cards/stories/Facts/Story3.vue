
<template>
  <SectionWrap>
    <div class="grid grid--center grid--1col">
      <ListItem><CardFact title="Social media reach" :icon="socialMediaIcon" /></ListItem>
    </div>
  </SectionWrap>
</template>

<script>
import socialMediaIcon from '../../../shared/social-media.svg';
import CardFact from '../../CardFacts.vue';

export default {
  components: { CardFact },
  data() {
    return {
      socialMediaIcon,
    };
  },
};
</script>
