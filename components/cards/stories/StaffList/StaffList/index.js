import { storiesOf } from '@storybook/vue';
import { createStory } from '../../../../../.storybook/utils';

import Story1 from './Story1.vue';
/* ##Import story component here */

/* Section - Staff Listing  */
storiesOf('Cards/Staff List/Bios', module)
  .add('Staff bios', createStory(Story1));
/* ##Story goes here */
