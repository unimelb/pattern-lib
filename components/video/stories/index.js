import { storiesOf } from '@storybook/vue';
import { createStory } from 'storybook/utils';

import VideoLandscape from './VideoLandscape.vue';
import VideoPortrait from './VideoPortrait.vue';
import FullWidthVideo from './FullWidthVideo.vue';

storiesOf('Video', module)
  .add('Video - Landscape', createStory(VideoLandscape))
  .add('Video - Portrait', createStory(VideoPortrait))
  .add('Video - Full width', createStory(FullWidthVideo));
