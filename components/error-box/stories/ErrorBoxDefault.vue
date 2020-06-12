<template>
  <div>
    <h3>With messages: </h3>
    <ErrorBox
      :messages="[
        'error 1',
        'error 2',
      ]" />

    <h3>Without messages: </h3>
    <ErrorBox
      :messages="[]" />
    <ErrorBox />
  </div>
</template>

<script>
import ErrorBox from '../ErrorBox.vue';

export default {
  name: 'ErrorBoxDefault',
  components: { ErrorBox },
};
</script>
