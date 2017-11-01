import { storiesOf } from '@storybook/vue';
import { createStory } from '.storybook/utils';

import PhotoGalleryDefault from './PhotoGalleryDefault.vue';
/* ##Import story component here */

storiesOf('Photo Gallery', module)
  .add('Default', createStory(PhotoGalleryDefault));
