<template>
  <SectionWrap bg-color="white">
    <h2>Section Heading</h2>
    <p>Lorem ipsum dolor sit amet, <a href="">consectetur adipisicing</a> elit. Adipisci fugiat odio cupiditate ad nisi exercitationem incidunt reprehenderit nemo repellendus ea, eveniet, nostrum sunt earum similique quaerat maxime, iure recusandae inventore.</p>
  </SectionWrap>
</template>

<script>
import { codeBlock } from 'storybook/utils';

const markup = codeBlock(`
<SectionWrap bg-color="white">
  ...
</SectionWrap>
`);

export default {
  readme: {
    custom: markup,
    source: true,
  },
};
</script>
