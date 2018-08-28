import { storiesOf } from '@storybook/vue';
import { createStory } from '../../../.storybook/utils';

import NavBarDefault from './NavBarDefault.vue';

storiesOf('Nav Bar', module)
  .add('Default', createStory(NavBarDefault));
