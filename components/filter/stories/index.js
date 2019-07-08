import { storiesOf } from '@storybook/vue';
import { createStory } from '../../../.storybook/utils';

import AccordionFilterStory from './AccordionFilterStory.vue';
import CardsFilterStory from './CardsFilterStory.vue';

storiesOf('Filter / Components', module)
  .add('Accordion Filter', createStory(AccordionFilterStory))
  .add('Cards Filter', createStory(CardsFilterStory));
