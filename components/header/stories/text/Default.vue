<template>
  <PageHeaderText
    :social-list="socialList"
    header-text="Exhibition"
    title-text="2019 Victorian College of the Arts Graduate Exhibition"
    sub-title-text="Margaret Lawrence Gallery"
    description-text="20 Nov 10 - 25 Nov 19"
    button-text="Book tickets"
    button-link="www.unimelb.edu.au"/>
</template>

<script>
import PageHeaderText from '../../PageHeaderText.vue';
import sample from './sample.json';

export default {
  components: { PageHeaderText },
  readme: { source: true, html: true },
  data() {
    return {
      socialList: sample,
    };
  },
};
</script>
