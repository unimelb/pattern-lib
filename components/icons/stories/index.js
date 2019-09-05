import { storiesOf } from '@storybook/vue';
import { createStory } from 'storybook/utils';

import Sprite from './Sprite.vue';
import FindACourseSpritesheet from './FindACourseSpritesheet.vue';

storiesOf('Icons', module)
  .add('Spritesheet', createStory(Sprite))
  .add('Find a course spritesheet', createStory(FindACourseSpritesheet));
