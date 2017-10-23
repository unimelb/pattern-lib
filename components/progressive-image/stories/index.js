import { storiesOf } from '@storybook/vue';
import { createStory } from '.storybook/utils';

import Story1 from './Story1.vue';
import Story2 from './Story2.vue';
import prgbgReadme from './progressive-background.md';
import prgimgReadme from './progressive-image.md';

storiesOf('Images / Progressive', module)
  .add('With Progressive Background Component', createStory(Story1, { customReadme: prgbgReadme }))
  .add('With Progressive Image Component', createStory(Story2, { customReadme: prgimgReadme }));
