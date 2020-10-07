import { storiesOf } from '@storybook/vue';
import { createStory } from 'storybook/utils';

import AccordionFilterStory from './AccordionFilterStory.vue';
import AccordionFilterStoryCMS from './AccordionFilterStoryCMS.vue';
import CardsFilterStory from './CardsFilterStory.vue';
import CardsFilterStoryCMS from './CardsFilterStoryCMS.vue';
import CardsFilterCategoriesStory from './CardsFilterCategoriesStory.vue';

storiesOf('Filter/Components', module)
  .add('Accordion Filter', createStory(AccordionFilterStory))
  .add('Accordion Filter (CMS)', createStory(AccordionFilterStoryCMS))
  .add('Cards Filter', createStory(CardsFilterStory))
  .add('Cards Filter (CMS)', createStory(CardsFilterStoryCMS))
  .add('Cards Filter Categories', createStory(CardsFilterCategoriesStory));
