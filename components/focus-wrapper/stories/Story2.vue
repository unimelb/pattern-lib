<template>
  <SectionWrap small>
    <FocusWrapper
      color="navy"
      padded
      class="bg-white"
    />

    <br>

    <FocusWrapper
      color="teal"
      padded
      class="bg-white"
    />

    <br>

    <FocusWrapper
      color="yellow"
      padded
      class="bg-white"
    />

    <br>

    <FocusWrapper
      color="emerald"
      padded
      class="bg-white"
    />

    <br>

    <FocusWrapper
      color="orange"
      padded
      class="bg-white"
    />

    <br>

    <FocusWrapper
      color="green"
      padded
      class="bg-white"
    />

    <br>

    <FocusWrapper
      color="purple"
      padded
      class="bg-white"
    />

    <br>

    <FocusWrapper
      color="pink"
      padded
      class="bg-white"
    />
  </SectionWrap>
</template>

<script>
import { codeBlock } from '../../../.storybook/utils';
import FocusWrapper from '../FocusWrapper.vue';

const markup = codeBlock(`
  <FocusWrapper color="navy">
    ...
  </FocusWrapper>

  <FocusWrapper color="teal">
    ...
  </FocusWrapper>

  <FocusWrapper color="yellow">
    ...
  </FocusWrapper>

  <FocusWrapper color="emerald">
    ...
  </FocusWrapper>

  <FocusWrapper color="orange">
    ...
  </FocusWrapper>

  <FocusWrapper color="green">
    ...
  </FocusWrapper>

  <FocusWrapper color="purple">
    ...
  </FocusWrapper>

  <FocusWrapper color="pink">
    ...
  </FocusWrapper>
`);

export default {
  components: { FocusWrapper },
  readme: {
    custom: markup,
    source: false,
  },
};
</script>
