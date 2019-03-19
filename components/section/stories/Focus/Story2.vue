<template>
  <SectionWrap
    bg-image="https://images.unsplash.com/photo-1505639594395-22cc30113a4e?dpr=1&auto=compress,format&fit=crop&w=1200&h=&q=80&cs=tinysrgb&crop="
  >
    <CardFocusBox
      class="card--image-focus--col-brand"
      title="Learning and teaching">
      <h2 class="text-left">Header</h2>
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
