import { storiesOf } from '@storybook/vue';
import { createStory } from '.storybook/utils';

import HybridMenu from './HybridMenu.vue';

storiesOf('Page / Mega menu', module)
  .add('Menu / hamburger hybrid', createStory(HybridMenu));
