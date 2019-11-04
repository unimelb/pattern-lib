import { storiesOf } from '@storybook/vue';
import { createStory } from '../../../.storybook/utils';

import Default from './Default.vue';

/* ##Import story component here */

storiesOf('Screen reader Jump To', module)
  .add('Skip navigation', createStory(Default));
