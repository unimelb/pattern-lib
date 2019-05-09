<template>
  <SectionWrap
    small
    bg-image="https://images.unsplash.com/photo-1505639594395-22cc30113a4e?dpr=1&auto=compress,format&fit=crop&w=1200&h=&q=80&cs=tinysrgb&crop="
  >
    <CardFocusBox
      class="card--image-focus--col-brand bg-white"
      title="Learning and teaching">
      <h2>Header</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim accusamus dolorum labore, odit libero maxime nam inventore neque ratione optio quos sapiente atque ex fuga blanditiis alias, ducimus ut? Voluptatibus.</p>
      <a
        href="https://www.unimelb.edu.au"
        class="btn btn--icon btn--icon--chevron-right"
      >Call to Action</a>
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
