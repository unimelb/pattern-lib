import { storiesOf } from '@storybook/vue';
import { createStory } from '.storybook/utils';

import Video16By9 from './Video16By9.vue';
import Video21By9 from './Video21By9.vue';
import VideoInSection from './VideoInSection.vue';
import SoundcloudClassic from './SoundcloudClassic.vue';
import SoundcloudVisual from './SoundcloudVisual.vue';

storiesOf('Embed', module)
  .add('Video - 16/9', createStory(Video16By9))
  .add('Video - 21/9', createStory(Video21By9))
  .add('Video - in section', createStory(VideoInSection))
  .add('SoundCloud - classic', createStory(SoundcloudClassic))
  .add('SoundCloud - visual', createStory(SoundcloudVisual));
