<template>
  <PageHeaderMin :image="`url('${reconBG}')` "/>
</template>

<script>
import PageHeaderMin from '../../PageHeaderMin.vue';
import reconBG from '../../../shared/reconciliation-banner-background.png';
export default {
  components: { PageHeaderMin },
  readme: { source: true, html: true },
  data() {
    return {
      reconBG,
    };
  },
};
</script>
