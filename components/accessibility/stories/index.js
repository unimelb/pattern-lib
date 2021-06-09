import { storiesOf } from '@storybook/vue';
import { createStory } from 'storybook/utils';

import HiddenPageResources from './HiddenPageResources.vue';

/* ##Import story component here */

storiesOf('Accessibility', module)
  .add('Hidden page resources', createStory(HiddenPageResources));
/* ##Story goes here */
