import { storiesOf } from '@storybook/vue';
import { createStory } from 'storybook/utils';

import ThreeUp from './ThreeUp.vue';

storiesOf('Today/Section', module)
  .add('3 Up', createStory(ThreeUp));
