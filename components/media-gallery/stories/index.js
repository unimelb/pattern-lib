import {
  storiesOf,
} from '@storybook/vue';
import {
  createStory,
} from '../../../.storybook/utils';

import MediaGalleryInPage from './MediaGalleryInPage.vue';
import MediaGalleryOverlay2 from './MediaGalleryOverlay2.vue';
import MediaGalleryOverlay3 from './MediaGalleryOverlay3.vue';
import MediaGalleryOverlay4 from './MediaGalleryOverlay4.vue';
import MediaGalleryOverlayWithCaption2 from './MediaGalleryOverlayWithCaption2.vue';
import MediaGalleryOverlayWithCaption3 from './MediaGalleryOverlayWithCaption3.vue';
import MediaGalleryOverlayWithCaption4 from './MediaGalleryOverlayWithCaption4.vue';
import MediaGalleryThumbnails2 from './MediaGalleryThumbnails2.vue';
import MediaGalleryThumbnails3 from './MediaGalleryThumbnails3.vue';
import MediaGalleryThumbnails4 from './MediaGalleryThumbnails4.vue';
/* ##Import story component here */

storiesOf('Media Gallery/In Page', module)
  .add('Default', createStory(MediaGalleryInPage));

storiesOf('Media Gallery/Overlay', module)
  .add('2 col', createStory(MediaGalleryOverlay2))
  .add('3 col', createStory(MediaGalleryOverlay3))
  .add('4 col', createStory(MediaGalleryOverlay4));

storiesOf('Media Gallery/Overlay with captions', module)
  .add('2 col', createStory(MediaGalleryOverlayWithCaption2))
  .add('3 col', createStory(MediaGalleryOverlayWithCaption3))
  .add('4 col', createStory(MediaGalleryOverlayWithCaption4));

storiesOf('Media Gallery/Thumbnails', module)
  .add('2 col', createStory(MediaGalleryThumbnails2))
  .add('3 col', createStory(MediaGalleryThumbnails3))
  .add('4 col', createStory(MediaGalleryThumbnails4));
