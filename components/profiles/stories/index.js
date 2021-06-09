import { storiesOf } from '@storybook/vue';
import { createStory } from 'storybook/utils';

// alumni
import LightBackground from './LightBackground';
import DarkBackground from './DarkBackground';

// accordion
import Accordion from './Accordion';

storiesOf('Profiles / Alumni', module)
  .add('Light background', createStory(LightBackground))
  .add('Dark Background', createStory(DarkBackground));

storiesOf('Profiles / Accordion', module)
  .add('Default', createStory(Accordion));
