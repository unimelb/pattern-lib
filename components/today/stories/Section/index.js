import { storiesOf } from '@storybook/vue';
import { createStory } from 'storybook/utils';

import StandardWithColumns from './StandardWithColumns.vue';
import StandardWithImage from './StandardWithImage.vue';
import ThreeUp from './ThreeUp.vue';
import Columns from './Columns.vue';
import Bordered from './Bordered.vue';
import QuickLinks from './QuickLinks.vue';

storiesOf('Today/Section', module)
  .add('Standard (with columns)', createStory(StandardWithColumns))
  .add('Standard (with image)', createStory(StandardWithImage))
  .add('3 Up', createStory(ThreeUp))
  .add('Columns', createStory(Columns))
  .add('Bordered', createStory(Bordered))
  .add('Quick Links', createStory(QuickLinks));
