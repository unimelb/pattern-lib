import { storiesOf } from '@storybook/vue';
import { createStory } from '.storybook/utils';

import Sprite from './Sprite.vue';
import docs from './docs.md';

storiesOf('Icons', module)
  .add('Sprite', createStory(Sprite, { customReadme: docs }));
