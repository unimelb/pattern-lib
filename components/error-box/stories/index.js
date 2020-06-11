import { storiesOf } from '@storybook/vue';
import { createStory } from 'storybook/utils';

import ErrorBoxDefault from './ErrorBoxDefault.vue';

storiesOf('Error Box', module)
  .add('Default', createStory(ErrorBoxDefault));
