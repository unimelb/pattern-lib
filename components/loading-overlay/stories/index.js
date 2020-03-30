import { storiesOf } from '@storybook/vue';
import { createStory } from 'storybook/utils';

import LoadingOverlayDefault from './LoadingOverlayDefault.vue';
import LoadingOverlayWithoutSpinner from './LoadingOverlayWithoutSpinner.vue';
import LoadingOverlaySpinnerWithText from './LoadingOverlaySpinnerWithText.vue';
/* ##Import story component here */

storiesOf('Loading overlay', module)
  .add('Default', createStory(LoadingOverlayDefault))
  .add('With Text', createStory(LoadingOverlaySpinnerWithText))
  .add('Without Spinner', createStory(LoadingOverlayWithoutSpinner));
