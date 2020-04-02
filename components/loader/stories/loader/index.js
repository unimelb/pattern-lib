import { storiesOf } from '@storybook/vue';
import { createStory } from 'storybook/utils';

import LoaderDefault from './LoaderDefault.vue';

storiesOf('loader/Loader', module)
  .add('Default', createStory(LoaderDefault));
