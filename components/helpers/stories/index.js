import { storiesOf } from '@storybook/vue';
import { createStory } from '../../../.storybook/utils';

import Backgrounds from './Backgrounds.vue';
import Boxes from './Boxes.vue';
import Clearfix from './Clearfix.vue';
import Colours from './Colours.vue';
import Icons from './Icons.vue';
import Links from './Links.vue';
import Lists from './Lists.vue';
import MaxWidthWrapper from './MaxWidthWrapper.vue';
import Texts from './Texts.vue';

storiesOf('Helpers', module)
  .add('Backgrounds', createStory(Backgrounds))
  .add('Boxes', createStory(Boxes))
  .add('Clearfix', createStory(Clearfix))
  .add('Colours', createStory(Colours))
  .add('Icons', createStory(Icons))
  .add('Links', createStory(Links))
  .add('Lists', createStory(Lists))
  .add('MaxWidthWrapper', createStory(MaxWidthWrapper))
  .add('Texts', createStory(Texts));
