import { storiesOf } from '@storybook/vue';
import { createStory } from '../../../.storybook/utils';

import OnLightBackground from './OnLightBackground';
import OnDarkBackground from './OnDarkBackground';

storiesOf('Testimonials', module)
  .add('On Dark Background', createStory(OnDarkBackground))
  .add('On Light Background', createStory(OnLightBackground));
