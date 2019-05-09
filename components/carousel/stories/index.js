import { storiesOf } from '@storybook/vue';
import { createStory } from '../../../.storybook/utils';

import CarouselDefault from './CarouselDefault.vue';


/* Section - Focus  */
storiesOf('Carousel', module)
  .add('Default', createStory(CarouselDefault));
