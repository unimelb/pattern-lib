import { storiesOf } from '@storybook/vue';
import { createStory } from 'storybook/utils';

import OnLightBackground from './OnLightBackground';
import OnDarkBackground from './OnDarkBackground';
import './2021';

storiesOf('Testimonials', module)
  .add('On Dark Background', createStory(OnDarkBackground))
  .add('On Light Background', createStory(OnLightBackground));
