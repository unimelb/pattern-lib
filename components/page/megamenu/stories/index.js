import { storiesOf } from '@storybook/vue';
import { createStory } from '../../../../.storybook/utils';

import HybridMenu from './HybridMenu.vue';
import HybridMenuProp from './HybridMenuProp.vue';
import MegaMenuTitle from './MegaMenuTitleProp.vue';

storiesOf('Page / Mega menu', module)
  .add('Menu / hamburger hybrid', createStory(HybridMenu))
  .add('Mega Menu, populated via prop', createStory(HybridMenuProp))
  .add('Mega Menu Title with Prop', createStory(MegaMenuTitle));
