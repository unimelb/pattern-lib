import {
  storiesOf,
} from '@storybook/vue';
import {
  createStory,
} from '../../../.storybook/utils';

import MediaGalleryInPage from './MediaGalleryInPage.vue';
import MediaGalleryOverlay from './MediaGalleryOverlay.vue';
import MediaGalleryOverlayWithCaption from './MediaGalleryOverlayWithCaption.vue';
import MediaGalleryThumbnails from './MediaGalleryThumbnails.vue';
/* ##Import story component here */

storiesOf('Media Gallery', module)
  .add('In page', createStory(MediaGalleryInPage))
  .add('Overlay', createStory(MediaGalleryOverlay))
  .add('Overlay with captions', createStory(MediaGalleryOverlayWithCaption))
  .add('Standalone thumbnails', createStory(MediaGalleryThumbnails));
