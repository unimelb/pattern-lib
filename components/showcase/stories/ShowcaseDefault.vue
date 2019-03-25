<template>
  <Showcase :filters="filters"/>
</template>

 <script>
import Showcase from "../Showcase.vue";
export default {
  components: { Showcase },
  data() {
    return {
      filters: [
        { id: 1, label: "filter 1", values: ["tag 1", "tag 2"] },
        { id: 2, label: "filter 2", values: ["tag 1", "tag 2"] }
      ]
    };
  }
};
</script>