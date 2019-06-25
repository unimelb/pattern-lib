<template>
  <SectionWrap
    small
    bg-color="white">
    <h2>Section Heading</h2>
    <p>
      Lorem ipsum dolor sit amet,
      <a href>consectetur adipisicing</a> elit. Adipisci fugiat odio cupiditate ad nisi exercitationem incidunt reprehenderit nemo repellendus ea, eveniet, nostrum sunt earum similique quaerat maxime, iure recusandae inventore.
    </p>
    <div>
      <ButtonIcon size="sm">Button Example</ButtonIcon>
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
