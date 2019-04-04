import { storiesOf } from '@storybook/vue';
import { createStory } from '../../../.storybook/utils';

import PhotoGalleryInPage from './InPage';
/* ##Import story component here */

storiesOf('Photo Gallery In Page', module)
  .add('In page', createStory(PhotoGalleryInPage));
