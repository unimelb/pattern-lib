import { storiesOf } from '@storybook/vue';
import { createStory } from '.storybook/utils';

import FocusImageReadme from './FocusImageReadme.md';
import HeroImageReadme from './HeroImageReadme.md';
import Story1 from './Story1.vue';
import Story2 from './Story2.vue';
import Story3 from './Story3.vue';
import Story4 from './Story4.vue';
/* ##Import story component here */

/* News Listing Cards */
storiesOf('Listing/Image Listing', module)
  .add('Three Column', createStory(Story1))
  .add('Two Column', createStory(Story3, false, FocusImageReadme))
  .add('Color variations', createStory(Story4))
  .add('Hero Image', createStory(Story2, false, HeroImageReadme));
/* ##Story goes here */
