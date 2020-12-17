<template>
  <div>
    <SectionWrap bg-color="white">
      <Enquiry>
        <MceForm />
      </Enquiry>
    </SectionWrap>

    <SectionWrap bg-color="inverted">
      <p class="text-center">
        This one uses custom markup for the "trigger" part:
      </p>
      <Enquiry>
        <template slot="trigger">
          <ButtonIcon
            element="span"
            class="btn--secondary">
            Enquire within!
          </ButtonIcon>
        </template>
        <MceForm />
      </Enquiry>
    </SectionWrap>
  </div>
</template>

<script>
import Enquiry from 'components/toggle/Enquiry.vue';
import MceForm from 'components/forms/stories/MceForm.vue';
import { codeBlock } from 'storybook/utils';

const markup = codeBlock(`
<enquiry>
  <form>
    ...
  </form>
</enquiry>

<enquiry>
  <template slot="trigger">
    <span class="btn--secondary btn">
      <span class="push-icon">Enquire within! <svg width="15px" height="15px" focusable="false" class="push-icon__icon"><use xlink:href="#icon-chevron-right"></use></svg></span>
    </span>        
  </template>

  <form>
    ...
  </form>
</enquiry>
`);

export default {
  components: { Enquiry, MceForm },
  readme: {
    custom: markup,
    source: false,
  },
};
</script>
