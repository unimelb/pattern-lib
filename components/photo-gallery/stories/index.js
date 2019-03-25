import { storiesOf } from '@storybook/vue';
import { createStory } from '../../../.storybook/utils';

import PhotoGalleryDefault from './PhotoGalleryDefault.vue';
import WithCaptions from './WithCaptions.vue';
import SingleColumn from './SingleColumn.vue';
import WithoutPopup from './WithoutPopup.vue';
import TwoGalleries from './TwoGalleries.vue';
/* ##Import story component here */

storiesOf('Photo Gallery (Deprecated)', module)
  .add('Default', createStory(PhotoGalleryDefault))
  .add('With captions', createStory(WithCaptions))
  .add('Single Column', createStory(SingleColumn))
  .add('Without popup', createStory(WithoutPopup))
  .add('Two on page', createStory(TwoGalleries));
