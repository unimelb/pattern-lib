<template>
  <main class="layout layout--left bg-light-blue">
    <SidePanel class="layout__pre bg-light-blue" />
    <div id="section1" class="content-block bg-white">
      <h2>test content</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio similique dolor, quasi cupiditate dolore! Doloremque omnis corporis, libero, delectus adipisci ipsum nemo non ducimus necessitatibus eius? Repellendus et soluta, commodi!</p>
    </div>
    <SectionWrap id="section2" class="bg-alt">
      test content
    </SectionWrap>
    <SectionWrap id="section3" class="bg-white">
      test content
    </SectionWrap>
  </main>
</template>

<script>
import SidePanel from './../../SidePanel.vue';
import PageDecorator from '.storybook/decorators/PageDecorator.vue';

export default {
  components: { SidePanel },
  decorator: PageDecorator,
};
</script>
