<template>
  <div>
    <Loader :is-loading="isLoading">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci animi, architecto culpa dolorem dolorum eum
      fugit hic iste, modi necessitatibus porro quaerat ratione tempore voluptatum! Ab exercitationem illo nesciunt.
    </Loader>

    <button @click.prevent="isLoading = !isLoading">
      toggle
    </button>
  </div>
</template>

<script>
import Loader from '../../Loader.vue';
import loader from './loader.md';

export default {
  readme: { custom: loader, source: false, html: false },
  name: 'LoaderDefault',
  components: { Loader },
  data() {
    return {
      isLoading: true,
    };
  },
};
</script>
