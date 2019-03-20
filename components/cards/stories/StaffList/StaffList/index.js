import { storiesOf } from '@storybook/vue';
import { createStory } from '../../../../../.storybook/utils';

import Story1 from './Story1.vue';
import Story2 from './Story2.vue';
/* ##Import story component here */

/* Section - Staff Listing  */
storiesOf('Cards/Staff List/Bios', module)
  .add('Staff bios', createStory(Story1))
  .add('Staff 3 cols with tel/email', createStory(Story2));
/* ##Story goes here */
