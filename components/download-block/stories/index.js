import { storiesOf } from '@storybook/vue';
import { createStory } from '../../../.storybook/utils';

import DownloadBlockDefault from './DownloadBlockDefault.vue';

storiesOf('Download Block', module)
  .add('Default', createStory(DownloadBlockDefault));
