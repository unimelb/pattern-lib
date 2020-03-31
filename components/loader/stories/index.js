import { storiesOf } from '@storybook/vue';
import { createStory } from 'storybook/utils';

import LoaderDefault from './LoaderDefault.vue';

storiesOf('Loader', module)
  .add('Default', createStory(LoaderDefault));
