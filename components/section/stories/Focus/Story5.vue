<template>
  <SectionWrap
    small
    bg-image="https://images.unsplash.com/photo-1505639594395-22cc30113a4e?dpr=1&auto=compress,format&fit=crop&w=1200&h=&q=80&cs=tinysrgb&crop="
  >
    <FocusWrapper
      padded
      class="grid bg-white">

      <h2>Header</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim accusamus dolorum labore, odit libero maxime nam inventore neque ratione optio quos sapiente atque ex fuga blanditiis alias, ducimus ut? Voluptatibus.</p>
      <button-icon href="https://www.unimelb.edu.au">Call to Action</button-icon>
    </FocusWrapper>

  </SectionWrap>
</template>

<script>
import FocusWrapper from '../../../focus-wrapper/FocusWrapper.vue';

export default {
  components: { FocusWrapper },
  readme: { source: true, html: true },
};
</script>
