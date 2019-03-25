import {
  storiesOf,
} from '@storybook/vue';
import {
  createStory,
} from '../../../.storybook/utils';

import PhotoGalleryInPage from './InPage';
import PopOver from './PopOver.vue';
import PopOverWithCaptions from './PopOverWithCaptions.vue';
/* ##Import story component here */

storiesOf('Photo Gallery In Page', module)
  .add('In page', createStory(PhotoGalleryInPage))
  .add('PopOver', createStory(PopOver))
  .add('PopOver with captions', createStory(PopOverWithCaptions));
