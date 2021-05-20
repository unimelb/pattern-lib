import { storiesOf } from '@storybook/vue';
import { createStory } from 'storybook/utils';

import Text from './Text.vue';
import TextLong from './TextLong.vue';
import Videos from './Videos.vue';

storiesOf('Today/Testimonials', module)
  .add('Text', createStory(Text))
  .add('Text (Long)', createStory(TextLong))
  .add('Videos', createStory(Videos));
