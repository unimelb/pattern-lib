import { storiesOf } from '@storybook/vue';
import { createStory } from 'storybook/utils';

import Video16By9 from './Video16By9.vue';
import Video21By9 from './Video21By9.vue';
import VideoInSection from './VideoInSection.vue';
import VideoInContentBlock from './VideoInContentBlock.vue';
import SoundcloudClassic from './SoundcloudClassic.vue';
import SoundcloudVisual from './SoundcloudVisual.vue';
import VideoLandscape from './VideoLandscape.vue';
import VideoPortrait from './VideoPortrait.vue';
import FullWidthVideo from './FullWidthVideo.vue';

storiesOf('Embed', module)
  .add('Video - 16/9', createStory(Video16By9))
  .add('Video - 21/9', createStory(Video21By9))
  .add('Video - in content block', createStory(VideoInContentBlock))
  .add('Video - in section', createStory(VideoInSection))
  .add('Video (Today) - Landscape', createStory(VideoLandscape))
  .add('Video (Today) - Portrait', createStory(VideoPortrait))
  .add('Video (Today) - Full width', createStory(FullWidthVideo))
  .add('SoundCloud - classic', createStory(SoundcloudClassic))
  .add('SoundCloud - visual', createStory(SoundcloudVisual));
