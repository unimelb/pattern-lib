import { storiesOf } from '@storybook/vue';
import { createStory } from '../../../.storybook/utils';

import CarouselDefault from './CarouselDefault.vue';
import CarouselLong from './CarouselLongTiming.vue';
import CarouselSingle from './CarouselSingle.vue';
import CarouselTwoItems from './CarouselTwoItems.vue';

/* Section - Focus  */
storiesOf('Carousel', module)
  .add('Default', createStory(CarouselDefault))
  .add('Long', createStory(CarouselLong))
  .add('Single', createStory(CarouselSingle))
  .add('Two Items', createStory(CarouselTwoItems));
