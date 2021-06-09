<template>
  <SectionWrap>
    <div class="grid grid--center grid--1col">
      <ListItem>
        <CardFact
          :icon="socialMediaIcon"
          title="Social media reach" />
      </ListItem>
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
