<template>
  <div>
    <ButtonTwoIcons
      text="Button 2 icons example"
      href="www.unimelb.edu.au"
      right-icon="arrow-right"
      left-icon="heart"
      color="teal" />
    <ButtonTwoIcons
      text="Button 2 icons example"
      href="www.unimelb.edu.au"
      right-icon="arrow-right"
      left-icon="info"
      color="orange" />
    <ButtonTwoIcons
      text="Button 2 icons example"
      href="www.unimelb.edu.au"
      right-icon="arrow-right"
      left-icon="location"
      color="green" />
    <ButtonTwoIcons
      href="www.google.com"
      left-icon="globe-asia"
      right-icon="arrow-right"
      disabled />
  </div>
</template>

<script>
import ButtonTwoIcons from '../ButtonTwoIcons.vue';

export default {
  components: {
    ButtonTwoIcons,
  },
  readme: { source: true, html: true },
};
</script>
