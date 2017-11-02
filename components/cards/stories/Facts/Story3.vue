
<template>
  <SectionWrap>
    <div class="listing">
      <ListItem cols="1of1"><CardFact title="Social media reach" :icon="SocialMediaIcon" /></ListItem>
    </div>
  </SectionWrap>
</template>

<script>
import SocialMediaIcon from './social-media.svg';
import CardFact from './../../CardFacts.vue';

export default {
  components: { CardFact },
  data() {
    return {
      SocialMediaIcon,
    };
  },
};
</script>
