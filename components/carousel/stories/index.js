import { storiesOf } from '@storybook/vue';
import { createStory } from '../../../.storybook/utils';

import CarouselDefault from './CarouselDefault.vue';
import CarouselLong from './CarouselLongTiming';


/* Section - Focus  */
storiesOf('Carousel', module)
  .add('Default', createStory(CarouselDefault))
  .add('Long', createStory(CarouselLong));
