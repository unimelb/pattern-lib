import { storiesOf } from '@storybook/vue';

import { createStory } from '../../../../.storybook/utils';

import HybridMenu from './HybridMenu.vue';
import HybridMenuProp from './HybridMenuProp.vue';
import MegaMenuTitle from './MegaMenuTitleProp.vue';
import MegaMenuTitleAperture from './MegaMenuTitleAperture.vue';
import HybridMenuWithTopNav from './HybridMenuWithTopNav.vue';
import MegaMenuExpanded from './MegaMenuExpanded.vue';

storiesOf('Page / Mega menu', module)
  .add('Menu / hamburger hybrid', createStory(HybridMenu))
  .add('Mega Menu, populated via prop', createStory(HybridMenuProp))
  .add('Mega Menu Title with Prop', createStory(MegaMenuTitle))
  .add('Mega Menu Title with Prop and Aperture', createStory(MegaMenuTitleAperture))
  .add('Mega Menu with Top nav', createStory(HybridMenuWithTopNav))
  .add('Mega Menu expanded', createStory(MegaMenuExpanded));
