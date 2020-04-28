import { storiesOf } from '@storybook/vue';
import { createStory } from '../../../.storybook/utils';

import Backgrounds from './Backgrounds.vue';
import Colours from './Colours.vue';
import Texts from './Texts.vue';
import ShimMb from './ShimMb.vue';

storiesOf('Helpers', module)
  .add('Backgrounds', createStory(Backgrounds))
  .add('Shim-mb', createStory(ShimMb))
  .add('Colours', createStory(Colours))
  .add('Texts', createStory(Texts));
