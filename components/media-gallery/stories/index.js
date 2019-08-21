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
import MediaGallery2 from './MediaGallery2.vue';
/* ##Import story component here */

storiesOf('Media Gallery', module)
  .add('In page', createStory(MediaGalleryInPage))
  .add('Overlay', createStory(MediaGalleryOverlay))
  .add('Overlay with captions', createStory(MediaGalleryOverlayWithCaption))
  .add('Vue Agile example', createStory(MediaGallery2))
  .add('Standalone thumbnails', createStory(MediaGalleryThumbnails));
