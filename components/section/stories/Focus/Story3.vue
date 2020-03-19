<template>
  <SectionWrap
    progressive
    small
    bg-image="https://picsum.photos/seed/1/1200/540">
    <CardFocusBox
      class="card--image-focus--col-brand bg-white"
      title="Learning and teaching">
      <h2>Header</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim accusamus dolorum labore, odit libero maxime nam inventore neque ratione optio quos sapiente atque ex fuga blanditiis alias, ducimus ut? Voluptatibus.</p>
    </CardFocusBox>
  </SectionWrap>
</template>

<script>
import CardFocusBox from '../../../cards/CardFocusBox.vue';

export default {
  components: { CardFocusBox },
  readme: { source: true, html: true },
};
</script>
