import {
  storiesOf,
} from '@storybook/vue';
import {
  createStory,
} from '../../../.storybook/utils';

import ShowcaseDefault from './ShowcaseDefault.vue';
/* ##Import story component here */

/* Focus Boxes */
storiesOf('Showcase', module)
  .add('Showcase default', createStory(ShowcaseDefault));
/* ##Story goes here */
