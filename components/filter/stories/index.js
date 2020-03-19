import { storiesOf } from '@storybook/vue';
import { createStory } from 'storybook/utils';

import AccordionFilterStory from './AccordionFilterStory.vue';
import AccordionFilterStoryCMS from './AccordionFilterStoryCMS.vue';
import CardsFilterStory from './CardsFilterStory.vue';
import CardsFilterStoryCMS from './CardsFilterStoryCMS.vue';

storiesOf('Filter/Components', module)
  .add('Accordion Filter', createStory(AccordionFilterStory))
  .add('Accordion Filter (CMS)', createStory(AccordionFilterStoryCMS))
  .add('Cards Filter', createStory(CardsFilterStory))
  .add('Cards Filter (CMS)', createStory(CardsFilterStoryCMS));
