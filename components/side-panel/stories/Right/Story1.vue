<template>
  <main class="layout layout--right clearfix bg-light-blue">
    <SidePanel right class="layout__post bg-light-blue" />
    <div class="layout__main">
      <section-wrap id="section1" class="bg-white">
        <h2>test content</h2>
      </section-wrap>
      <section-wrap id="section2" class="bg-alt">
        test content
      </section-wrap>
      <section-wrap id="section3" class="bg-white">
        test content
      </section-wrap>
    </div>
  </main>
</template>

<script>
import SidePanel from './../../SidePanel.vue';
export default {
  components: { SidePanel },
};
</script>
