<template>
  <div>
    <ButtonTwoIcons
      text="Button 2 icons example"
      href="www.unimelb.edu.au"
      right-icon="chevron-left"
      left-icon="chevron-right"
      color="teal" />
    <ButtonTwoIcons
      text="Button 2 icons example"
      href="www.unimelb.edu.au"
      right-icon="chevron-left"
      left-icon="info"
      color="orange" />
    <ButtonTwoIcons
      text="Button 2 icons example"
      href="www.unimelb.edu.au"
      right-icon="chevron-left"
      left-icon="location"
      color="green" />
    <ButtonTwoIcons
      href="www.google.com"
      left-icon="chevron-right"
      right-icon="chevron-left"
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
