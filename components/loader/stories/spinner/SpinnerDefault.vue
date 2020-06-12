<template>
  <Spinner />
</template>

<script>
import Spinner from '../../Spinner.vue';
import spinnerDefault from './spinnerDefault.md';

export default {
  readme: { custom: spinnerDefault, source: true, html: false },
  name: 'SpinnerDefault',
  components: { Spinner },
};
</script>
