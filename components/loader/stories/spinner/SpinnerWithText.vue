<template>
  <Spinner spinner-text="Fetching results" />
</template>

<script>
import Spinner from '../../Spinner.vue';

export default {
  name: 'SpinnerDefault',
  components: { Spinner },
};
</script>
