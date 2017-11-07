import { storiesOf } from '@storybook/vue';
import { createStory } from '.storybook/utils';

import ImageLoaderDefault from './ImageLoaderDefault.vue';
import BackgroundLoaderDefault from './BackgroundLoaderDefault.vue';

storiesOf('Progressive Images', module)
  .add('Image element loader', createStory(ImageLoaderDefault))
  .add('Background image loader', createStory(BackgroundLoaderDefault));
