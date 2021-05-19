import { storiesOf } from '@storybook/vue';
import { createStory } from 'storybook/utils';

import StandardWithColumns from './StandardWithColumns.vue';
import StandardWithImage from './StandardWithImage.vue';
import ThreeUp from './ThreeUp.vue';
import Columns from './Columns.vue';
import TestimonialsText from './TestimonialsText.vue';
import TestimonialsTextLong from './TestimonialsTextLong.vue';
import TestimonialsVideo from './TestimonialsVideo.vue';
import Bordered from './Bordered.vue';
import CourseIndex from './CourseIndex.vue';

storiesOf('Today/Section', module)
  .add('Standard (with columns)', createStory(StandardWithColumns))
  .add('Standard (with image)', createStory(StandardWithImage))
  .add('3 Up', createStory(ThreeUp))
  .add('Columns', createStory(Columns))
  .add('Testimonials (text)', createStory(TestimonialsText))
  .add('Testimonials (long text)', createStory(TestimonialsTextLong))
  .add('Testimonials (video)', createStory(TestimonialsVideo))
  .add('Bordered', createStory(Bordered))
  .add('Course Index', createStory(CourseIndex));
