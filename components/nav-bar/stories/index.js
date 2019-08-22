import { storiesOf } from '@storybook/vue';
import { createStory } from 'storybook/utils';

import NavBarDefault from './NavBarDefault.vue';
import NavBarToggle from './NavBarToggle.vue';

storiesOf('Nav Bar', module)
  .add('Default', createStory(NavBarDefault))
  .add('With mobile toggle', createStory(NavBarToggle));
