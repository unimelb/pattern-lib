import { storiesOf } from '@storybook/vue';
import { createStory } from '../../../.storybook/utils';

import Default from './Default.vue';

/* ##Import story component here */

storiesOf('Screen reader', module)
  .add('Default', createStory(Default));
