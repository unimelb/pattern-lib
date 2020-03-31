import { storiesOf } from '@storybook/vue';
import { createStory } from 'storybook/utils';

import SpinnerDefault from './SpinnerDefault.vue';
import SpinnerWithText from './SpinnerWithText.vue';

storiesOf('Spinner', module)
  .add('Default', createStory(SpinnerDefault))
  .add('With Text', createStory(SpinnerWithText));
