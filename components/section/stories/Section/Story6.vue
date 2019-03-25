<template>
  <SectionWrap bg-color="black">
    <h2>Section Heading</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci fugiat odio cupiditate ad nisi exercitationem incidunt reprehenderit nemo repellendus ea, eveniet, nostrum sunt earum similique quaerat maxime, iure recusandae inventore.</p>
    <div>
      <ButtonIcon
        inverted
        size="sml">Button Example</ButtonIcon>
    </div>
  </SectionWrap>
</template>

<script>
import ButtonIcon from '../../../buttons/ButtonIcon.vue';

export default {
  components: { ButtonIcon },
  readme: { source: true, html: true },
};
</script>
