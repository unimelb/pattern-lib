<template>
  <section-wrap bg-color="white">
    <InputFilter
      :data="data"
      @test="test"/>
  </section-wrap>
</template>

<script>
import InputFilter from '../InputFilter.vue';

export default {
  components: { InputFilter },
  data() {
    return {
      data: [
        {
          name: 'arts',
        },
        {
          name: 'science',
        },
      ],
    };
  },
};
</script>
