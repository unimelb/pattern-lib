import { storiesOf } from '@storybook/vue';
import { createStory } from '../../../.storybook/utils';

import Accordion from './Accordion.vue';
import AccordionGroup from './AccordionGroup.vue';
import AccordionGroupSolo from './AccordionGroupSolo.vue';
import AccordionGroupOpen from './AccordionGroupOpen.vue';
import ToggleBlockMobile from './ToggleBlockMobile.vue';
import AccordionEmpty from './AccordionEmpty.vue';
import SampleEnquiry from './SampleEnquiry.vue';

storiesOf('Accordion', module)
  .add('Single accordion', createStory(Accordion))
  .add('Grouped accordions', createStory(AccordionGroup))
  .add('Grouped accordions, single panel opens', createStory(AccordionGroupSolo))
  .add('Grouped accordions, first panel open', createStory(AccordionGroupOpen))
  .add('Mobile only toggle block', createStory(ToggleBlockMobile))
  .add('Empty title', createStory(AccordionEmpty))
  .add('Enquiry (toggle block)', createStory(SampleEnquiry));
