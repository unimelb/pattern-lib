import { storiesOf } from '@storybook/vue';
import { createStory } from '.storybook/utils';

import HeaderFullwidth from './HeaderFullwidth.vue';
import MegaMenu from './MegaMenu.vue';
import HybridMenu from './HybridMenu.vue';

storiesOf('Page / Mega menu', module)
  .add('Header', createStory(HeaderFullwidth))
  .add('Header and mega menu', createStory(MegaMenu))
  .add('Header and mega menu / hamburger hybrid', createStory(HybridMenu));
