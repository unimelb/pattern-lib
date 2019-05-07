import { storiesOf } from '@storybook/vue';
import { createStory } from '../../../.storybook/utils';

import LightBackground from './LightBackground';
import DarkBackground from './DarkBackground';

storiesOf('Alumni Profiles', module)
  .add('Light background', createStory(LightBackground))
  .add('Dark Background', createStory(DarkBackground));
