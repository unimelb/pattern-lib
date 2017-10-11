import { storiesOf } from '@storybook/vue';
import { createStory } from '.storybook/utils';

import AccordionDefault from './AccordionDefault.vue';
import AccordionFirstOpen from './AccordionFirstOpen.vue';
import AccordionNoJs from './AccordionNoJs.vue';

storiesOf('Accordion', module)
  .add('Default', createStory(AccordionDefault))
  .add('First open', createStory(AccordionFirstOpen))
  .add('No js', createStory(AccordionNoJs));
