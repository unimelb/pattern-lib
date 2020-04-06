<template>
  <Spinner spinner-text="Fetching results" />
</template>

<script>
import Spinner from '../../Spinner.vue';
import spinnerWithText from './spinnerWithText.md';

export default {
  readme: { custom: spinnerWithText, source: true, html: false },
  name: 'SpinnerDefault',
  components: { Spinner },
};
</script>
