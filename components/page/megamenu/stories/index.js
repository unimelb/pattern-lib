import {
  storiesOf,
} from '@storybook/vue';
import {
  createStory,
} from '../../../../.storybook/utils';

import HybridMenu from './HybridMenu.vue';
import HybridMenuProp from './HybridMenuProp.vue';
import MenuSecondary from './MenuSecondary.vue';

storiesOf('Page / Mega menu', module)
  .add('Hamburger hybrid', createStory(HybridMenu))
  .add('Mega Menu, populated via prop', createStory(HybridMenuProp))
  .add('Menu with top items', createStory(MenuSecondary));
