import { storiesOf } from '@storybook/vue';
import { createStory } from '.storybook/utils';

import PhotoGalleryDefault from './PhotoGalleryDefault.vue';
import WithCaptions from './WithCaptions.vue';
import WithoutPopup from './WithoutPopup.vue';
/* ##Import story component here */

storiesOf('Photo Gallery', module)
  .add('Default', createStory(PhotoGalleryDefault))
  .add('With captions', createStory(WithCaptions))
  .add('Without popup', createStory(WithoutPopup));
