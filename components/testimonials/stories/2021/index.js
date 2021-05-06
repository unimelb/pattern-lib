import { storiesOf } from '@storybook/vue';
import { createStory } from 'storybook/utils';

import LongTextTestimonial from './LongTextTestimonial';
import TextTestimonial from './TextTestimonial';
import VideoTestimonials from './VideoTestimonials';

storiesOf('Testimonials/2021', module)
  .add('Text', createStory(TextTestimonial))
  .add('Text (Long)', createStory(LongTextTestimonial))
  .add('Videos', createStory(VideoTestimonials));
