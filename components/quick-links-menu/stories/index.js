import { storiesOf } from '@storybook/vue';
import { createStory } from '.storybook/utils';

import QuickLinksDefault from './QuickLinksDefault.vue';
import QuickLinksAlternateStory1 from './QuickLinksAlternateStory1.vue';
import QuickLinksAlternateStory2 from './QuickLinksAlternateStory2.vue';
import QuickLinksAlternateStory3 from './QuickLinksAlternateStory3.vue';

storiesOf('Quick Link Menu', module)
  .add('Default', createStory(QuickLinksDefault))
  .add('Alternate B', createStory(QuickLinksAlternateStory1))
  .add('Alternate C', createStory(QuickLinksAlternateStory2))
  .add('Alternate D', createStory(QuickLinksAlternateStory3));
