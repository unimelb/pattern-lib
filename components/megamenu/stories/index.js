import { storiesOf } from '@storybook/vue';

import { createStory } from 'storybook/utils';

import HybridMenu from './HybridMenu.vue';
import HybridMenuProp from './HybridMenuProp.vue';
import MegaMenuTitle from './MegaMenuTitle.vue';
import HybridMenuWithTopNav from './HybridMenuWithTopNav.vue';
import MegaMenuAlt from './MegaMenuAlt.vue';

storiesOf('Mega menu', module)
  .add('Menu / hamburger hybrid', createStory(HybridMenu))
  .add('Mega Menu, populated via prop', createStory(HybridMenuProp))
  .add('Mega Menu Title with Prop', createStory(MegaMenuTitle))
  .add('Mega Menu with Top nav', createStory(HybridMenuWithTopNav))
  .add('Mega Menu Alt (Today)', createStory(MegaMenuAlt));
