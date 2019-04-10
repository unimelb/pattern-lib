import {
  storiesOf,
} from '@storybook/vue';
import {
  createStory,
} from '../../../.storybook/utils';

import MediaGalleryInPage from './MediaGalleryInPage.vue';
import MediaGalleryPopOver from './MediaGalleryPopOver.vue';
import MediaGalleryPopOverWithCaption from './MediaGalleryPopOverWithCaption.vue';
/* ##Import story component here */

storiesOf('Media Gallery', module)
  .add('In page', createStory(MediaGalleryInPage))
  .add('Pop Over', createStory(MediaGalleryPopOver))
  .add('Pop Over with captions', createStory(MediaGalleryPopOverWithCaption));
