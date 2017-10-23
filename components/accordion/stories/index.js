import { storiesOf } from '@storybook/vue';
import { createStory } from '.storybook/utils';

import AccordionDefault from './AccordionDefault.vue';
import AccordionFirstOpen from './AccordionFirstOpen.vue';
import AccordionSoloSelect from './AccordionSoloSelect.vue';
import AccordionNoJs from './AccordionNoJs.vue';

storiesOf('Accordion', module)
  .add('Default', createStory(AccordionDefault, { shallowRender: true }))
  .add('First panel open', createStory(AccordionFirstOpen, { shallowRender: true }))
  .add('Single panel open at a time', createStory(AccordionSoloSelect, { shallowRender: true }))
  .add('No js', createStory(AccordionNoJs, { shallowRender: true }));
